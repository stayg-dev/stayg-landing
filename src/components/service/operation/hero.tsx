import Image from "next/image";

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
      <div className="relative z-10 w-full max-w-4xl px-6 lg:px-25">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="font-chosunilbo font-normal text-white text-xl sm:text-2xl md:text-[43px]">
            체계적인 시스템과 최고의 전문가들이
            <br />
            숙박 시설 위탁 운영을 해드립니다.
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
