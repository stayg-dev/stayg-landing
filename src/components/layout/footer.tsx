"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";
import { useLocale } from "@/components/providers/locale-provider";
import FooterInquiry from "./footer-inquiry";
import FooterLowerEn from "./footer-lower-en";

export default function Footer() {
  const pathname = usePathname();
  const { locale } = useLocale();

  if (pathname === "/contact") return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full">
      <FooterInquiry />

      {locale === "en" ? (
        <FooterLowerEn onScrollTop={scrollToTop} />
      ) : (
        <div className="bg-[#1f2124] py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-9">
            <div className="border-white/10 border-b pb-6">
              <Image src={Logo} alt="STAY-G" width={100} height={27} />
            </div>

            <div className="grid grid-cols-1 gap-10 border-white/10 border-b py-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 font-semibold text-[#d0d0d0] text-sm tracking-[0.14em]">
                  ABOUT
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed">
                  효율성과 전문성의 새로운 패러다임, 호스피탈리티 운영사 스테이지
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-[#d0d0d0] text-sm tracking-[0.14em]">
                  CONTACT
                </h3>
                <p className="text-[#999999] text-sm">0507-1465-7060</p>
                <Link
                  href="mailto:kevin7060@naver.com"
                  className="mt-1 inline-block text-[#999999] text-sm transition-colors hover:text-white"
                >
                  kevin7060@naver.com
                </Link>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-[#d0d0d0] text-sm tracking-[0.14em]">
                  COMPANY INFO
                </h3>
                <div className="space-y-2 text-[#999999] text-xs md:text-sm">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 leading-7">
                    <span className="inline-flex whitespace-nowrap">
                      주소: 서울특별시 금천구 가산동 319-8 에이스한솔타워 11층 1107호
                    </span>
                    <span className="inline-flex whitespace-nowrap">
                      상호: (주)스테이지 STAY-G Inc.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 leading-7">
                    <span className="inline-flex whitespace-nowrap">
                      사업자 등록번호: 268-88-03334
                    </span>
                    <span className="inline-flex whitespace-nowrap">대표번호: 0507-1465-7060</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 leading-7">
                    <Link
                      href="/company-basic/personal-information"
                      className="inline-flex whitespace-nowrap transition-colors hover:text-white"
                    >
                      개인정보처리방침
                    </Link>
                    <Link
                      href="/company-basic/emails-permission"
                      className="inline-flex whitespace-nowrap transition-colors hover:text-white"
                    >
                      이메일무단수집거부
                    </Link>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/uploads/2024/11/stay-g_company.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-white/40 px-5 py-2 text-xs transition-colors hover:border-white hover:bg-white hover:text-black"
                  >
                    회사소개서 다운로드
                  </a>
                  <a
                    href="/uploads/2024/11/stay-g_company.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-white/40 px-5 py-2 text-xs transition-colors hover:border-white hover:bg-white hover:text-black"
                  >
                    COMPANY PROFILE
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-8 text-[#7d7d7d] text-xs md:flex-row md:items-center md:justify-between">
              <p className="tracking-wide">
                COPYRIGHT © 2024 <span className="font-bold text-[#cacaca]">STAY-G INC.</span> ALL
                RIGHTS RESERVED.
              </p>

              <div className="flex items-center gap-5">
                <Link
                  href="https://blog.naver.com/stay-g-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="STAY-G blog"
                >
                  <Image src="/icons/blog.png" alt="" width={24} height={24} />
                </Link>
                <Link
                  href="https://www.instagram.com/stayg.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="STAY-G instagram"
                  className="inline-flex h-6 w-6 items-center justify-center text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 2c-3.2 0-3.5 0-4.8.1-1 .1-1.5.2-1.9.4-.4.1-.7.3-1 .7-.4.3-.6.6-.7 1-.2.4-.3.9-.4 1.9-.1 1.3-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.5.4 1.9.1.4.3.7.7 1 .3.4.6.6 1 .7.4.2.9.3 1.9.4 1.3.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.5-.2 1.9-.4.4-.1.7-.3 1-.7.4-.3.6-.6.7-1 .2-.4.3-.9.4-1.9.1-1.3.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.5-.4-1.9-.1-.4-.3-.7-.7-1-.3-.4-.6-.6-1-.7-.4-.2-.9-.3-1.9-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.6-2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                  </svg>
                </Link>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="ml-2 inline-flex items-center gap-1 text-[#8f8f8f] text-xs tracking-[0.14em] transition-colors hover:text-white"
                >
                  TOP
                  <span className="text-sm">^</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
