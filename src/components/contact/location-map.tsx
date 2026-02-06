import Image from "next/image";

export default function LocationMap() {
  return (
    <section className="w-full bg-[#373432] py-10 lg:pt-30 lg:pb-15">
      <div className="mx-auto flex max-w-260 flex-col gap-2 px-2.5 md:px-9">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white text-xl lg:text-[28px] lg:leading-10">
            오시는길
          </h2>
          <p>
            <span className="font-light text-sm text-white lg:text-base">
              서울특별시 금천구 가산동 319-8 에이스한솔타워 11층 1107호, (주)스테이지
            </span>
            <br />
            <span className="font-light text-[#8C8C8C] text-sm lg:text-base">
              176, Saekkot-ro, Paju-si, Gyeonggi-do, Republic of Korea
              <br />
              11F-1107, 58, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of Korea
            </span>
          </p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden border border-neutral-600 bg-stone-800">
          <Image
            src="/contact/map.webp"
            alt="오시는길 지도"
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
