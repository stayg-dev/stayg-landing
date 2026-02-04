import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLegacyPage } from './useLegacyPage';

type Props = {
  slug: string;
};

type SwiperInstance = {
  destroy: (cleanupStyles?: boolean, cleanupStylesDeep?: boolean) => void;
};

type SwiperConstructor = new (
  el: HTMLElement,
  options: Record<string, unknown>,
) => SwiperInstance;

let swiperLoader: Promise<void> | null = null;

const loadSwiperAssets = () => {
  if (swiperLoader) return swiperLoader;

  swiperLoader = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById('swiper-script-cdn');
    const existingStyle = document.getElementById('swiper-style-cdn');

    if (!existingStyle) {
      const link = document.createElement('link');
      link.id = 'swiper-style-cdn';
      link.rel = 'stylesheet';
      link.href =
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(link);
    }

    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'swiper-script-cdn';
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Swiper'));
    document.body.appendChild(script);
  });

  return swiperLoader;
};

const parseNumber = (value?: string | null) => {
  if (!value) return undefined;
  const cleaned = value.endsWith('px') ? value.replace('px', '') : value;
  const num = Number(cleaned);
  return Number.isNaN(num) ? undefined : num;
};

const parseJSON = (value?: string | null) => {
  if (!value) return undefined;
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return undefined;
  }
};

const buildSwiperOptions = (block: HTMLElement) => {
  const options: Record<string, unknown> = {
    slidesPerView: 1,
  };

  const direction = block.dataset.parameterDirection;
  if (direction) options.direction = direction;

  const spaceBetween = parseNumber(block.dataset.parameterSpaceBetween);
  if (typeof spaceBetween === 'number') options.spaceBetween = spaceBetween;

  const speed = parseNumber(block.dataset.parameterSpeed);
  if (typeof speed === 'number') options.speed = speed;

  if (block.dataset.autoplay === 'true') {
    options.autoplay = {
      delay: parseNumber(block.dataset.autoplayDelay) || 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: block.dataset.autoplayPauseOnMouseEnter === 'true',
    };
  }

  if (block.dataset.parameterRewind === 'true') {
    options.rewind = true;
  }

  if (block.dataset.parameterEffect) {
    options.effect = block.dataset.parameterEffect;
    if (block.dataset.parameterEffect === 'fade') {
      options.fadeEffect = { crossFade: true };
    }
  }

  const breakpoints = parseJSON(block.dataset.parameterBreakpoints);
  if (breakpoints) {
    options.breakpoints = breakpoints;
  }

  const navigationPrev = block.querySelector<HTMLElement>('.swiper-button-prev');
  const navigationNext = block.querySelector<HTMLElement>('.swiper-button-next');
  if (navigationPrev || navigationNext) {
    options.navigation = { prevEl: navigationPrev, nextEl: navigationNext };
  }

  const pagination = block.querySelector<HTMLElement>('.swiper-pagination');
  if (pagination) {
    options.pagination = { el: pagination, clickable: true };
  }

  const scrollbar = block.querySelector<HTMLElement>('.swiper-scrollbar');
  if (scrollbar) {
    options.scrollbar = { el: scrollbar, draggable: true };
  }

  return options;
};

const LegacyPage = ({ slug }: Props) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { bodyHtml, loading, error } = useLegacyPage(slug);
  const swiperRef = useRef<SwiperInstance[]>([]);

  useEffect(() => {
    const updateHeaderState = () => {
      const header = document.querySelector<HTMLElement>('.legacy-header');
      if (!header) return;
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateHeaderState);
    };
  }, [bodyHtml]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const isExternal =
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#');
      if (isExternal || anchor.target === '_blank') {
        return;
      }
      if (href.startsWith('/')) {
        event.preventDefault();
        navigate(href);
      }
    };

    el.addEventListener('click', clickHandler);
    return () => {
      el.removeEventListener('click', clickHandler);
    };
  }, [bodyHtml, navigate]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const initSwipers = async () => {
      try {
        await loadSwiperAssets();
        const SwiperCtor: SwiperConstructor = (window as any).Swiper;
        if (!SwiperCtor) return;

        swiperRef.current.forEach((instance) => instance.destroy(true, true));
        swiperRef.current = [];

        const blocks = Array.from(
          el.querySelectorAll<HTMLElement>('.wp-block-hellopanda-swiper-block'),
        );
        blocks.forEach((block) => {
          const container = block.querySelector<HTMLElement>('.swiper');
          if (!container) return;
          const options = buildSwiperOptions(block);
          const instance = new SwiperCtor(container, options);
          swiperRef.current.push(instance);
        });
      } catch (error) {
        // Swallow slider init errors to avoid breaking the page.
        console.error('Swiper init failed', error);
      }
    };

    initSwipers();
    return () => {
      swiperRef.current.forEach((instance) => instance.destroy(true, true));
      swiperRef.current = [];
    };
  }, [bodyHtml]);

  if (loading) {
    return <div className="legacy-page">불러오는 중…</div>;
  }

  if (error) {
    return <div className="legacy-page">페이지를 불러오지 못했습니다: {error}</div>;
  }

  return (
    <div
      className="legacy-page"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
};

export default LegacyPage;
