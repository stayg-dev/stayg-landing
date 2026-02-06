"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-145 items-center justify-center overflow-hidden lg:min-h-205">
      {/* Background Image */}
      <Image
        src="/home/hero-bg.webp"
        alt="STAY-G Building"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-2.5 text-center lg:px-0">
        {/* Main Heading */}
        <div>
          <h1 className="mb-4.5 font-chosunilbo font-normal text-2xl text-white lg:text-[40px]">
            숙박 운영의 시작부터 매출까지
          </h1>

          <h2 className="font-extrabold text-3xl text-white lg:text-5xl">
            위탁운영 · 무인관제 · OTA 운영대행
          </h2>
        </div>

        {/* Logo */}
        <div className="mt-6.75 mb-10 flex items-center justify-center sm:mb-20 lg:mb-22.25">
          <Image
            src={Logo}
            alt="STAY-G Logo"
            width={500}
            height={300}
            loading="lazy"
            className="h-12 w-46.25"
          />
        </div>

        {/* Description */}
        <p className="mb-5.5 max-w-2xl text-white text-xs leading-relaxed sm:text-sm md:leading-7 lg:text-lg lg:leading-8">
          <span className="font-semibold">
            2,400여 개의 관리 객실, 평균 75% 가동률, 20년 이상 운영 경험
          </span>
          으로
          <br />
          숙박 부동산 최고의 파트너와 함께해 보세요.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="group inline-flex h-11 items-center justify-center gap-2 border border-white bg-[#333a42b3] py-3 pr-4 pl-6 font-normal text-sm text-white"
          data-umami-event="cta_click"
          data-umami-event-location="hero"
          data-umami-event-label="지금 바로 상담받으세요"
        >
          <span>지금 바로 상담받으세요</span>
          <ChevronRight size={20} />
        </Link>
      </div>
    </section>
  );
}
