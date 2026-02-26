"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import HomeHeroText from "@/assets/text/home-hero.svg";
import { useLocale } from "@/components/providers/locale-provider";

export default function Hero() {
  const { locale } = useLocale();
  const isEn = locale === "en";

  const copy = {
    title: isEn ? "Asset Management · OTA Management Services" : "위탁운영 · OTA 운영대행",
    description: isEn
      ? [
          "With over 2,400 rooms under management, an average 85% occupancy rate, ",
          "and more than 20 years of operational experience,",
          "partner with the leading experts in hospitality real estate.",
        ]
      : [
          "2,400여 개의 관리 객실, 평균 85% 가동률, 20년 이상 운영 경험으로",
          "숙박 부동산 최고의 파트너와 함께해 보세요.",
        ],
    cta: isEn ? "Start with a Free Consultation" : "부담없는 운영상담",
  };

  return (
    <section className="relative flex min-h-145 items-center justify-center overflow-hidden lg:min-h-205">
      <Image
        src="/home/hero-bg.webp"
        alt="STAY-G Building"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-2.5 text-center lg:px-0">
        <div>
          {isEn ? (
            <h1 className="mb-4.5 font-semibold text-lg text-white/90 lg:text-2xl">
              From Operation Launch to Revenue Growth
            </h1>
          ) : (
            <h1 className="mb-4.5 flex justify-center">
              <Image
                src={HomeHeroText}
                alt="숙박 운영의 시작부터 매출까지"
                width={12635}
                height={1000}
                className="h-6 w-auto lg:h-10"
              />
            </h1>
          )}

          <h2 className="font-extrabold text-3xl text-white lg:text-5xl">{copy.title}</h2>
        </div>

        <div className="mt-6.75 mb-10 flex items-center justify-center sm:mb-20 lg:mb-22.25">
          <Image
            src={Logo}
            alt="STAY-G Logo"
            width={500}
            height={300}
            loading="lazy"
            className="h-12 w-46.25"
          />
        </div>

        <p className="mb-5.5 max-w-2xl text-white text-xs leading-relaxed sm:text-sm md:leading-7 lg:text-lg lg:leading-8">
          {copy.description.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <Link
          href="/contact"
          className="group inline-flex h-11 items-center justify-center gap-2 border border-white bg-[#333a42b3] py-3 pr-4 pl-6 font-normal text-sm text-white"
          data-umami-event="cta_click"
          data-umami-event-location="hero"
          data-umami-event-label={copy.cta}
        >
          <span>{copy.cta}</span>
          <ChevronRight size={20} />
        </Link>
      </div>
    </section>
  );
}
