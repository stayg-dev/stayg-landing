"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";

interface ServiceCard {
  id: number;
  tag: string;
  title: string;
  description: string[];
  bulletPoints?: string[][];
}

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string[];
}

const content: Record<
  "ko" | "en",
  {
    headerTitle: string[];
    headerDescription: string[];
    serviceCards: ServiceCard[];
    features: Feature[];
  }
> = {
  ko: {
    headerTitle: [
      "어떤 채널이든, 어떤 방식이든",
      "매출을 끌어올리기 위한 마케팅을 적극적으로 실행합니다.",
    ],
    headerDescription: [
      "SNS 마케팅, NAVER 마케팅, 홈페이지 제작, 촬영·편집·보정까지",
      "다양한 방법으로 숙박 시설의 노출과 광고, 채널 관리, 프로모션을 운영하여",
      "최대 매출 확보를 위해 최선을 다합니다.",
    ],
    serviceCards: [
      {
        id: 1,
        tag: "SNS 마케팅",
        title: "SNS 소셜 미디어 마케팅",
        description: [
          "페이스북, 인스타그램 릴스, 유튜브 숏츠 등",
          "다양한 SNS 플랫폼에 공격적으로 홍보합니다.",
          "전문 에이전시를 통한 모델 섭외, 유명 인플루언서·유튜버 협업이 가능하며,",
          "매출 상승을 위한 SNS 소셜 미디어 마케팅을 적극 활용합니다.",
        ],
      },
      {
        id: 2,
        tag: "검색엔진 최적화",
        title: "NAVER 검색 노출 마케팅",
        description: [
          "네이버 상위 검색 노출 마케팅부터 네이버 예약 운영까지",
          "OTA 플랫폼 중 수수료가 가장 낮은 네이버 예약은 필수 채널입니다.",
        ],
        bulletPoints: [
          ["네이버 지도 최적화", "스마트플레이스 판매 세팅", "생생한 동영상 정보 노출"],
          [
            "새소식 피드 및 댓글 관리",
            "예약 캘린더 및 객실 정보 관리",
            "블로그 체험단 마케팅 상위 노출",
          ],
        ],
      },
      {
        id: 3,
        tag: "온라인 마케팅",
        title: "홈페이지 제작",
        description: [
          "소개형 홈페이지부터 예약 시스템이 포함된 홈페이지까지",
          "용도와 목적에 맞춰 제작합니다.",
        ],
      },
      {
        id: 4,
        tag: "촬영, 보정, 편집",
        title: "영상 / 사진 촬영, 모델 섭외",
        description: [
          "객실 및 부대시설 촬영, 홍보 영상 제작, 모델 섭외까지",
          "촬영부터 편집 전 과정을 지원합니다.",
          "홈페이지와 네이버 스마트플레이스에 생생한 콘텐츠를 제공하여",
          "고객에게 실제와 같은 간접 경험을 전달합니다.",
        ],
      },
    ],
    features: [
      {
        id: 1,
        icon: "/service/marketing/image-1.webp",
        title: "노출·광고 운영",
        description: [
          "각 OTA 플랫폼 내 광고, 프로모션, 정보 관리를",
          "지속적으로 운영하여 상위 노출을 유지합니다.",
        ],
      },
      {
        id: 2,
        icon: "/service/marketing/image-2.webp",
        title: "판매 채널 관리",
        description: [
          "각 채널의 입점 정보를 지속 업데이트하고",
          "리뷰 요청 및 댓글 관리를 통해 운영 환경을 최적화합니다.",
        ],
      },
      {
        id: 3,
        icon: "/service/marketing/image-3.webp",
        title: "프로모션 업데이트",
        description: [
          "시즌·연휴·축제 일정에 맞춘",
          "플랫폼 이벤트 문구 및 프로모션을 수시 관리합니다.",
        ],
      },
      {
        id: 4,
        icon: "/service/marketing/image-4.webp",
        title: "탄력적 가격 조정",
        description: [
          "지역, 시즌, 이벤트 수요를 분석해",
          "탄력적인 판매 가격으로 매출을 극대화합니다.",
        ],
      },
    ],
  },
  en: {
    headerTitle: [
      "No matter the channel or method,",
      "our focus is clear: driving revenue growth.",
    ],
    headerDescription: [
      "From SNS marketing and NAVER optimization",
      "to website development and full-scale content production (shooting, editing, retouching),",
      "we manage exposure, advertising, channel operations, and promotions to secure maximum revenue performance.",
    ],
    serviceCards: [
      {
        id: 1,
        tag: "Social Media Marketing",
        title: "Multi-Platform Social Strategy",
        description: [
          "We actively promote properties across: Facebook, Instagram Reels, YouTube Shorts, and other major social platforms.",
          "Through professional agencies, we can coordinate model casting, influencer collaborations, and YouTuber partnerships.",
          "We strategically leverage social media to drive measurable revenue growth.",
        ],
      },
      {
        id: 2,
        tag: "Search Engine Optimization",
        title: "NAVER Search Exposure Marketing",
        description: [
          "From top-ranking NAVER search optimization to NAVER Booking management,",
          "NAVER Booking — one of the lowest-commission OTA channels — is an essential distribution platform.",
        ],
        bulletPoints: [
          ["NAVER Map optimization", "SmartPlace sales setup", "Engaging video content exposure"],
          [
            "News feed and comment management",
            "Reservation calendar and room information control",
            "Blog influencer marketing for high search ranking",
          ],
        ],
      },
      {
        id: 3,
        tag: "Online Marketing",
        title: "Website Development",
        description: [
          "From informational corporate websites to fully integrated booking system websites,",
          "we design and build according to your business goals and usage needs.",
        ],
      },
      {
        id: 4,
        tag: "Content Production",
        title: "Photography · Video · Editing",
        description: [
          "Professional video & photo shoots, model casting, room & facility photography, and promotional video production.",
          "We support the entire process from production to post-editing.",
          "By providing high-quality visual content across your website and NAVER SmartPlace,",
          "we deliver an immersive, near-real experience to potential guests.",
        ],
      },
    ],
    features: [
      {
        id: 1,
        icon: "/service/marketing/image-1.webp",
        title: "Exposure & Advertising Operations",
        description: [
          "We continuously manage paid advertising within OTA platforms and promotional campaigns",
          "to maintain top-ranking visibility.",
        ],
      },
      {
        id: 2,
        icon: "/service/marketing/image-2.webp",
        title: "Channel Operations Management",
        description: [
          "We update listing information and coordinate review/comment workflows",
          "to optimize operational performance across channels.",
        ],
      },
      {
        id: 3,
        icon: "/service/marketing/image-3.webp",
        title: "Promotion Optimization",
        description: [
          "We align campaign messaging and offers with seasonal demand patterns",
          "for sustained booking conversion.",
        ],
      },
      {
        id: 4,
        icon: "/service/marketing/image-4.webp",
        title: "Dynamic Pricing Strategy",
        description: [
          "By analyzing local trends, seasonality, and event demand,",
          "we maximize revenue through adaptive pricing execution.",
        ],
      },
    ],
  },
};

