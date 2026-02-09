import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import ConstructionBuildIcon from "@/assets/home/growth-cta/construction-build.svg";
import MarketingGrowthIcon from "@/assets/home/growth-cta/marketing-growth.svg";
import OperationsManagementIcon from "@/assets/home/growth-cta/operations-management.svg";

const ctaButtons: {
  id: number;
  icon: any;
  label: string;
  link: Route;
}[] = [
  {
    id: 1,
    icon: OperationsManagementIcon,
    label: "위탁 운영 노하우 보기",
    link: "/service/operation",
  },
  {
    id: 2,
    icon: MarketingGrowthIcon,
    label: "마케팅 노하우 보기",
    link: "/service/marketing",
  },
  {
    id: 3,
    icon: ConstructionBuildIcon,
    label: "시공 · 건축 노하우 보기",
    link: "/service/construction",
  },
];

export default function GrowthCta() {
  return (
    <section className="relative flex min-h-100 items-center justify-center overflow-hidden md:min-h-112.5 lg:min-h-130.5">
      {/* Background Image */}
      <Image
        src="/home/growth-cta-bg.webp"
        alt="Growth CTA background"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#16120d]/42 to-[#16120d]/42" />

      {/* Content Container */}
      <div className="relative z-10 flex max-w-7xl flex-col items-center px-2.5 py-12 text-center md:px-9">
        {/* Headline */}
        <h2 className="font-chosunilbo text-white text-xl leading-tight md:text-2xl lg:text-[43px]">
          함께 수익과 자산을 극대화 시킬 수 있습니다
        </h2>

        {/* Subtitle */}
        <div className="pt-4 pb-6 font-light text-sm text-white md:pt-6.25 md:pb-11.5 md:text-base">
          <p>객실 가동률을 최대치로 끌어올려 수익과 자산을 늘리는 공격적인 판매 방식과</p>
          <p>철저한 운영 관리로 성과가 오를 수 밖에 없습니다.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex w-full flex-col items-center gap-3 lg:flex-row lg:justify-center">
          {ctaButtons.map((items) => (
            <Link
              href={items.link}
              key={items.id}
              className="flex w-full items-center justify-center gap-2 border-logo-gradient bg-[#362F25]/60 px-6 py-4 backdrop-blur-lg transition-all md:w-xs md:py-5 xl:w-100"
              data-umami-event="cta_click"
              data-umami-event-location="growth_cta"
              data-umami-event-label={items.label}
            >
              <Image src={items.icon} alt="" className="h-8 w-8 shrink-0 md:h-10 md:w-10" />
              <span className="font-normal text-lg text-white md:text-xl lg:text-2xl">
                {items.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
