import Image from "next/image";

const serviceSteps = [
  {
    stepNumber: "01",
    title: "문의 접수",
    badge: "24시간 내 연락",
    cards: [
      {
        title: "온라인 문의",
        image: "/user-guide/service-process-steps/step-1/img1.webp",
        items: [
          "홈페이지 문의 폼 작성",
          "필수 정보 입력 (성함, 연락처, 위치 등)",
          "24시간 내 전문 상담사 연락",
        ],
      },
      {
        title: "유선 상담",
        image: "/user-guide/service-process-steps/step-1/img2.webp",
        items: ["전화 상담(1588-0000)", "카카오톡 채널 상담", "실시간 상담 가능"],
      },
    ],
  },
  {
    stepNumber: "02",
    title: "현장 실사 & 컨설팅",
    badge: "1-2일 · 서울/경기 지역 무료 방문",
    cards: [
      {
        title: "현장 점검",
        image: "/user-guide/service-process-steps/step-2/img1.webp",
        items: ["시설 상태 확인", "객실 구조 분석", "개선 사항 파악"],
      },
      {
        title: "상권 분석",
        image: "/user-guide/service-process-steps/step-2/img2.webp",
        items: ["경쟁사 조사", "수요 분석", "가격 전략 수립"],
      },
      {
        title: "수익 분석",
        image: "/user-guide/service-process-steps/step-2/img3.webp",
        items: ["예상 수익률 산출", "투자 회수 기간 계산", "맞춤형 계획 수립"],
      },
    ],
  },
  {
    stepNumber: "03",
    title: "제안 및 계약",
    badge: "예상 수익률 산출 및 계약 체결",
    cards: [
      {
        title: "제안서 제공",
        image: "/user-guide/service-process-steps/step-3/img1.webp",
        items: ["상세 수익 분석 리포트", "서비스 계획 및 일정", "비용 안내 및 투명한 가격"],
      },
      {
        title: "계약 체결",
        image: "/user-guide/service-process-steps/step-3/img2.webp",
        items: ["계약서 검토 및 협의", "필요 서류 준비 안내", "계약 체결 및 서명"],
      },
    ],
  },
  {
    stepNumber: "04",
    title: "세팅 및 오픈",
    badge: "인력 배치, 시설 보수, 마케팅 세팅",
    cards: [
      {
        title: "인력 배치",
        image: "/user-guide/service-process-steps/step-4/img1.webp",
        items: ["청소 인력 채용 및 배정", "전문 교육 실시", "관리 시스템 교육"],
      },
      {
        title: "시설 보수",
        image: "/user-guide/service-process-steps/step-4/img2.webp",
        items: ["필요 시설 개선 작업", "가구 및 설비 점검", "안전 점검 완료"],
      },
      {
        title: "마케팅 세팅",
        image: "/user-guide/service-process-steps/step-4/img3.webp",
        items: ["OTA 플랫폼 등록", "프로페셔널 사진 촬영", "SNS 계정 설정"],
      },
    ],
  },
  {
    stepNumber: "05",
    title: "운영 관리",
    badge: "매출 관리 및 정산 리포트 제공",
    cards: [
      {
        title: "매출 관리",
        image: "/user-guide/service-process-steps/step-5/img1.webp",
        items: ["실시간 매출 대시보드", "월별 정산 리포트", "투명한 지출 공개"],
      },
      {
        title: "일상 운영",
        image: "/user-guide/service-process-steps/step-5/img2.webp",
        items: ["체크아웃마다 자동 청소", "게스트 커뮤니케이션", "예약 관리 및 최적화"],
      },
      {
        title: "고객 지원",
        image: "/user-guide/service-process-steps/step-5/img3.webp",
        items: ["24/7 고객 지원", "정기 모니터링", "지속적 개선"],
      },
    ],
  },
];

export default function ServiceProcessSteps() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-10 lg:p-25">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-logo-gradient text-xl lg:text-[28px]">
            서비스 이용 절차
          </h2>
          <p className="font-light text-[#474747] text-sm lg:text-[22px]">
            STEP 1부터 STEP 5까지, 단계별로 안내해드립니다
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {serviceSteps.map((step) => (
            <div key={step.stepNumber} className="bg-stone-700 p-5 lg:p-10">
              {/* Step Header */}
              <div className="mb-5 lg:mb-10">
                <p className="mb-2 font-semibold text-[#E1AD00] text-xs">Step {step.stepNumber}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold text-lg text-white lg:text-2xl">{step.title}</h3>
                  <span className="rounded-full bg-[#6B5A4E] px-3 py-1.5 text-[10px] text-white">
                    {step.badge}
                  </span>
                </div>
              </div>

              {/* Cards Grid */}
              <div
                className={`grid grid-cols-1 gap-2 lg:gap-4 ${
                  step.cards.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {step.cards.map((card) => (
                  <div key={card.title} className="relative h-56 overflow-hidden lg:h-75">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
                      <h4 className="font-bold text-sm text-white lg:text-base">{card.title}</h4>
                      <ul className="flex flex-col gap-2">
                        {card.items.map((item, i) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-700 text-white text-xs">
                              {i + 1}
                            </span>
                            <span className="text-white text-xs">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
