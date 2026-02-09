import Image from "next/image";
import OperationHeroText from "@/assets/text/operation-hero.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-145 items-center overflow-hidden lg:min-h-156.25">
      {/* Background Image */}
      <Image
        src="/service/hero-bg.webp"
        alt="Company Hero Background"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <div className="flex max-w-4xl flex-col gap-6 text-center lg:text-start">
          <h1 className="flex justify-center lg:justify-start">
            <Image
              src={OperationHeroText}
              alt="체계적인 시스템과 최고의 전문가들이 숙박 시설 위탁 운영을 해드립니다."
              width={15380}
              height={2350}
              className="h-[47px] w-auto sm:h-[56px] md:h-[101px]"
            />
          </h1>
          <p className="font-normal text-sm text-white md:text-lg">
            국내외 2,400개 객실, 중소형 호텔, 관광 호텔, 펜션, 글램핑 등 다양한 생활숙박시설
            위탁운영.
            <br />
            매출 증대, 인사, 노무, 행정, 시설 관리 등 모든 업무를 세심하고 확실하게 책임을 다 하고
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
