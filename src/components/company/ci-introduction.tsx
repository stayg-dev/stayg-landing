import Image from "next/image";
import Logo1 from "@/assets/company/ci-introduction/logo1.svg";
import Logo2 from "@/assets/company/ci-introduction/logo2.svg";
import Logo3 from "@/assets/company/ci-introduction/logo3.svg";
import Logo4 from "@/assets/company/ci-introduction/logo4.svg";

const CI_LOGOS = [
  {
    src: Logo1,
    alt: "STAY-G Full Logo",
    className: "max-w-[160px] md:max-w-[190px] lg:max-w-[210px]",
  },
  {
    src: Logo2,
    alt: "STAY-G Symbol",
    className: "max-w-[120px] md:max-w-[145px] lg:max-w-[170px]",
  },
  {
    src: Logo3,
    alt: "STAY-G Horizontal Logo",
    className: "max-w-[210px] md:max-w-[250px] lg:max-w-[300px]",
  },
  {
    src: Logo4,
    alt: "STAY-G Wordmark",
    className: "max-w-[170px] md:max-w-[210px] lg:max-w-[250px]",
  },
];

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
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-2.5 md:px-9 lg:gap-10.5">
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
        <div className="w-full max-w-7xl bg-black/50 px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
          <div className="grid grid-cols-2 gap-8 md:gap-10 lg:grid-cols-4 lg:gap-12">
            {CI_LOGOS.map((logo) => (
              <div key={logo.alt} className="flex h-24 items-center justify-center md:h-28 lg:h-32">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={320}
                  height={180}
                  loading="lazy"
                  className={`h-auto w-auto object-contain ${logo.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
