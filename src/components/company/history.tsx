import Image from "next/image";

interface HistoryCardProps {
  year: string;
  image: string;
  achievements: string[];
  height?: string;
  yearColor?: string;
  padding?: string;
  yearSize?: string;
  sizes?: string;
}

function HistoryCard({
  year,
  image,
  achievements,
  yearColor = "text-white",
  height = "h-62.5 lg:h-97.5",
  padding = "p-6 lg:p-13",
  yearSize = "text-4xl lg:text-6xl",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: HistoryCardProps) {
  return (
    <div className={`relative overflow-hidden ${height}`}>
      <Image
        src={image}
        alt={`${year} history`}
        fill
        sizes={sizes}
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className={`relative z-10 flex h-full flex-col justify-between ${padding}`}>
        <h3 className={`font-chosunilbo font-normal ${yearSize} ${yearColor}`}>{year}</h3>
        <ul className="flex flex-col gap-1 font-normal text-white text-xs lg:gap-3 lg:text-base">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-2">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white" />
              <span className="line-clamp-1">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const timelineData = [
  {
    year: "2026",
    image: "/company/history/image1.webp",
    fullWidth: true,
    achievements: [
      "스테이지 시스템 PMS 개발",
      "스테이지 무인관제 HiO 시스템 개발 진행",
      "ISO 9001, 14001, 45001 인증",
    ],
  },
  {
    year: "2025",
    image: "/company/history/image2.webp",
    achievements: [
      "양산 진수캠퍼스 위탁 운영 실시",
      "대산 모던호텔 위탁 운영 실시",
      "서초 지젤 스위트 프로젝트 오픈",
      "가평 스테이지 풀빌라 위탁 운영 실시",
      "부산 그라체 프로젝트 오픈",
      "목포 VIP 위탁 운영 실시",
      "삼척 힐스노클 비치 위탁 운영 실시",
      "운서동 에어포트 준 호텔 OTA 예약대행",
      "부평 휴 스테이 위탁 운영 실시",
      "몽골 맥스그룹 MOU 채결",
    ],
  },
  {
    year: "2024",
    image: "/company/history/image3.webp",
    achievements: [
      "가평 호텔 위탁 운영 실시",
      "STAY-G 법인 전환",
      "그라체 E&C 법인 설립",
      "애견 호텔 벨라몽 브랜드 개발",
      "경기, 전주, 가평, 인천공항 지역 호텔 위탁운영 실시",
      "그라체 호텔 3개 지점 직영 위탁 계약 진행",
    ],
  },
  {
    year: "2023",
    image: "/company/history/image4.webp",
    achievements: ["파주 관광 호텔 매입 개발", "가평 호텔 매입 개발", "가평 호텔 리모델링 시공"],
  },
  {
    year: "2022",
    image: "/company/history/image5.webp",
    achievements: [
      "GS건설 책임(부장)으로 퇴사",
      "호텔 그라체 브랜드 개발",
      "일산 호텔 직영 매입",
      "호텔 리모델링 시공",
      "위탁 운영 실시",
    ],
  },
  {
    year: "2020",
    image: "/company/history/image6.webp",
    achievements: ["UAE CAMP 2,000개 객실 총괄 운영 대표"],
  },
  {
    year: "2005",
    image: "/company/history/image7.webp",
    achievements: [
      "LG그룹 건설 공채 입사",
      "동계 올림픽 관련 알펜시아 조성사업 (업무 : 재경)",
      "해외 UAE 아부다비 프로젝트 근무 (업무 : 재무)",
      "해외 방글라데시 근무 (업무 : Branch Manager)",
      "해외 터키 근무 (업무 : Finacial Manager)",
      "국토부 장관 표창 (업적 : 터키 진출 한국 기업 TAX절감 기여 / 연간 700억)",
      "해외 UAE 근무 (Business Manager)",
    ],
  },
];

export default function History() {
  // Separate first item (full width) from rest
  const [firstItem, ...restItems] = timelineData;

  // Group remaining items in pairs
  const pairedItems: (typeof timelineData)[] = [];
  for (let i = 0; i < restItems.length; i += 2) {
    pairedItems.push(restItems.slice(i, i + 2));
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-40">
      {/* Background Logo */}
      <div className="pointer-events-none absolute -right-26.25 -bottom-36.25 z-0 hidden h-133 w-165 opacity-50 lg:block">
        <Image
          src="/company/history/history-background.webp"
          alt="history background"
          fill
          priority
          sizes="(max-width: 1024px) 300px, 500px"
          className="object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-2.5 md:px-9">
        {/* Header Section */}
        <div className="mb-8 text-center lg:mb-21">
          <p className="font-light text-[#474747] text-base md:text-lg lg:text-[28px]">
            업무표준화, 품질평가제, 전문인력, 진급 하자대응팀으로
          </p>
          <p className="font-light text-[#474747] text-base md:text-lg lg:text-[28px]">
            <span className="font-bold">숙박 시설 위탁 운영의 미래</span>를 만들어 갑니다.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* First Card - Full Width */}
          <HistoryCard
            year={firstItem.year}
            image={firstItem.image}
            achievements={firstItem.achievements}
            height="h-62.5 lg:h-97.5"
            yearColor="text-[#EBCAA3]"
            padding="p-6 lg:p-13"
            yearSize="text-4xl lg:text-6xl"
            sizes="100vw"
          />

          {/* Paired Cards */}
          {pairedItems.map((pair) => (
            <div key={pair[0].year} className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              {pair.map((item) => {
                let heightClass = "h-85 lg:h-132.75";
                if (item.year === "2023" || item.year === "2022") {
                  heightClass = "h-62.5 lg:h-97.5";
                }
                if (item.year === "2020" || item.year === "2005") {
                  heightClass = "h-65 lg:h-106.5";
                }

                return (
                  <HistoryCard
                    key={item.year}
                    year={item.year}
                    height={heightClass}
                    image={item.image}
                    achievements={item.achievements}
                    padding="p-6 lg:p-13"
                    yearSize="text-4xl lg:text-6xl"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
