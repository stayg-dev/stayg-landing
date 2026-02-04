import { useEffect, useState } from 'react';
import type { LegacyLink, LegacyScript, LegacyStyle } from './useLegacyAssets';
import { injectLinks, injectScripts, injectStyles } from './useLegacyAssets';

type LegacyState = {
  bodyHtml: string;
  links: LegacyLink[];
  styles: LegacyStyle[];
  scripts: LegacyScript[];
  error?: string;
  loading: boolean;
};

const UPLOAD_REGEX =
  /(https?:)?\/\/(?:www\.)?stayg\.kr\/wp-content\/uploads\//gi;

const rewriteUploads = (html: string) =>
  html.replace(UPLOAD_REGEX, '/uploads/');

const parseDocument = (html: string) => {
  const parser = new DOMParser();
  return parser.parseFromString(html, 'text/html');
};

const shouldSkipScript = (src: string) => {
  const lower = src.toLowerCase();
  // Skip hellopanda popup/theme scripts to prevent modal popups.
  return (
    lower.includes('hellopanda-theme') ||
    lower.includes('hellopanda-theme-expand') ||
    lower.includes('pandassi')
  );
};

const removePopups = (doc: Document) => {
  const popups = doc.querySelectorAll(
    '.hellopanda-popup-block, .wp-block-hellopanda-popup-block',
  );
  popups.forEach((node) => node.remove());
};

const removePcHiddenBlocks = (doc: Document) => {
  const hiddenOnPc = doc.querySelectorAll('.media-query-hide-pc');
  hiddenOnPc.forEach((node) => node.remove());
};

const markHeader = (doc: Document) => {
  const header = doc.querySelector('header');
  if (header) {
    header.classList.add('legacy-header');
  }
};

const rewriteAttributesToUploads = (doc: Document) => {
  const attrTargets = [
    'src',
    'href',
    'srcset',
    'data-src',
    'data-bg',
    'data-background',
    'data-lazy',
    'data-large_image',
    'data-srcset',
    'style',
  ];

  const elements = doc.querySelectorAll<HTMLElement>('[src], [href], [style]');
  elements.forEach((el) => {
    attrTargets.forEach((attr) => {
      const value = el.getAttribute(attr);
      if (!value) return;
      const replaced = rewriteUploads(value);
      if (replaced !== value) {
        el.setAttribute(attr, replaced);
      }
    });
  });

  // Also update meta/content attributes for og:image, etc.
  const metas = doc.querySelectorAll<HTMLMetaElement>('meta[content]');
  metas.forEach((meta) => {
    const value = meta.getAttribute('content');
    if (!value) return;
    const replaced = rewriteUploads(value);
    if (replaced !== value) {
      meta.setAttribute('content', replaced);
    }
  });
};

export const useLegacyPage = (slug: string): LegacyState => {
  const [state, setState] = useState<LegacyState>({
    bodyHtml: '',
    links: [],
    styles: [],
    scripts: [],
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch(`/legacy/snapshot-${slug}.html`);
        if (!response.ok) {
          throw new Error(`Failed to load snapshot-${slug}.html`);
        }
        const raw = await response.text();
        if (cancelled) return;
        const doc = parseDocument(raw);
        const links: LegacyLink[] = Array.from(
          doc.querySelectorAll('link[rel="stylesheet"]'),
        )
          .map((node) => ({
            id: node.id || undefined,
            href: rewriteUploads(node.getAttribute('href') || ''),
          }))
          .filter((item) => !!item.href);

        const styles: LegacyStyle[] = Array.from(
          doc.querySelectorAll('style'),
        ).map((node) => ({
          id: node.id || undefined,
          content: rewriteUploads(node.textContent || ''),
        }));

        const scripts: LegacyScript[] = Array.from(
          doc.querySelectorAll('script[src]'),
        )
          .map((node) => ({
            id: node.id || undefined,
            src: rewriteUploads(node.getAttribute('src') || ''),
          }))
          .filter((item) => !!item.src && !shouldSkipScript(item.src));

        removePopups(doc);
        removePcHiddenBlocks(doc);
        markHeader(doc);
        rewriteAttributesToUploads(doc);

        const bodyHtml = rewriteUploads(doc.body?.innerHTML || '');

        setState({
          bodyHtml,
          links,
          styles,
          scripts,
          loading: false,
        });

        injectLinks(links);
        injectStyles(styles);
        injectScripts(scripts);

        // Align with the original document theme attribute.
        if (doc.documentElement?.getAttribute('data-theme-mode')) {
          document.documentElement.setAttribute(
            'data-theme-mode',
            doc.documentElement.getAttribute('data-theme-mode') || 'light',
          );
        }
      } catch (error) {
        if (cancelled) return;
        setState((prev) => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }));
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return state;
};
