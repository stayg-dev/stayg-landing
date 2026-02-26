"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import Logo from "@/assets/logo.svg";
import { useLocale } from "@/components/providers/locale-provider";
import { MESSAGES } from "@/lib/i18n";

interface NavItem {
  key: string;
  href: Route;
}

const navItems: NavItem[] = [
  { key: "company", href: "/company" as Route },
  { key: "service", href: "/service/operation" as Route },
  { key: "hio", href: "/hio" as Route },
  { key: "reference", href: "/reference/brand" as Route },
  { key: "userGuide", href: "/user-guide" as Route },
];

const DESKTOP_BREAKPOINT = 1024;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();

  const copy = MESSAGES[locale].header;

  const localizedNavItems = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        label: copy.nav[item.key as keyof typeof copy.nav],
      })),
    [copy.nav],
  );

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    mql.addEventListener("change", closeMenu);
    return () => mql.removeEventListener("change", closeMenu);
  }, [closeMenu]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileMenuOpen, closeMenu]);

  return (
    <>
      <header className="h-17.5 w-full border-stone-900 border-b bg-background transition-shadow duration-300">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-2.5 md:px-9">
          <div className="flex items-center gap-10.5">
            <Link href="/" className="shrink-0 transition-opacity duration-200">
              <Image
                src={Logo}
                alt="Stay-G Logo"
                width={95}
                height={24}
                priority
                className="h-6 w-auto"
              />
            </Link>

            <nav className="hidden flex-1 items-center md:flex">
              <ul className="flex items-center gap-6 lg:gap-10">
                {localizedNavItems.map((item) => {
                  const basePath = item.href.split("/")[1];
                  const isActive = basePath
                    ? pathname.split("/")[1] === basePath
                    : pathname === item.href;

                  return (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors duration-200 ${
                          isActive
                            ? "font-extrabold text-[#f2f2f2]"
                            : "font-semibold text-[#a3a3a3] hover:text-[#f2f2f2]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <Link
              href={"/contact" as Route}
              className="group flex items-center gap-1 font-semibold text-sm text-white"
              data-umami-event="cta_click"
              data-umami-event-location="header"
              data-umami-event-label={copy.cta}
            >
              {copy.cta}
              <ChevronRight size={16} />
            </Link>

            <div className="flex items-center gap-2 text-[#bcbcbc] text-xs uppercase">
              <button
                type="button"
                onClick={() => setLocale("ko")}
                aria-pressed={locale === "ko"}
                className={locale === "ko" ? "font-semibold text-white" : "hover:text-white"}
              >
                Kor
              </button>
              <span aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                className={locale === "en" ? "font-semibold text-white" : "hover:text-white"}
              >
                Eng
              </button>
            </div>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
            aria-label={copy.openMenu}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Enter" && closeMenu()}
          aria-hidden="true"
        />

        <div
          className={`absolute inset-y-0 left-0 w-full bg-background transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-stone-900 border-b px-2.5">
            <Link
              href="/"
              onClick={closeMenu}
              className="transition-opacity duration-200 hover:opacity-80"
            >
              <Image src={Logo} alt="Stay-G Logo" width={95} height={24} className="h-6 w-auto" />
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[#bcbcbc] text-xs uppercase">
                <button
                  type="button"
                  onClick={() => setLocale("ko")}
                  aria-pressed={locale === "ko"}
                  className={locale === "ko" ? "font-semibold text-white" : "hover:text-white"}
                >
                  Kor
                </button>
                <span aria-hidden="true">|</span>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  aria-pressed={locale === "en"}
                  className={locale === "en" ? "font-semibold text-white" : "hover:text-white"}
                >
                  Eng
                </button>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                aria-label={copy.closeMenu}
                className="flex h-10 w-10 items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <nav className="px-2.5 pt-8">
            <ul className="flex flex-col gap-2">
              {localizedNavItems.map((item, index) => {
                const basePath = item.href.split("/")[1];
                const isActive = basePath
                  ? pathname.split("/")[1] === basePath
                  : pathname === item.href;

                return (
                  <li
                    key={item.key}
                    className={`transition-all duration-300 ${
                      isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2 transition-colors duration-200 ${
                        isActive
                          ? "font-extrabold text-[#f2f2f2]"
                          : "font-semibold text-[#a3a3a3] hover:text-[#f2f2f2]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href={"/contact" as Route}
              onClick={closeMenu}
              data-umami-event="cta_click"
              data-umami-event-location="mobile_menu"
              data-umami-event-label={copy.cta}
              className={`group mt-5 inline-flex items-center gap-1 font-semibold text-sm text-white ${
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${localizedNavItems.length * 50}ms` : "0ms",
              }}
            >
              {copy.cta}
              <ChevronRight size={16} />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
