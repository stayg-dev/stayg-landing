import Image from "next/image";
import CompanyHeroText from "@/assets/text/company-hero.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-145 items-center overflow-hidden lg:min-h-156.25">
      {/* Background Image */}
      <Image
        src="/company/hero-bg.webp"
        alt="Company Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <div className="flex max-w-4xl flex-col gap-6 text-center lg:text-start">
          <h1 className="flex justify-center lg:justify-start">
            <Image
              src={CompanyHeroText}
              alt="숙박시설을 위탁하여 운영하는 새로운 숙박산업 패러다임 선도 기업"
              width={14773}
              height={2351}
              className="h-[47px] w-auto sm:h-[56px] lg:h-[101px]"
            />
          </h1>
          <p className="text-white text-xs sm:text-sm lg:text-lg">
            계속해서 강회되는 노무법, 행정업무, 마케팅과 재경관리 등 힘든 영역을 대행하고
            <br />
            창업자들의 지속 가능한 비지니스를 실현하는데 기여하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
