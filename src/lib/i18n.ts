export const SUPPORTED_LOCALES = ["ko", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ko";
export const LOCALE_STORAGE_KEY = "stayg.locale";

export const isLocale = (value: string): value is Locale =>
  SUPPORTED_LOCALES.includes(value as Locale);

export interface HeaderMessages {
  nav: {
    company: string;
    service: string;
    hio: string;
    reference: string;
    userGuide: string;
  };
  cta: string;
  openMenu: string;
  closeMenu: string;
  viewDetail: string;
}

export const MESSAGES: Record<Locale, { header: HeaderMessages }> = {
  ko: {
    header: {
      nav: {
        company: "회사정보",
        service: "사업분야",
        hio: "무인관제 & OTA 운영대행",
        reference: "REFERENCE",
        userGuide: "이용가이드",
      },
      cta: "\u0032\u0034\uC2DC\uAC04 \uBB38\uC758\uD558\uAE30",
      openMenu: "\uBA54\uB274 \uC5F4\uAE30",
      closeMenu: "\uBA54\uB274 \uB2EB\uAE30",
      viewDetail: "\uC790\uC138\uD788 \uBCF4\uAE30",
    },
  },
  en: {
    header: {
      nav: {
        company: "About Us",
        service: "Business Areas",
        hio: "Unmanned Control & OTA Ops",
        reference: "Reference",
        userGuide: "User Guide",
      },
      cta: "Contact Us 24/7",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      viewDetail: "View details",
    },
  },
};
