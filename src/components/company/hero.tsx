"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";

export default function Hero() {
  const { locale } = useLocale();
  const isEn = locale === "en";

  return (
    <section className="relative flex min-h-145 items-center overflow-hidden lg:min-h-156.25">
      <Image
        src="/company/hero-bg.webp"
        alt="Company Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <div className="flex max-w-4xl flex-col gap-6 text-center lg:text-start">
          <h1 className="font-light text-white text-xl leading-snug sm:text-2xl lg:text-[28px]">
            {isEn ? (
              <>
                With a structured system and top-tier professionals, we provide
                <br />
                comprehensive hospitality asset management.
              </>
            ) : (
              "체계적인 시스템과 최고의 전문가들이 숙박 시설 위탁 운영을 해드립니다."
            )}
          </h1>

          <p className="text-white text-xs sm:text-sm lg:text-lg">
            {isEn ? (
              <>
                Managing over 2,400 rooms domestically and internationally, including
                <br />
                boutique hotels, business hotels, pensions, glamping sites, and various
                <br />
                lifestyle accommodations.
                <br />
                From revenue growth to HR, labor management, administration, and
                <br />
                facility maintenance — we take full responsibility with precision and care.
              </>
            ) : (
              <>
                국내·외 2,400개 객실, 중소형 호텔, 관광 호텔, 펜션, 글램핑 등 다양한 생활숙박시설
                위탁운영.
                <br />
                매출 증대, 인사, 노무, 행정, 시설 관리 등 모든 업무를 세심하고 확실하게 책임을 다
                하고 있습니다.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
