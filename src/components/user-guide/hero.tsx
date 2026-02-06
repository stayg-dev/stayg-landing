import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-145 items-center overflow-hidden lg:min-h-156.25">
      {/* Background Image */}
      <Image
        src="/user-guide/hero-bg.webp"
        alt="user guide Background"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="font-chosunilbo font-normal text-white text-xl sm:text-2xl md:text-[43px]">
            서비스 이용 절차 및
            <br />
            가이드라인
          </h1>
          <p className="font-normal text-sm text-white md:text-lg">
            대표님의 매출 향상을 위한 5단계로
            <br />
            전문관리를 준비했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
