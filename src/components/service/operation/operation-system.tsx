import Image from "next/image";

const services = [
  {
    id: 1,
    title: "전문 인력 배치",
    description1: "체계적인 호텔 서비스 메뉴얼을 탑재한",
    description2: "전문 경력 인재를 투입합니다.",
    image: "/service/operation/image1.webp",
  },
  {
    id: 2,
    title: "고객 응대 매뉴얼",
    description1: "돌발 상황 발생 시 실시간 커뮤니케이션으로",
    description2: "즉각적 대처를 통해 변수를 최소화 합니다.",
    image: "/service/operation/image2.webp",
  },
  {
    id: 3,
    title: "전통 숙박업 운영 (호텔, 모텔, 생활형숙박시설)",
    description1: "직접 운영 경험을 기반으로 입지·상권·고객을 정밀 분석합니다.",
    description2: "매출 정상화부터 수익 고도화까지 구조적으로 개선합니다.",
    image: "/service/operation/image3.jpg",
  },
  {
    id: 4,
    title: "트렌드형 숙박시설 운영",
    description1: "이용객 니즈와 SNS 흐름을 분석해 수익 구조를 재설계합니다.",
    description2: "시즌 편차를 줄이고 경험 중심 매출을 만들어냅니다.",
    image: "/service/operation/image4.jpg",
  },
  {
    id: 5,
    title: "하우스키핑 교육",
    description1: "호텔급 표준을 적용한 하우스키핑 교육 시스템으로",
    description2: "객실 품질과 고객 만족을 체계적으로 관리합니다.",
    image: "/service/operation/image5.webp",
  },
  {
    id: 6,
    title: "업장 관리",
    description1: "호실 별 객실 점검을 통해 객실 컨디션을 최상으로 유지하여",
    description2: "고객 서비스에 하자가 없도록 체계적으로 관리 합니다.",
    image: "/service/operation/image6.webp",
  },
  {
    id: 7,
    title: "OTA 세팅 및 예약 관리",
    description1: "오버부킹, 중복예약 방지를 위한",
    description2: "사전 세팅, 미리 예약, 성/비수기 세팅까지 체크합니다.",
    image: "/service/operation/image7.webp",
  },
  {
    id: 8,
    title: "시설 정기 점검",
    description1: "수도, 전기, 가스, 엘리베이터, 가전, 가구 등",
    description2: "정기적인 시설 점검을 통해 원가/감가를 최소화 합니다.",
    image: "/service/operation/image8.webp",
  },
  {
    id: 9,
    title: "최다 검색, 상위 노출 홍보 마케팅",
    description1: "SA·DA 광고부터 각종 OTA, SNS 플랫폼에서",
    description2: "각 플랫폼 특성에 맞춘 전략으로 상위 노출을 설계합니다.",
    image: "/service/operation/image9.webp",
  },
  {
    id: 10,
    title: "국내 최고 경영, 노무, 세무, 법무 전문가",
    description1: "효율적인 생활숙박시설 업무처리와 운영전략 수립으로",
    description2: "보다 높은 매출과 수익률 달성을 약속합니다.",
    image: "/service/operation/image10.webp",
  },
];

export default function OperationSystem() {
  return (
    <section className="bg-white py-12 lg:py-25">
      <div className="mx-auto max-w-7xl px-2.5 md:px-9">
        {/* Header */}
        <header className="mb-8 lg:mb-11">
          <h2 className="mb-6 font-semibold text-logo-gradient text-xl md:text-2xl lg:text-[28px]">
            STAY-G 위탁 운영 시스템
          </h2>
          <div className="font-light text-[#474747] text-sm leading-tight md:text-base lg:text-[22px]">
            <p>매출이 탄탄한 숙박시설 만들어 드립니다.</p>
            <p>판매 채널 별 매출을 일 단위로 정확히 기록하고</p>
            <p>실시간 커뮤니케이션으로 24시간 빠르게 대응합니다.</p>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="relative aspect-610/520 overflow-hidden">
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 flex w-full flex-col justify-center bg-stone-700 p-4 md:p-6 lg:pr-2 lg:pl-12.75 xl:py-10">
                <h3 className="mb-3 font-semibold text-lg text-white lg:text-[26px]">
                  {service.title}
                </h3>
                <div className="font-light text-sm text-white leading-relaxed lg:text-xl lg:leading-7">
                  <p>{service.description1}</p>
                  <p>{service.description2}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
