import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Flag,
  Globe2,
  Headphones,
  Home,
  LineChart,
  MessageSquare,
  MonitorCheck,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

type IconComponent = typeof MonitorCheck;

type FeatureItem = {
  label: string;
  title: string;
  body: string;
  icon: IconComponent;
};

type MetricItem = {
  title: string;
  body: string;
};

type StepItem = {
  title: string;
  body: string;
};

type LandingContent = {
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  lead: string;
  factors: FeatureItem[];
  factorNote: string;
  quote: string;
  problemKicker: string;
  problemTitle: string;
  problems: FeatureItem[];
  systemKicker: string;
  systemTitle: string;
  systemLead: string;
  layers: FeatureItem[];
  operationBlocks: FeatureItem[];
  reportKicker: string;
  reportTitle: string;
  reportLead: string;
  metrics: MetricItem[];
  processKicker: string;
  processTitle: string;
  processLead: string;
  steps: StepItem[];
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
};

export const unmannedPageContent: LandingContent = {
  kicker: "UNMANNED CONTROL",
  titlePrefix: "무인운영의 핵심은",
  titleHighlight: "탐지가 아니라 대응",
  titleSuffix: "입니다.",
  lead: "HiO 무인관제는 야간·무인 운영 중 발생하는 문의, 체크인 예외, 안전 이슈를 실시간으로 확인하고 조치하며 모든 과정을 기록으로 남겨 운영 품질을 일정하게 유지합니다.",
  factors: [
    {
      label: "MODE",
      title: "24시간 원격",
      body: "운영 공백이 생기는 시간대를 원격으로 커버합니다.",
      icon: MonitorCheck,
    },
    {
      label: "RESPONSE",
      title: "실시간 조치",
      body: "문의와 예외 상황을 확인하고 즉시 응대합니다.",
      icon: Headphones,
    },
    {
      label: "SYSTEM",
      title: "PMS 기록",
      body: "처리 과정과 결과를 운영 기록으로 남깁니다.",
      icon: ClipboardCheck,
    },
    {
      label: "REPORT",
      title: "운영 리포트",
      body: "반복 이슈와 개선 과제를 데이터로 정리합니다.",
      icon: BarChart3,
    },
  ],
  factorNote:
    "문의, 체크인 예외, 안전 이슈를 실시간으로 확인하고 조치한 뒤 운영 기록과 리포트로 이어집니다.",
  quote: "무인관제는 야간·무인 운영의 공백을 줄이고, 응대와 기록의 기준을 일정하게 유지합니다.",
  problemKicker: "OPERATION GAPS",
  problemTitle: "무인운영에서 실제로 발생하는 문제",
  problems: [
    {
      label: "PROBLEM",
      title: "야간 문의 지연",
      body: "예약, 입실, 시설 문의가 즉시 처리되지 않으면 고객 경험이 흔들립니다.",
      icon: MessageSquare,
    },
    {
      label: "PROBLEM",
      title: "체크인 예외 상황",
      body: "비대면 체크인 오류와 객실 배정 이슈는 현장 대응 없이 길어지기 쉽습니다.",
      icon: Home,
    },
    {
      label: "PROBLEM",
      title: "인수인계 누락",
      body: "야간 처리 내용이 다음 근무자에게 전달되지 않으면 같은 문제가 반복됩니다.",
      icon: ClipboardCheck,
    },
    {
      label: "PROBLEM",
      title: "품질 편차",
      body: "담당자와 시간대에 따라 응대 기준이 달라지면 운영 신뢰도가 낮아집니다.",
      icon: ShieldCheck,
    },
  ],
  systemKicker: "CONTROL FLOW",
  systemTitle: "감지 → 확인 → 조치 → 기록 → 리포트",
  systemLead:
    "단순 알림 확인에 머물지 않고, 고객 응대와 현장 조치까지 이어지는 운영 흐름을 설계합니다.",
  layers: [
    {
      label: "STEP 01",
      title: "감지",
      body: "문의와 이상 상황 확인",
      icon: MonitorCheck,
    },
    {
      label: "STEP 02",
      title: "확인",
      body: "예약·객실·현장 정보 대조",
      icon: Database,
    },
    {
      label: "STEP 03",
      title: "조치",
      body: "고객 응대와 내부 전달",
      icon: Headphones,
    },
    {
      label: "STEP 04",
      title: "기록",
      body: "처리 결과와 메모 저장",
      icon: ClipboardCheck,
    },
    {
      label: "STEP 05",
      title: "리포트",
      body: "반복 이슈와 개선안 정리",
      icon: LineChart,
    },
  ],
  operationBlocks: [
    {
      label: "OPERATING STANDARD",
      title: "무인관제 운영 기준",
      body: "문의 유형, 체크인 예외, 안전 이슈, 시설 문의를 기준화하고 처리 권한과 보고 방식을 정리합니다.",
      icon: CheckCircle2,
    },
    {
      label: "RESPONSE MANUAL",
      title: "응대 매뉴얼",
      body: "상황별 답변 문구와 에스컬레이션 기준을 구축해 시간대와 담당자에 따른 편차를 줄입니다.",
      icon: MessageSquare,
    },
    {
      label: "QUALITY RECORD",
      title: "운영 기록",
      body: "처리 시간, 원인, 조치 결과, 후속 필요 사항을 남겨 다음 근무와 월간 개선에 연결합니다.",
      icon: ClipboardCheck,
    },
  ],
  reportKicker: "CONTROL REPORTING",
  reportTitle: "운영 기록이 리포트가 됩니다",
  reportLead:
    "응대 내역을 축적해 반복 이슈를 찾고, 시설·체크인·고객 안내의 개선 우선순위를 정합니다.",
  metrics: [
    { title: "응답 시간", body: "문의 접수부터 응대까지 걸린 시간" },
    { title: "처리 결과", body: "해결, 전달, 보류, 후속 조치 구분" },
    { title: "재발 이슈", body: "반복 발생하는 객실·시설·예약 문제" },
    { title: "운영 메모", body: "다음 근무자에게 필요한 인수인계" },
  ],
  processKicker: "ONBOARDING PROCESS",
  processTitle: "도입 이후, 운영이 시작되는 방식",
  processLead: "현재 운영 흐름을 기준으로 관제 범위와 응대 기준을 세우고 실제 운영에 적용합니다.",
  steps: [
    { title: "현황 진단", body: "운영 시간, 문의 유형, 체크인 흐름 파악" },
    { title: "응대 기준 설계", body: "권한, 문구, 보고 기준 정리" },
    { title: "관제 운영", body: "실시간 확인과 고객 응대 실행" },
    { title: "리포트 개선", body: "반복 이슈와 개선 과제 정리" },
  ],
  ctaTitle: "무인 운영 공백을 줄이고 싶다면",
  ctaBody: "현재 운영 방식에 맞는 관제 범위와 응대 기준부터 함께 점검합니다.",
  ctaLabel: "무인관제 문의하기",
};

