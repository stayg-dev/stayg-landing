import Image from "next/image";
import AccommodationIcon from "@/assets/home/business-concerns/accommodation.svg";
import EntrustmentIcon from "@/assets/home/business-concerns/entrustment.svg";
import GrowthIcon from "@/assets/home/business-concerns/growth.svg";
import InteriorIcon from "@/assets/home/business-concerns/interior.svg";
import SpeedIcon from "@/assets/home/business-concerns/speed.svg";

const concerns = [
  {
    id: 1,
    icon: SpeedIcon,
    title: "빠른 투자금 회수",
    description: "숙박은 처음인데 투자금을 빠르게 회수하고 싶은\n숙박 초보 예비 대표님",
  },
  {
    id: 2,
    icon: GrowthIcon,
    title: "매출 고속 향상",
    description: "할 수 있는건 다 해봤는데 매출이 저조해 고민인\n숙박시설 운영 대표님",
  },
  {
    id: 3,
    icon: EntrustmentIcon,
    title: "운영 위탁",
    description: "신경쓸 곳이 많아져서 숙박시설 겸업 운영이\n곤란하신 대표님",
  },
  {
    id: 4,
    icon: InteriorIcon,
    title: "인테리어, 시공 고민",
    description: "인테리어도 해야하고 허가도 확인해야하고\n복잡해서 고민이신 대표님",
  },
  {
    id: 5,
    icon: AccommodationIcon,
    title: "숙박업 All in One",
    description: "인사, TAX, 시설, 홍보, 영업 등\n모든 것을 한 번에 해결하고 싶은 대표님",
  },
];

export default function BusinessConcerns() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-30">
      {/* Background Logo */}
      <div className="pointer-events-none absolute top-[64%] right-23 hidden h-176.5 w-180 translate-x-1/4 -translate-y-1/2 lg:block">
        <Image
          src="/home/business-concerns-bg.webp"
          alt="business-concerns"
          fill
          sizes="720px"
          loading="lazy"
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 mx-auto px-2.5 md:px-9">
        {/* Header */}
        <div className="mb-10 text-center md:mb-15">
          <h2 className="mb-6.25 font-chosunilbo font-normal text-[22px] text-logo-gradient md:text-3xl lg:text-[43px]">
            대표님의 고민, STAY-G가 줄여드립니다.
          </h2>

          <p className="mx-auto font-light text-[#474747] text-sm leading-[22.4px] md:text-base">
            숙박업 운영시 득과 실을 분명하게 따져보세요.
            <br />
            노무, 세무, 마케팅, 경영에 특화 된 전문가 그룹 STAY-G가 위탁운영의 새로운 기준을
            제시합니다.
          </p>
        </div>

        {/* Concern Cards */}
        <div className="mx-auto flex max-w-231 flex-col gap-4">
          {concerns.map((concern) => (
            <div
              key={concern.id}
              className="flex flex-col gap-3 bg-stone-700 px-5 py-5 md:flex-row md:items-center md:gap-4 md:px-9 md:py-6"
            >
              {/* Icon */}
              <div className="flex shrink-0 items-center justify-center">
                <Image src={concern.icon} alt="" aria-hidden="true" className="h-auto w-auto" />
              </div>

              {/* Title */}
              <div className="w-auto shrink-0 text-center md:w-54.25 md:text-start">
                <span className="font-semibold text-white text-xl md:text-2xl lg:text-[28px]">
                  {concern.title}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden h-8.5 w-px bg-white/30 md:block" />

              {/* Description */}
              <p className="whitespace-pre-line text-center font-light text-sm text-white leading-6 md:text-start md:text-base">
                {concern.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
