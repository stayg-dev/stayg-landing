export const service = [
  {
    title: "필요한 서류",
    items: [
      { badge: "필수", description: "숙박업 신고증(또는 사업자등록증)" },
      { badge: "필수", description: "부동산 등기부등본(또는 임대차계약서)" },
      { badge: "필수", description: "신분증 사본" },
      { badge: "선택", description: "건물 관리규약 (공동주택의 경우)" },
      { badge: "선택", description: "화재보험 증권" },
      { badge: "선택", description: "전기/가스 안전검검 증명서" },
    ],
  },
  {
    title: "서비스 이용 기준",
    items: [
      { description: "최소 2개 이상의 객실을 보유한 시설" },
      { description: "숙박업 신고가 완료된 시설" },
      { description: "정기적인 청소 및 관리가 가능한 위치" },
      { description: "인터넷 연결이 가능한 환경" },
      { description: "기본 가구 및 설비가 갖춰진 상태" },
    ],
  },
  {
    title: "비용 안내",
    items: [
      {
        badge: "기본 관리비",
        description: "객실당 월 정액제 또는 예약 건당 수수료 방식 선택 가능",
      },
      { badge: "필수", description: "체크아웃마다 청소 비용 별도 (객실 크기 및 유형에 따라 차등)" },
      { badge: "유지보수 비용", description: "실제 발생 비용만 청구 (사전 승인 후 진행)" },
      { badge: "초기 설정비", description: "최초 1회만 발생 (시스템 구축 및 교육)" },
    ],
  },
  {
    title: "계약 조건",
    items: [
      { badge: "기본 계약", description: "최소 6개월 (안정적인 서비스 제공을 위해 권장)" },
      { badge: "연장 계약", description: "자동 연장 또는 수동 연장 선택 가능" },
      { badge: "해지 조건", description: "30일 전 사전 통보 시 해지 가능" },
      { badge: "시범 운영", description: "3개월 단기 계약도 가능 (추가 비용 발생)" },
    ],
  },
];

export default function ServiceGuidelines() {
  return (
    <section className="bg-white px-6 py-10 lg:p-25">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 xl:gap-6">
          <h2 className="font-semibold text-logo-gradient text-xl lg:text-[28px]">
            서비스 이용 가이드라인
          </h2>
          <p className="font-light text-[#474747] text-sm lg:text-[22px]">
            서비스 이용 전 꼭 알아두셔야 할 사항들입니다
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          {service.map((card) => (
            <div key={card.title} className="flex flex-col gap-6 bg-stone-700 p-6 lg:p-10">
              <h3 className="font-extrabold text-lg text-white lg:text-2xl">{card.title}</h3>
              <ul className="flex flex-col gap-2">
                {card.items.map((item) => (
                  <li
                    key={item.description}
                    className={
                      "badge" in item
                        ? "flex flex-col gap-1"
                        : "ml-2 list-item list-disc text-white"
                    }
                  >
                    {"badge" in item && (
                      <span className="w-fit rounded-full bg-[#6B5A4E] px-3 py-1 font-bold text-[8px] text-white leading-none">
                        {item.badge}
                      </span>
                    )}
                    <p className="text-white text-xs leading-5">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
