type LocaleText = {
  ko: string;
  en: string;
};

export type ReferenceBrand = {
  id: string;
  region: LocaleText;
  area: LocaleText;
  image: string;
  description1: LocaleText;
  description2: LocaleText;
  photos: string[];
};

export const BRANDS_DATA: ReferenceBrand[] = [
  {
    id: "brand-01",
    region: { ko: "서울", en: "Seoul" },
    area: { ko: "서초", en: "Seocho" },
    image: "/reference/ref1/1.webp",
    description1: {
      ko: "강남 중심에 위치한 프리미엄 레지던스형 스테이.",
      en: "A premium residence-style stay in the heart of Gangnam.",
    },
    description2: {
      ko: "비즈니스 출장과 장기 투숙에 최적화된 공간입니다.",
      en: "Optimized for business travelers and long-term guests.",
    },
    photos: [
      "/reference/ref1/1.webp",
      "/reference/ref1/2.webp",
      "/reference/ref1/3.webp",
      "/reference/ref1/4.webp",
    ],
  },
  {
    id: "brand-02",
    region: { ko: "부산", en: "Busan" },
    area: { ko: "영도", en: "Yeongdo" },
    image: "/reference/ref2/1.webp",
    description1: {
      ko: "영도 해안선을 조망하는 오션뷰 부티크 호텔.",
      en: "An ocean-view boutique hotel overlooking Yeongdo's coastline.",
    },
    description2: {
      ko: "관광과 휴식을 모두 만족시키는 핵심 입지입니다.",
      en: "A prime location blending tourism and relaxation.",
    },
    photos: [
      "/reference/ref2/1.webp",
      "/reference/ref2/2.webp",
      "/reference/ref2/3.webp",
      "/reference/ref2/4.webp",
    ],
  },
  {
    id: "brand-03",
    region: { ko: "강원", en: "Gangwon" },
    area: { ko: "삼척", en: "Samcheok" },
    image: "/reference/ref3/1.webp",
    description1: {
      ko: "해변과 루프탑 수영장을 갖춘 리조트형 호텔.",
      en: "A beachfront hotel featuring a rooftop swimming pool.",
    },
    description2: {
      ko: "레저 수요를 강하게 흡수하는 숙소입니다.",
      en: "A resort-style property capturing strong leisure demand.",
    },
    photos: [
      "/reference/ref3/1.webp",
      "/reference/ref3/2.webp",
      "/reference/ref3/3.webp",
      "/reference/ref3/4.webp",
    ],
  },
  {
    id: "brand-04",
    region: { ko: "전북", en: "Jeonbuk" },
    area: { ko: "전주", en: "Jeonju" },
    image: "/reference/ref4/1.webp",
    description1: {
      ko: "루프탑 감성과 현대적 무드를 갖춘 도심형 호텔.",
      en: "An urban hotel with rooftop charm and modern sensibility.",
    },
    description2: {
      ko: "반려동물 동반 수요까지 대응하는 운영 자산입니다.",
      en: "Also catering to pet-friendly accommodation demand.",
    },
    photos: [
      "/reference/ref4/1.webp",
      "/reference/ref4/2.webp",
      "/reference/ref4/3.webp",
      "/reference/ref4/4.webp",
    ],
  },
  {
    id: "brand-05",
    region: { ko: "경기", en: "Gyeonggi" },
    area: { ko: "가평", en: "Gapyeong" },
    image: "/reference/ref5/1.webp",
    description1: {
      ko: "자연 속 힐링 경험을 제공하는 리조트형 호텔.",
      en: "A nature-surrounded healing resort-style hotel.",
    },
    description2: {
      ko: "가족과 커플 수요가 안정적인 관광지입니다.",
      en: "A steady tourism destination favored by families and couples.",
    },
    photos: [
      "/reference/ref5/1.webp",
      "/reference/ref5/2.webp",
      "/reference/ref5/3.webp",
      "/reference/ref5/4.webp",
    ],
  },
  {
    id: "brand-06",
    region: { ko: "경남", en: "Gyeongnam" },
    area: { ko: "양산", en: "Yangsan" },
    image: "/reference/ref6/1.webp",
    description1: {
      ko: "프라이빗 풀빌라 중심의 스테이.",
      en: "A private pool villa-focused stay.",
    },
    description2: {
      ko: "휴식 중심 고객을 겨냥한 독립형 휴양 공간입니다.",
      en: "An independent retreat tailored for relaxation-driven guests.",
    },
    photos: [
      "/reference/ref6/1.webp",
      "/reference/ref6/2.webp",
      "/reference/ref6/3.webp",
      "/reference/ref6/4.webp",
    ],
  },
  {
    id: "brand-07",
    region: { ko: "고양", en: "Goyang" },
    area: { ko: "벽제", en: "Byeokje" },
    image: "/reference/ref7/1.webp",
    description1: {
      ko: "실용성과 가성비를 강조한 숙박 자산.",
      en: "A practical, value-oriented accommodation.",
    },
    description2: {
      ko: "반복 수요 기반으로 안정적으로 운영됩니다.",
      en: "Operated on a stable base of recurring demand.",
    },
    photos: [
      "/reference/ref7/1.webp",
      "/reference/ref7/2.webp",
      "/reference/ref7/3.webp",
      "/reference/ref7/4.webp",
    ],
  },
  {
    id: "brand-08",
    region: { ko: "고양", en: "Goyang" },
    area: { ko: "화정", en: "Hwajeong" },
    image: "/reference/ref8/1.webp",
    description1: {
      ko: "지하철역 인접 도심형 모텔.",
      en: "A centrally located urban motel near a subway station.",
    },
    description2: {
      ko: "회전율 기반 가성비 모델이 강점입니다.",
      en: "Built on a high-turnover, value-driven model.",
    },
    photos: [
      "/reference/ref8/1.webp",
      "/reference/ref8/2.webp",
      "/reference/ref8/3.webp",
      "/reference/ref8/4.webp",
    ],
  },
  {
    id: "brand-09",
    region: { ko: "충남", en: "Chungnam" },
    area: { ko: "서산", en: "Seosan" },
    image: "/reference/ref9/1.webp",
    description1: {
      ko: "산업단지 인접 비즈니스 호텔.",
      en: "A business hotel adjacent to an industrial complex.",
    },
    description2: {
      ko: "법인 출장 수요 중심의 안정적 구조를 갖췄습니다.",
      en: "Structured around stable corporate travel demand.",
    },
    photos: [
      "/reference/ref9/1.webp",
      "/reference/ref9/2.webp",
      "/reference/ref9/3.webp",
      "/reference/ref9/4.webp",
    ],
  },
  {
    id: "brand-10",
    region: { ko: "파주", en: "Paju" },
    area: { ko: "금촌", en: "Geumchon" },
    image: "/reference/ref10/1.webp",
    description1: {
      ko: "금촌 상권 중심에 위치한 호텔.",
      en: "A hotel positioned in the core commercial district of Geumchon.",
    },
    description2: {
      ko: "인지도가 높은 검증된 운영 자산입니다.",
      en: "A well-recognized and established operational asset.",
    },
    photos: [
      "/reference/ref10/1.webp",
      "/reference/ref10/2.webp",
      "/reference/ref10/3.webp",
      "/reference/ref10/4.webp",
    ],
  },
  {
    id: "brand-11",
    region: { ko: "일산", en: "Ilsan" },
    area: { ko: "탄현", en: "Tanhyeon" },
    image: "/reference/ref11/1.webp",
    description1: {
      ko: "주요 관광지 인근 가족형 숙소.",
      en: "A family-oriented stay near major tourist attractions.",
    },
    description2: {
      ko: "주말 레저 수요가 강한 구조를 갖춘 자산입니다.",
      en: "Strong weekend-driven leisure demand structure.",
    },
    photos: [
      "/reference/ref11/1.webp",
      "/reference/ref11/2.webp",
      "/reference/ref11/3.webp",
      "/reference/ref11/4.webp",
    ],
  },
];
