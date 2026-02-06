import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="bg-white py-12 lg:py-30">
      <div className="mx-auto max-w-7xl px-2.5 md:px-9">
        {/* Header */}
        <header className="mb-8 lg:mb-13">
          <h2 className="mb-6 text-lg text-logo-gradient lg:text-[28px]">
            <span className="font-semibold">견적서만</span> 받아보고 싶으신 분부터
            <br />
            <span className="font-semibold">전체 공사를 의뢰</span>하고 싶은 분까지
          </h2>
          <div className="mb-2 font-light text-[#474747] text-sm lg:mb-4 lg:text-[22px]">
            <p>견적서만 받아보고 싶은 분, 노후 된 건물 부분 보수를 원하는 분,</p>
            <p>상업시설을 추가하고 싶은 분, 전체 공사를 의뢰하고 싶은 분</p>
          </div>
          <p className="font-light text-[#474747] text-sm lg:text-[22px]">
            계약 전 까지의 모든 과정은 <span className="font-semibold">무료로 진행</span>됩니다.
          </p>
        </header>

        {/* Process Timeline */}

        <div className="mb-6 lg:mb-10">
          <Image
            src="/service/construction/process.webp"
            alt="Property showcase background"
            width={1247}
            height={159}
            loading="lazy"
          />
        </div>

        {/* Consultation Info Box */}
        <article className="flex gap-4 border border-[#474747] bg-white p-5 md:items-center lg:gap-8 lg:px-14.25 lg:py-6">
          <div className="flex items-center gap-4 lg:gap-8">
            <span className="whitespace-nowrap font-bold text-[#474747] text-xs sm:text-sm lg:text-[24px]">
              상담 신청
            </span>
            <div className="h-5 w-0.5 rounded-full bg-neutral-300" />
          </div>
          <p className="font-light text-[#474747] text-xs sm:text-sm lg:text-[24px]">
            &apos;전화 문의&apos; 또는 &apos;문의 하기&apos; 폼을 통해 접수해 주시면 한 시간 내에
            담당자가 연락 드립니다.
          </p>
        </article>
      </div>
    </section>
  );
}
