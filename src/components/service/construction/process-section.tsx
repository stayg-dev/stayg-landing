"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";

export default function ProcessSection() {
  const { locale } = useLocale();
  const isEn = locale === "en";

  return (
    <section className="bg-white py-12 lg:py-30">
      <div className="mx-auto max-w-7xl px-2.5 md:px-9">
        <header className="mb-8 lg:mb-13">
          {isEn ? (
            <>
              <h2 className="mb-6 text-lg text-logo-gradient lg:text-[28px]">
                Whether you:
                <br />
                <span className="font-semibold">We support every stage of the process.</span>
              </h2>
              <div className="mb-2 font-light text-[#474747] text-sm lg:mb-4 lg:text-[22px]">
                <p>Only want to receive a quotation</p>
                <p>Need partial renovation for an aging property</p>
                <p>Plan to add commercial facilities</p>
                <p>Or wish to commission a full-scale construction project</p>
              </div>
              <p className="font-light text-[#474747] text-sm lg:text-[22px]">
                All procedures prior to contract signing are provided{" "}
                <span className="font-semibold">free of charge.</span>
              </p>
            </>
          ) : (
            <>
              <h2 className="mb-6 text-lg text-logo-gradient lg:text-[28px]">
                <span className="font-semibold">견적서만 받아보고 싶으신 분부터</span>
                <br />
                <span className="font-semibold">전체 공사를 의뢰하고 싶은 분까지</span>
              </h2>
              <div className="mb-2 font-light text-[#474747] text-sm lg:mb-4 lg:text-[22px]">
                <p>견적서만 받아보고 싶은 분, 노후 된 건물 부분 보수를 원하는 분,</p>
                <p>상업시설을 추가하고 싶은 분, 전체 공사를 의뢰하고 싶은 분</p>
              </div>
              <p className="font-light text-[#474747] text-sm lg:text-[22px]">
                계약 전 까지의 모든 과정은 <span className="font-semibold">무료로 진행</span>됩니다.
              </p>
            </>
          )}
        </header>

        <div className="mb-6 lg:mb-10">
          <Image
            src="/service/construction/process.webp"
            alt={isEn ? "Property Showcase Background" : "시공 프로세스"}
            width={1247}
            height={159}
            loading="lazy"
          />
        </div>

        <article className="flex gap-4 border border-[#474747] bg-white p-5 md:items-center lg:gap-8 lg:px-14.25 lg:py-6">
          <div className="flex items-center gap-4 lg:gap-8">
            <span className="whitespace-nowrap font-bold text-[#474747] text-xs sm:text-sm lg:text-[24px]">
              {isEn ? "Request a Consultation" : "상담 신청"}
            </span>
            <div className="h-5 w-0.5 rounded-full bg-neutral-300" />
          </div>
          <p className="font-light text-[#474747] text-xs sm:text-sm lg:text-[24px]">
            {isEn ? (
              <>
                Please submit your inquiry via the “Contact Us” section below.
                <br />A representative will contact you within one hour.
              </>
            ) : (
              <>
                하단 &apos;문의 하기&apos; 를 통해 접수해 주시면 한 시간 내에 담당자가 연락
                드립니다.
              </>
            )}
          </p>
        </article>
      </div>
    </section>
  );
}
