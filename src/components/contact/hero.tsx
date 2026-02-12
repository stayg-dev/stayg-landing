import Image from "next/image";
import ContactHeroText from "@/assets/text/contact-hero.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-145 items-center overflow-hidden lg:min-h-156.25">
      {/* Background Image */}
      <Image
        src="/contact/hero-bg.webp"
        alt="Contact background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2.5 md:px-9">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="flex justify-center lg:justify-start">
            <Image
              src={ContactHeroText}
              alt="24시간문의하기"
              width={3545}
              height={1000}
              className="h-5 w-auto sm:h-6 md:h-[43px]"
            />
          </h1>
          <p className="font-normal text-sm text-white md:text-lg">
            스테이지가 언제든지 편하게 알려드리겠습니다.
            <br />
            궁금한 내용을 남겨주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
