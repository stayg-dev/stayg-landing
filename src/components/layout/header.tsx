"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/assets/logo.svg";

interface NavItem {
  label: string;
  href: Route;
}

const navItems: NavItem[] = [
  { label: "회사정보", href: "/company" as Route },
  { label: "사업분야", href: "/service/operation" as Route },
  { label: "HiO", href: "/hio" as Route },
  { label: "REFERENCE", href: "/reference/brand" as Route },
  { label: "이용가이드", href: "/user-guide" as Route },
];

const DESKTOP_BREAKPOINT = 1024;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* Close menu when resizing to desktop */
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    mql.addEventListener("change", closeMenu);
    return () => mql.removeEventListener("change", closeMenu);
  }, [closeMenu]);

  /* Close menu on escape key */
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
      {/* Header */}
      <header className="h-17.5 w-full border-stone-900 border-b bg-background transition-shadow duration-30">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-2.5 md:px-9">
          <div className="flex items-center gap-10.5">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden flex-1 items-center md:flex">
              <ul className="flex items-center gap-6 lg:gap-10">
                {navItems.map((item) => {
                  const basePath = item.href.split("/")[1];
                  const isActive = basePath
                    ? pathname.split("/")[1] === basePath
                    : pathname === item.href;
                  return (
                    <li key={item.label}>
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

          {/* Desktop CTA */}
          <div className="hidden shrink-0 md:flex">
            <Link
              href={"/contact" as Route}
              className="group flex items-center gap-1 font-semibold text-sm text-white"
              data-umami-event="cta_click"
              data-umami-event-location="header"
              data-umami-event-label="24시간 문의하기"
            >
              24시간 문의하기
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Enter" && closeMenu()}
          aria-hidden="true"
        />

        {/* Menu Panel */}
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
            <button
              type="button"
              onClick={closeMenu}
              aria-label="메뉴 닫기"
              className="flex h-10 w-10 items-center justify-center text-white"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="px-2.5 pt-8">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const basePath = item.href.split("/")[1];
                const isActive = basePath
                  ? pathname.split("/")[1] === basePath
                  : pathname === item.href;
                return (
                  <li
                    key={item.label}
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
              data-umami-event-label="24시간 문의하기"
              className={`group mt-5 inline-flex items-center gap-1 font-semibold text-sm text-white ${
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${navItems.length * 50}ms` : "0ms" }}
            >
              24시간 문의하기
              <ChevronRight size={16} />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
