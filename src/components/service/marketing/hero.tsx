import Image from "next/image";
import MarketingHeroText from "@/assets/text/marketing-hero.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-145 items-center overflow-hidden lg:min-h-156.25">
      {/* Background Image */}
      <Image
        src="/service/marketing/hero-bg.webp"
        alt="Marketing Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="flex justify-center lg:justify-start">
            <Image
              src={MarketingHeroText}
              alt="OTA · SNS 온/오프라인 마케팅"
              width={7915}
              height={2244}
              className="h-[45px] w-auto sm:h-[54px] md:h-[96px]"
            />
          </h1>
          <p className="font-normal text-sm text-white md:text-lg">
            다양한 OTA플랫폼과 SNS플랫폼
            <br />
            그리고 오프라인 마케팅 프로모션 기획까지
            <br />
            다양한 홍보를 공격적으로 실행합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
