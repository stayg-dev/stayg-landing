import { Bold } from "lucide-react";
import Image from "next/image";

interface ServiceCard {
  id: number;
  tag: string;
  title: string;
  description: string[];
  bulletPoints?: string[][];
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    tag: "SNS 마케팅",
    title: "SNS 소셜 미디어 마케팅",
    description: [
      "페이스북, 인스타그램 릴스, 유튜브 숏츠 등",
      "다양한 SNS 플랫폼에 공격적으로 홍보합니다.",
      "전문 에이전시를 통한 모델 섭외, 유명 인플루언서·유튜버 협업이 가능하며,",
      "매출 상승을 위한 SNS 소셜 미디어 마켓팅을 적극 활용합니다.",
    ],
  },
  {
    id: 2,
    tag: "검색엔진 최적화",
    title: "NAVER 검색 노출 마케팅",
    description: [
      "네이버 상위 검색 노출 마케팅 부터 네이버 예약 운영까지",
      "OTA플랫폼 중 수수료가 가장 낮은 네이버 예약은 필수 채널입니다.",
    ],
    bulletPoints: [
      [
        "네이버 지도 최적화", 
        "스마트플레이스 판매 세팅", 
        "생생한 동영상 정보 노출"
      ],
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
];

const features = [
  {
    id: 1,
    icon: "/service/marketing/image-1.webp",
    title: "노출·광고 운영",
    description: [
      "각 OTA 플랫폼 내 광고, ",
      "프로모션, 정보관리를 지속적으로 운영하여",
      "상위 노출을 유지합니다.",
    ],
  },
  {
    id: 2,
    icon: "/service/marketing/image-2.webp",
    title: "판매 채널 관리",
    description: [
      "각 채널의 업장 정보를",
      "지속적으로 업데이트 하고",
      "악성 리뷰 삭제 요청 및 댓글 관리를 통해",
      "OTA 운영 환경을 최적화 합니다.",
    ],
  },
  {
    id: 3,
    icon: "/service/marketing/image-3.webp",
    title: "프로모션 업데이트",
    description: [
      "OTA 플랫폼 내 이벤트 문구 및",
      "시설 안내를 시즌·행사·지역 축제에 맞춰",
      "상시 관리하여 투숙객 수요를 촉진합니다.",
    ],
  },
  {
    id: 4,
    icon: "/service/marketing/image-4.webp",
    title: "능동 판매 가격 조정",
    description: [
      "지역 상권, 시즌, 이벤트",
      "숙박·대실 수요를 분석해",
      "탄력적인 판매 가격 조정으로",
      "매출을 극대화합니다",
    ],
  },
];

export default function MarketingServices() {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-2.5 md:px-9">
        {/* Header */}
        <header className="mb-6 lg:mb-10">
          <h2 className="mb-6 font-semibold text-[#474747] text-lg lg:text-[28px]">
            어떤 채널이든, 어떤 방식이든
            <br />
            매출을 끌어올리기 위한 마케팅을 적극적으로 실행합니다.
          </h2>
          <div className="font-light text-[#474747] text-sm lg:text-[22px]">
            <p>SNS 마케팅, NAVER 마케팅, 홈페이지 제작, 촬영·편집·보정까지</p>
            <p>다양한 방법으로 숙박 시설의 노출과 광고, 채널 관리, 프로모션을 운영하여</p>
            <p style={{ fontWeight: 'bold' }}>최대 매출 확보를 위해 최선을 다합니다.</p>
          </div>
        </header>

        {/* Service Cards Grid */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:mb-0 xl:grid-cols-2">
          {serviceCards.map((card) => (
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

        {/* Features Section */}
        <div className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4 lg:gap-2 lg:py-15">
          {features.map((feature) => (
            <div className="flex flex-col items-center gap-2 text-center lg:gap-4" key={feature.id}>
              <div className="relative h-14 w-14">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="bg-gray-200y object-contain"
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
