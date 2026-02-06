"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Q from "@/assets/q.svg";

export const faqItems = [
  {
    id: 1,
    question: "호스팅 기준은 무엇인가요?",
    answer:
      "숙박업 신고가 완료된 시설로, 최소 2개 이상의 객실을 보유해야 합니다. 기본 가구 및 설비가 갖춰져 있고, 인터넷 연결이 가능한 환경이어야 하며, 정기적인 청소 및 관리가 가능한 위치에 있어야 합니다.",
  },
  {
    id: 2,
    question: "기존 예약은 어떻게 처리되나요?",
    answer:
      "기존 예약은 그대로 유지되며, 계약 체결 후 저희 시스템으로 자연스럽게 이관됩니다. 기존 OTA 플랫폼의 예약 내역을 확인하여 중복 없이 관리해 드리며, 게스트에게 불편이 없도록 원활하게 전환됩니다.",
  },
  {
    id: 3,
    question: "서비스 비용은 어떻게 되나요?",
    answer:
      "객실당 월 정액제 또는 예약 건당 수수료 방식 중 선택할 수 있습니다. 청소 비용은 체크아웃마다 별도로 발생하며, 유지보수 비용은 사전 승인 후 실제 발생 비용만 청구됩니다. 초기 설정비는 최초 1회만 발생합니다.",
  },
  {
    id: 4,
    question: "계약 기간은 어떻게 되나요?",
    answer:
      "기본 계약 기간은 최소 6개월이며, 안정적인 서비스 제공을 위해 권장됩니다. 자동 연장 또는 수동 연장을 선택할 수 있으며, 30일 전 사전 통보 시 해지가 가능합니다. 3개월 단기 시범 운영 계약도 가능합니다.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#534F4C] py-10 lg:py-25">
      <div className="mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <header className="mb-4 lg:mb-7">
          <h2 className="font-semibold text-white text-xl lg:text-[28px]">자주 묻는 질문</h2>
          <p className="mt-6 font-light text-base text-white lg:text-[22px]">
            궁금한 사항을 확인해보세요.
          </p>
        </header>

        <div className="divide-y divide-white/30">
          {faqItems.map((item) => {
            const isOpen = openIndex === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center gap-2.5 px-2 py-5.5 text-left lg:px-4.25 lg:py-8.5"
                >
                  <Image
                    src={Q}
                    alt="Q Logo"
                    width={18}
                    height={20}
                    className="h-4 w-auto lg:h-5"
                    loading="lazy"
                  />
                  <span className="flex-1 font-bold text-lg text-white lg:text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white transition-transform duration-300 lg:h-6 lg:w-6 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-8 text-sm text-white/70 leading-relaxed lg:px-8 lg:pb-6 lg:pl-11 lg:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
