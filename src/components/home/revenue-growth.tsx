"use client";

import Image from "next/image";

const solutions = [
  {
    id: 1,
    title: "전문 인력 배치",
    description: "체계적인 호텔 서비스 메뉴얼이\n준비된 전문가 투입",
    image: "/home/revenue-growth/image-1.webp",
  },
  {
    id: 2,
    title: "교육 메뉴얼",
    description: "시설 관리 및 전문 프로세스\n하우스키핑 교육 시스템",
    image: "/home/revenue-growth/image-2.webp",
  },
  {
    id: 3,
    title: "마케팅",
    description: "각종 OTA 최다 노출,\n판매채널 관리 공격적인 SNS",
    image: "/home/revenue-growth/image-3.webp",
  },
  {
    id: 4,
    title: "운영 전략 기획",
    description: "전문경영인의 지속적인 분석 및\n매출 극대화",
    image: "/home/revenue-growth/image-4.webp",
  },
];

export default function RevenueGrowth() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F5F5] py-16 md:py-20 lg:pt-21.5 lg:pb-42.25">
      {/* Title */}
      <h2 className="mb-12 px-2.5 text-center font-chosunilbo font-normal text-[22px] text-logo-gradient md:mb-18 md:px-0 md:text-4xl lg:text-[43px]">
        매출 220% 올리는 STAY-G 솔루션
      </h2>

      {/* Cards Container */}
      <div className="group/container flex w-full flex-col lg:flex-row">
        {solutions.map((item) => (
          <div
            key={item.id}
            className="group/card relative h-72 cursor-pointer overflow-hidden transition-all duration-600 ease-in-out md:h-100 lg:h-96 lg:flex-1 lg:group-hover/container:not-[&:hover]:flex-[0.5] lg:hover:flex-[0.75]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center transition-transform duration-500 md:group-hover/card:scale-110"
                loading="lazy"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-neutral-900/80 transition-opacity duration-500 md:group-hover/card:bg-transparent" />

            {/* Content */}
            <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6 py-8 transition-all duration-500 md:gap-4 md:py-16.75 md:group-hover/card:justify-start">
              <h3 className="text-center font-semibold text-white text-xl md:text-[28px]">
                {item.title}
              </h3>
              <p className="whitespace-pre-line text-center font-light text-sm text-white sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
