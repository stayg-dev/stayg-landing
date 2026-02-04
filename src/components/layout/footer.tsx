"use client";

import { Instagram, Sun, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/logo.svg";
import { PrivacyPolicyPopup } from "../ui/privacy-policy-popup";

export default function Footer() {
  const [policyOpen, setPolicyOpen] = useState(false);

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#232323] text-[#d0d0d0]">
      <div
        className="absolute inset-0 bg-[url('/home/about-bg.webp')] bg-cover bg-top opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#232323]/90" aria-hidden="true" />

      <div className="relative mx-auto max-w-360 px-6 py-14 lg:px-24 lg:py-16">
        <div className="border-white/10 border-b pb-10">
          <Image src={Logo} alt="STAY-G" width={95} height={24} className="mb-6 h-6 w-auto" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr_1.4fr] lg:gap-12">
            <div className="space-y-3">
              <p className="font-semibold text-sm tracking-[0.2em] text-[#d0d0d0]">ABOUT</p>
              <p className="max-w-sm text-[#999999] text-sm leading-relaxed">
                효율성과 전문성의 새로운 패러다임, 생활숙박시설 위탁운영사 스테이지
              </p>
              <div className="inline-flex items-center gap-2 text-[#cfcfcf]">
                <Sun size={16} />
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm tracking-[0.2em] text-[#d0d0d0]">CONTACT</p>
              <div className="space-y-1 text-[#999999] text-sm">
                <p>010-5172-7060</p>
                <a href="mailto:kevin7060@naver.com" className="transition-colors hover:text-white">
                  kevin7060@naver.com
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm tracking-[0.2em] text-[#d0d0d0]">
                COMPANY INFO
              </p>
              <div className="space-y-2 text-[#999999] text-sm leading-relaxed">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <span className="opacity-70">주소:</span>
                  <span>서울특별시 금천구 가산동 319-8 에이스하이엔드타워 11층 1107호</span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <span className="opacity-70">상호:</span>
                  <span>(주) 스테이지 STAY-G Inc.</span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <span className="opacity-70">사업자 등록번호:</span>
                  <span>268-88-03334</span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <span className="opacity-70">대표번호:</span>
                  <span>0507-1465-7060</span>
                </div>
                <div className="flex flex-wrap gap-x-3 text-sm">
                  <button
                    type="button"
                    className="transition-colors hover:text-white"
                    onClick={() => setPolicyOpen(true)}
                  >
                    개인정보처리방침
                  </button>
                  <span className="opacity-30">|</span>
                  <span>이메일무단수집거부</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/uploads/2024/11/%EC%A3%BC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80_%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C%EC%84%9C.pdf"
                  className="rounded border border-white/50 px-5 py-2 font-semibold text-xs text-white uppercase transition-colors hover:border-white"
                >
                  회사소개서 다운로드
                </a>
                <a
                  href="/uploads/2024/11/stay-g_company.pdf"
                  className="rounded border border-white/50 px-5 py-2 font-semibold text-xs text-white uppercase transition-colors hover:border-white"
                >
                  COMPANY PROFILE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-6 text-[#7d7d7d] text-xs md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span>COPYRIGHT © 2024</span>
            <strong className="text-[#cacaca]">STAY-G</strong>
            <strong>INC.</strong>
            <strong>ALL RIGHTS RESERVED.</strong>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Link href="https://blog.naver.com/stay-g-inc" aria-label="STAY-G Blog">
                <Image
                  src="/uploads/2024/11/bligic.png"
                  alt="Naver Blog"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </Link>
              <Link href="https://www.instagram.com/stay_g.kr/" aria-label="STAY-G Instagram">
                <Instagram size={20} className="text-white" />
              </Link>
            </div>

            <button
              type="button"
              onClick={handleScrollTop}
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#b3b3b3] transition-colors hover:text-white"
            >
              TOP <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <PrivacyPolicyPopup open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </footer>
  );
}
