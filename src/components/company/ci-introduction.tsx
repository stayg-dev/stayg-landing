import Image from "next/image";
import Logo1 from "@/assets/company/ci-introduction/logo1.svg";
import Logo2 from "@/assets/company/ci-introduction/logo2.svg";
import Logo3 from "@/assets/company/ci-introduction/logo3.svg";
import Logo4 from "@/assets/company/ci-introduction/logo4.svg";

export default function CIIntroduction() {
  return (
    <section className="relative flex min-h-150 flex-col items-center justify-center overflow-hidden py-16 md:min-h-190 md:py-30">
      {/* Background Image */}
      <Image
        src="/company/ci-introduction-bg.webp"
        alt="CI Introduction Background"
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-900/40" />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-6 lg:gap-10.5 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 lg:gap-5">
          <h2 className="text-center font-chosunilbo text-3xl text-white lg:text-[43px]">
            CI 소개
          </h2>
          <p className="text-center font-light text-sm text-white leading-5.5 lg:text-base">
            STAY-G 아이덴티티를 일관성 있게 표현하고
            <br />
            첨단 IT 분야의 스마트 기술을 시각화한 시작점입니다.
          </p>
        </div>

        {/* Logo Display Area */}
        <div className="w-full max-w-7xl bg-black/50 py-13 bg-blend-overlay">
          <div className="flex flex-col items-center justify-center gap-12 lg:flex-row xl:gap-21">
            {/* Logo 1 - Full Logo with text below */}
            <div className="flex shrink-0 items-center justify-center">
              <Image
                src={Logo1}
                alt="STAY-G Full Logo"
                width={173}
                height={173}
                loading="lazy"
                className="w-36 xl:h-full xl:w-full"
              />
            </div>

            {/* Logo 2 - Symbol only */}
            <div className="flex shrink-0 items-center justify-center">
              <Image
                src={Logo2}
                alt="STAY-G Symbol"
                width={152}
                height={153}
                loading="lazy"
                className="w-32 xl:h-full xl:w-full"
              />
            </div>

            {/* Logo 3 - Horizontal Logo */}
            <div className="flex shrink-0 items-center justify-center">
              <Image
                src={Logo3}
                alt="STAY-G Horizontal Logo"
                width={271}
                height={271}
                loading="lazy"
                className="w-52 xl:h-full xl:w-full"
              />
            </div>

            {/* Logo 4 - Wordmark only */}
            <div className="flex shrink-0 items-center justify-center">
              <Image
                src={Logo4}
                alt="STAY-G Wordmark"
                width={223}
                height={223}
                loading="lazy"
                className="w-36 xl:h-full xl:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