export default function MarketingServices() {
  const { locale } = useLocale();
  const copy = content[locale];

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-2.5 md:px-9">
        <header className="mb-6 lg:mb-10">
          <h2 className="mb-6 font-semibold text-[#474747] text-lg lg:text-[28px]">
            {copy.headerTitle.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <div className="font-light text-[#474747] text-sm lg:text-[22px]">
            {copy.headerDescription.map((line, index) => (
              <p
                key={line}
                style={index === copy.headerDescription.length - 1 ? { fontWeight: "bold" } : {}}
              >
                {line}
              </p>
            ))}
          </div>
        </header>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:mb-0 xl:grid-cols-2">
          {copy.serviceCards.map((card) => (
            <div
              key={card.id}
              className="flex h-auto flex-col gap-6 bg-stone-700 p-6 md:h-84 lg:p-13"
            >
              <span className="w-fit rounded-full border border-white px-2.5 py-1 font-medium text-white text-xs">
                {card.tag}
              </span>
              <div className="flex flex-col gap-5">
                <h3 className="font-semibold text-white text-xl lg:text-[28px]">{card.title}</h3>
                <div className="font-light text-neutral-200 text-sm leading-6 md:text-base">
                  {card.description.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {card.bulletPoints && (
                  <div className="flex flex-col gap-4 md:flex-row md:gap-5">
                    {card.bulletPoints.map((column) => (
                      <ul
                        key={column.join("-")}
                        className="font-light text-neutral-200 text-sm leading-6 md:text-base"
                      >
                        {column.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4 lg:gap-2 lg:py-15">
          {copy.features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center gap-2 text-center lg:gap-4">
              <div className="relative h-14 w-14">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="font-semibold text-lg text-zinc-700 lg:text-xl">{feature.title}</h4>
              <div className="font-light text-xs text-zinc-700 leading-6 lg:text-base">
                {feature.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
