"use client";

import Image from "next/image";
import AccommodationIcon from "@/assets/home/business-concerns/accommodation.svg";
import EntrustmentIcon from "@/assets/home/business-concerns/entrustment.svg";
import GrowthIcon from "@/assets/home/business-concerns/growth.svg";
import InteriorIcon from "@/assets/home/business-concerns/interior.svg";
import SpeedIcon from "@/assets/home/business-concerns/speed.svg";
import { useLocale } from "@/components/providers/locale-provider";

const concerns = {
  ko: [
    {
      id: 1,
      icon: SpeedIcon,
      title: "빠른 투자금 회수",
      line1: "숙박은 처음인데 투자금을 빠르게 회수하고 싶은",
      line2: "숙박 초보 예비 대표님",
    },
    {
      id: 2,
      icon: GrowthIcon,
      title: "매출 고속 향상",
      line1: "할 수 있는건 다 해봤는데 매출이 저조해 고민인",
      line2: "숙박시설 운영 대표님",
    },
    {
      id: 3,
      icon: EntrustmentIcon,
      title: "운영 위탁",
      line1: "신경쓸 곳이 많아져서 숙박시설 겸업 운영이",
      line2: "곤란하신 대표님",
    },
    {
      id: 4,
      icon: InteriorIcon,
      title: "인테리어, 시공 고민",
      line1: "인테리어도 해야하고 허가도 확인해야하고",
      line2: "복잡해서 고민이신 대표님",
    },
    {
      id: 5,
      icon: AccommodationIcon,
      title: "숙박업 All in One",
      line1: "인사, TAX, 시설, 홍보, 영업 등",
      line2: "모든 것을 한 번에 해결하고 싶은 대표님",
    },
  ],
  en: [
    {
      id: 1,
      icon: SpeedIcon,
      title: "Fast Return on Investment",
      description: "For first-time hospitality investors seeking rapid capital recovery.",
    },
    {
      id: 2,
      icon: GrowthIcon,
      title: "Rapid Revenue Growth",
      description: "For owners who have tried everything but still struggle with low revenue.",
    },
    {
      id: 3,
      icon: EntrustmentIcon,
      title: "Outsourced Operations",
      description:
        "For owners who find it difficult to manage accommodation alongside other businesses.",
    },
    {
      id: 4,
      icon: InteriorIcon,
      title: "Interior & Construction Concerns",
      description: "For those overwhelmed by renovation, permits, and project complexity.",
    },
    {
      id: 5,
      icon: AccommodationIcon,
      title: "All-in-One Hospitality Solution",
      description:
        "For owners who want HR, tax, facility management, marketing, and sales handled seamlessly in one place.",
    },
  ],
} as const;

export default function BusinessConcerns() {
  const { locale } = useLocale();
  const isEn = locale === "en";
  const list = concerns[locale];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-30">
      <div className="pointer-events-none absolute top-[64%] right-23 hidden h-176.5 w-180 translate-x-1/4 -translate-y-1/2 lg:block">
        <Image
          src="/home/business-concerns-bg.webp"
          alt="business-concerns"
          fill
          sizes="720px"
          loading="lazy"
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-2.5 md:px-9">
        <div className="mb-10 text-center md:mb-15">
          <h2 className="mb-6.25 font-chosunilbo font-normal text-[22px] text-logo-gradient md:text-3xl lg:text-[43px]">
            {isEn
              ? "STAY-G Reduces the Burden of Ownership"
              : "대표님의 고민, STAY-G가 줄여드립니다."}
          </h2>

          {isEn ? (
            <p className="mx-auto font-light text-[#474747] text-sm leading-[22.4px] md:text-base">
              Carefully evaluate the pros and cons of operating your accommodation business.
              <br />
              Our team of specialists in HR, tax, marketing, and business management sets a new
              standard in professional hospitality asset management.
              <br />
              <span className="font-semibold">Who We Work With</span>
            </p>
          ) : (
            <p className="mx-auto font-light text-[#474747] text-sm leading-[22.4px] md:text-base">
              숙박업 운영시 득과 실을 분명하게 따져보세요.
              <br />
              노무, 세무, 마케팅, 경영에 특화 된 전문가 그룹 STAY-G가 위탁운영의 새로운 기준을
              제시합니다.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {list.map((concern) => (
            <div
              key={concern.id}
              className="flex flex-col gap-3 bg-stone-700 px-5 py-5 md:flex-row md:items-center md:gap-4 md:px-9 md:py-6"
            >
              <div className="flex shrink-0 items-center justify-center">
                <Image src={concern.icon} alt="" aria-hidden="true" className="h-auto w-auto" />
              </div>

              <div className="w-auto shrink-0 text-center md:w-54.25 md:text-start">
                <span className="font-semibold text-white text-xl md:text-2xl lg:text-[28px]">
                  {concern.title}
                </span>
              </div>

              <div className="hidden h-8.5 w-px bg-white/30 md:block" />

              <p className="text-center font-light text-sm text-white leading-6 md:text-start md:text-base">
                {"description" in concern ? (
                  concern.description
                ) : (
                  <>
                    {concern.line1}
                    <br />
                    <span className="font-semibold text-[#F2D1A4]">{concern.line2}</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
