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
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center lg:px-0">
        {/* Main Heading */}
        <h1 className="font-chosunilbo font-normal text-4xl text-white leading-12 lg:text-5xl lg:leading-[62.75px]">
          숙박시설
          <br />
          오픈부터 매각까지
        </h1>

        {/* Logo */}
        <div className="mt-3.75 mb-10 flex items-center justify-center sm:mb-20 lg:mb-27">
          <Image
            src={Logo}
            alt="STAY-G Logo"
            width={500}
            height={300}
            loading="lazy"
            className="h-14 w-46.25"
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
        >
          <span>지금 바로 상담받으세요</span>
          <ChevronRight size={20} />
        </Link>
      </div>
    </section>
  );
}
