"use client";

import Image from "next/image";
import Logo from "@/assets/home/about-stay-g-logo.svg";
import { useLocale } from "@/components/providers/locale-provider";

export default function AboutStayG() {
  const { locale } = useLocale();
  const isEn = locale === "en";

  return (
    <section className="relative flex min-h-145 items-center justify-center overflow-hidden lg:min-h-190 lg:items-end lg:justify-start">
      <Image
        src="/home/about-bg.webp"
        alt="STAY-G Interior"
        fill
        loading="lazy"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#16120d]/0 via-[#16120d]/40 to-[#16120d]/70" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-2.5 text-center md:px-9 lg:items-start lg:justify-start lg:text-start">
        <div className="mb-6 md:mb-8 lg:mb-10">
          <Image
            src={Logo}
            alt="STAY-G Logo"
            width={140}
            height={163}
            className="h-32 w-auto lg:h-40"
          />
        </div>

        <div className="max-w-3xl pb-0 lg:pb-29.5">
          {isEn ? (
            <div className="font-light text-white text-xs leading-normal sm:text-lg lg:text-[22px]">
              <p className="font-semibold">Beyond Satisfaction - We Create Real Value</p>
              <p>Built on efficiency and transparency.</p>
              <p>
                STAY-G is a specialized hospitality management and consulting firm providing
                integrated services including:
              </p>
              <p>• Hotel & accommodation operations</p>
              <p>• Camping & glamping site management</p>
              <p>• Marketing management</p>
              <p>• Asset disposition & exit strategy consulting</p>
            </div>
          ) : (
            <div className="font-light text-white text-xs leading-normal sm:text-lg lg:text-[22px]">
              <p>
                효율성과 투명성을 핵심 가치로{" "}
                <span className="font-semibold">만족을 넘어 가치를 창출</span>합니다.
              </p>
              <p>STAY-G는 숙박업 운영, 캠핑장 운영, 마케팅 운영, 자산 매각까지</p>
              <p>통합 서비스를 제공하는 숙박시설 전문 매니지먼트 컨설팅 기업입니다.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
