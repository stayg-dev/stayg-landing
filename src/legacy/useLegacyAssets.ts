export type LegacyLink = {
  id?: string;
  href: string;
};

export type LegacyStyle = {
  id?: string;
  content: string;
};

export type LegacyScript = {
  id?: string;
  src: string;
};

const injected = new Set<string>();

const buildKey = (id: string | undefined, value: string) =>
  id ? `${value}::${id}` : value;

export const injectLinks = (links: LegacyLink[]) => {
  if (typeof document === 'undefined') return;
  links.forEach((link) => {
    if (!link.href) return;
    const key = buildKey(link.id, link.href);
    if (injected.has(key)) return;
    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = link.href;
    if (link.id) {
      el.id = link.id;
    }
    el.dataset.legacy = 'true';
    document.head.appendChild(el);
    injected.add(key);
  });
};

export const injectStyles = (styles: LegacyStyle[]) => {
  if (typeof document === 'undefined') return;
  styles.forEach((style) => {
    if (!style.content) return;
    const key = buildKey(style.id, style.content.slice(0, 64));
    if (injected.has(key)) return;
    const el = document.createElement('style');
    if (style.id) {
      el.id = style.id;
    }
    el.dataset.legacy = 'true';
    el.textContent = style.content;
    document.head.appendChild(el);
    injected.add(key);
  });
};

export const injectScripts = (scripts: LegacyScript[]) => {
  if (typeof document === 'undefined') return;
  scripts.forEach((script) => {
    if (!script.src) return;
    const key = buildKey(script.id, script.src);
    if (injected.has(key)) return;
    const el = document.createElement('script');
    el.src = script.src;
    el.async = false;
    el.defer = false;
    if (script.id) {
      el.id = script.id;
    }
    el.dataset.legacy = 'true';
    document.head.appendChild(el);
    injected.add(key);
  });
};