export const otaPageContent: LandingContent = {
  kicker: "OTA OPERATIONS",
  titlePrefix: "채널을 관리하는 것이 아니라,",
  titleHighlight: "매출 구조를 운영",
  titleSuffix: "합니다.",
  lead: "스테이지의 OTA 운영대행은 단순 등록이나 세팅이 아니라 콘텐츠, 요금, 재고, 리뷰, 메시지, 정산까지 연결하는 운영 체계로 전환과 수익 구조를 함께 개선하는 서비스입니다.",
  factors: [
    {
      label: "CHANNEL",
      title: "통합 기준",
      body: "채널별 콘텐츠와 판매 기준을 하나로 정리합니다.",
      icon: Globe2,
    },
    {
      label: "RATE",
      title: "채널 운영",
      body: "요금, 재고, 프로모션을 판매 흐름에 맞춰 조정합니다.",
      icon: LineChart,
    },
    {
      label: "REVENUE",
      title: "매출 구조",
      body: "단순 판매가 아닌 전환과 객단가를 함께 관리합니다.",
      icon: BarChart3,
    },
    {
      label: "REPORT",
      title: "데이터 분석",
      body: "성과 지표를 기준으로 다음 운영 액션을 제안합니다.",
      icon: Database,
    },
  ],
  factorNote:
    "콘텐츠, 요금, 재고, 리뷰, 정산까지 하나의 운영 체계로 연결해 채널 성과와 수익 구조를 함께 관리합니다.",
  quote: "OTA는 등록이나 세팅이 아닙니다. 판매 전환과 운영 기준을 계속 조정하는 매출 운영입니다.",
  problemKicker: "WHY INTEGRATION FIRST",
  problemTitle: "왜 통합이 매출보다 먼저인가",
  problems: [
    {
      label: "PROBLEM",
      title: "입점 단절",
      body: "채널은 열려 있지만 콘텐츠, 요금, 재고가 따로 운영되면 판매 흐름이 끊깁니다.",
      icon: Globe2,
    },
    {
      label: "PROBLEM",
      title: "기준선 부재",
      body: "채널별 객실명, 요금 정책, 프로모션 기준이 다르면 성과 비교가 어려워집니다.",
      icon: Flag,
    },
    {
      label: "PROBLEM",
      title: "사람 의존",
      body: "담당자 경험에만 기대면 리뷰, 메시지, 정산, 재고 조정이 누락되기 쉽습니다.",
      icon: Headphones,
    },
  ],
  systemKicker: "SYSTEM ARCHITECTURE",
  systemTitle: "CMS · OTA · PMS · HiO로 이어지는 운영 구조",
  systemLead: "채널 판매와 현장 운영이 분리되지 않도록 예약 전환 이후의 흐름까지 연결합니다.",
  layers: [
    {
      label: "LAYER 01",
      title: "CMS",
      body: "콘텐츠 기준 관리",
      icon: Database,
    },
    {
      label: "LAYER 02",
      title: "OTA",
      body: "판매 채널 운영",
      icon: Globe2,
    },
    {
      label: "LAYER 03",
      title: "PMS",
      body: "예약·객실 정보 연결",
      icon: Flag,
    },
    {
      label: "LAYER 04",
      title: "HiO",
      body: "고객 응대와 운영 기록",
      icon: Home,
    },
  ],
  operationBlocks: [
    {
      label: "INTEGRATED OPERATION",
      title: "OTA·PMS·HiO 연동 운영",
      body: "채널별 판매 기준과 예약 이후 응대 흐름을 하나로 묶어 관리합니다.",
      icon: CheckCircle2,
    },
    {
      label: "CORE TASKS",
      title: "핵심 운영 항목",
      body: "채널 콘텐츠, 요금, 재고, 리뷰, 메시지, 정산, 월간 리포트를 운영 항목으로 관리합니다.",
      icon: ClipboardCheck,
    },
    {
      label: "OPERATING STANDARD",
      title: "운영 기준",
      body: "성과 지표와 현장 변수를 함께 보고 매출 개선에 필요한 액션을 정리합니다.",
      icon: LineChart,
    },
  ],
  reportKicker: "PERFORMANCE REPORTING",
  reportTitle: "숫자로 보는 운영 리포트",
  reportLead: "예약률과 객단가, 전환율, 리뷰 점수까지 한 화면에서 보고 다음 운영 액션을 정합니다.",
  metrics: [
    { title: "OCC", body: "객실 점유율" },
    { title: "ADR", body: "평균 객단가" },
    { title: "RevPAR", body: "객실당 매출" },
    { title: "CVR", body: "채널 전환율" },
    { title: "Score", body: "리뷰 평점" },
    { title: "Action", body: "개선 실행안" },
  ],
  processKicker: "ONBOARDING PROCESS",
  processTitle: "도입 이후, 운영이 시작되는 방식",
  processLead: "현재 판매 구조를 기준으로 채널 상태를 진단하고 운영 기준을 세웁니다.",
  steps: [
    { title: "현황 진단", body: "채널, 요금, 재고, 콘텐츠 상태 확인" },
    { title: "운영 기준 수립", body: "객실명, 요금 정책, 프로모션 기준 정리" },
    { title: "오픈 / 운영", body: "판매 채널 적용과 운영 대응" },
    { title: "월간 개선", body: "성과 분석과 다음 액션 제안" },
  ],
  ctaTitle: "OTA, 더 이상 혼자 돌리지 마세요.",
  ctaBody: "현재 판매 채널의 구조와 운영 병목부터 함께 점검합니다.",
  ctaLabel: "OTA 운영 진단 받기",
};

