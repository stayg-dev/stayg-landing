import Image from "next/image";
import ConstructionHeroText from "@/assets/text/construction-hero.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-145 items-center overflow-hidden lg:min-h-156.25">
      {/* Background Image */}
      <Image
        src="/service/construction/hero-bg.webp"
        alt="Company Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="flex justify-center lg:justify-start">
            <Image
              src={ConstructionHeroText}
              alt="숙박업 관련 시공, 건축이 필요하신가요?"
              width={16410}
              height={1021}
              className="h-5 w-auto sm:h-6 md:h-[43px]"
            />
          </h1>
          <p className="font-normal text-sm text-white md:text-lg">
            STAY-G는 이윤과 인건비, 자재비 원가를 제공합니다.
            <br />
            유지보수를 위한 리모델링 시공부터 건축 프로세스를 거치는 전문 건축까지
            <br />
            숙박시설의 다양한 형태를 시공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