function SectionHeading({
  kicker,
  title,
  lead,
  invert = false,
}: {
  kicker: string;
  title: string;
  lead?: string;
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold text-[#c49b5f] text-xs tracking-[0.2em]">{kicker}</p>
      <h2
        className={`mt-4 font-semibold text-3xl leading-tight md:text-4xl ${
          invert ? "text-white" : "text-[#1f1b16]"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-5 text-sm leading-7 ${invert ? "text-white/65" : "text-[#776b5d]"}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

function WrappedText({ text }: { text: string }) {
  const words = Array.from(text.matchAll(/\S+/g), (match) => ({
    id: `${match[0]}-${match.index}`,
    value: match[0],
  }));

  return (
    <>
      {words.map((word) => (
        <span key={word.id} className="mr-1.5 inline-block">
          {word.value}
        </span>
      ))}
    </>
  );
}

function HeroSection({ content }: { content: LandingContent }) {
  return (
    <section className="bg-[#080b0f] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-18 md:px-9 md:pt-34 md:pb-24">
        <div className="max-w-5xl">
          <p className="font-semibold text-[#d4af70] text-sm tracking-[0.18em]">{content.kicker}</p>
          <h1 className="mt-9 max-w-full break-words font-bold text-3xl leading-tight md:text-7xl">
            {content.titlePrefix}
            <span className="mt-3 block text-[#d7b36f]">{content.titleHighlight}</span>
            <span className="block">{content.titleSuffix}</span>
          </h1>
          <p className="mt-10 max-w-4xl break-all text-base text-white/78 leading-8 [white-space:normal] md:break-normal md:text-xl md:leading-9">
            <WrappedText text={content.lead} />
          </p>
        </div>

        <div className="mt-16 border border-white/12 bg-white/[0.04] p-5 md:p-7">
          <p className="font-semibold text-sm text-white">핵심 운영 요소</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {content.factors.map((item) => (
              <article key={item.title} className="border border-white/10 bg-black px-5 py-5">
                <item.icon className="h-5 w-5 text-[#d7b36f]" strokeWidth={1.7} />
                <p className="mt-5 text-[11px] text-white/45">{item.label}</p>
                <h3 className="mt-1 font-semibold text-lg">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-6">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-white/62 leading-6">{content.factorNote}</p>
        </div>
      </div>
    </section>
  );
}

function QuoteSection({ quote }: { quote: string }) {
  return (
    <section className="bg-[#efe2cf] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-9">
        <div className="mx-auto max-w-4xl bg-white px-8 py-8 shadow-[0_18px_50px_rgba(78,54,24,0.08)]">
          <p className="text-4xl text-[#d4af70] leading-none">“</p>
          <p className="mt-2 font-semibold text-2xl text-[#2a2119] leading-snug">{quote}</p>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection({ content }: { content: LandingContent }) {
  return (
    <section className="bg-[#efe2cf] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-9">
        <SectionHeading
          kicker={content.problemKicker}
          title={content.problemTitle}
          lead="채널과 현장의 작은 예외를 운영 기준으로 정리해야 품질과 매출의 흔들림을 줄일 수 있습니다."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.problems.map((item) => (
            <article key={item.title} className="bg-white p-6">
              <item.icon className="h-6 w-6 text-[#c49b5f]" strokeWidth={1.7} />
              <p className="mt-7 font-semibold text-[#c4664c] text-xs">{item.label}</p>
              <h3 className="mt-2 font-semibold text-[#241d17] text-xl">{item.title}</h3>
              <p className="mt-5 text-[#7a6e61] text-sm leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection({ content }: { content: LandingContent }) {
  return (
    <section className="bg-[#efe2cf] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-9">
        <SectionHeading
          kicker={content.systemKicker}
          title={content.systemTitle}
          lead={content.systemLead}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {content.layers.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-white text-[#c49b5f]">
                <item.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <p className="mt-5 text-[#a89170] text-[11px]">{item.label}</p>
              <h3 className="mt-1 font-semibold text-[#241d17] text-lg">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-38 text-[#7f7163] text-sm leading-6">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-18 grid gap-5 lg:grid-cols-3">
          {content.operationBlocks.map((item) => (
            <article key={item.title} className="bg-white p-7">
              <div className="flex items-center gap-3">
                <item.icon className="h-6 w-6 text-[#c49b5f]" strokeWidth={1.7} />
                <p className="font-semibold text-[#b39162] text-xs tracking-[0.16em]">
                  {item.label}
                </p>
              </div>
              <h3 className="mt-6 font-semibold text-[#241d17] text-xl">{item.title}</h3>
              <p className="mt-4 text-[#72675b] text-sm leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportSection({ content }: { content: LandingContent }) {
  return (
    <section className="bg-[#080b0f] py-22 text-white lg:py-30">
      <div className="mx-auto max-w-7xl px-5 md:px-9">
        <SectionHeading
          kicker={content.reportKicker}
          title={content.reportTitle}
          lead={content.reportLead}
          invert
        />
        <div className="mx-auto mt-14 max-w-5xl border border-white/14 bg-white/[0.04] p-5 md:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.metrics.map((item) => (
              <article key={item.title} className="bg-[#111318] px-6 py-6 text-center">
                <h3 className="font-semibold text-white text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-white/55">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ content }: { content: LandingContent }) {
  return (
    <section className="bg-[#efe2cf] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-9">
        <SectionHeading
          kicker={content.processKicker}
          title={content.processTitle}
          lead={content.processLead}
        />
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {content.steps.map((step, index) => (
            <article key={step.title} className="relative">
              <div className="flex h-9 w-9 items-center justify-center bg-[#d5af6c] font-semibold text-[#241d17] text-sm">
                {index + 1}
              </div>
              <h3 className="mt-6 font-semibold text-[#241d17] text-lg">{step.title}</h3>
              <p className="mt-3 text-[#75685a] text-sm leading-6">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ content }: { content: LandingContent }) {
  return (
    <section className="bg-[#080b0f] py-18 text-center text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-9">
        <h2 className="font-semibold text-3xl leading-tight md:text-4xl">{content.ctaTitle}</h2>
        <p className="mt-5 text-sm text-white/65 leading-7">{content.ctaBody}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center gap-2 bg-[#d7b36f] px-7 font-semibold text-[#16110b] transition-colors hover:bg-[#e2c381]"
        >
          {content.ctaLabel}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}

export function UnmannedOtaLandingPage({ content }: { content: LandingContent }) {
  return (
    <main className="w-screen max-w-full overflow-x-hidden bg-[#efe2cf] text-[#241d17]">
      <HeroSection content={content} />
      <QuoteSection quote={content.quote} />
      <ProblemsSection content={content} />
      <SystemSection content={content} />
      <ReportSection content={content} />
      <ProcessSection content={content} />
      <CtaSection content={content} />
    </main>
  );
}
