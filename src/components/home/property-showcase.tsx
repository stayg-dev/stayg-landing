"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";

const properties = [
  { id: 1, image: "/reference/ref1/1.webp", location: "서울 서초" },
  { id: 2, image: "/reference/ref2/1.webp", location: "부산 영도" },
  { id: 3, image: "/reference/ref3/1.webp", location: "강원 삼척" },
  { id: 4, image: "/reference/ref4/1.webp", location: "전북 전주" },
  { id: 5, image: "/reference/ref5/1.webp", location: "경기 가평" },
  { id: 6, image: "/reference/ref6/1.webp", location: "경남 양산" },
  { id: 7, image: "/reference/ref7/1.webp", location: "고양 벽제" },
  { id: 8, image: "/reference/ref8/1.webp", location: "고양 화정" },
  { id: 9, image: "/reference/ref9/1.webp", location: "충남 서산" },
  { id: 10, image: "/reference/ref10/1.webp", location: "파주 금촌" },
  { id: 11, image: "/reference/ref11/1.webp", location: "파주 탄현" },
] as const;

export default function PropertyShowcase() {
  const { locale } = useLocale();
  const isEn = locale === "en";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragThreshold: 10,
    duration: 25,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative flex min-h-145 items-center overflow-hidden bg-black lg:min-h-225">
      <Image
        src="/home/property-showcase/bg-image.webp"
        alt="Property showcase background"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />

      <div className="relative z-10 flex w-full flex-col gap-8 py-12 pr-0 pl-2.5 md:flex-row md:items-center md:gap-6 md:pl-[max(2.25rem,50vw-38.25rem)] lg:gap-22.25">
        <div className="flex flex-col gap-5 text-center md:shrink-0 md:text-start">
          <div className="flex flex-col">
            <h2 className="font-semibold text-white text-xl lg:text-[28px]">STAY-G</h2>
            <p className="font-semibold text-white text-xl lg:text-[28px]">
              {isEn ? "Representative Properties Under Management" : "대표 운영 숙박 시설"}
            </p>
          </div>
          <div className="max-w-full text-sm text-white leading-[140%] md:max-w-57 lg:text-base">
            {isEn ? (
              <>
                <p>Here are selected examples of properties currently under our operation.</p>
                <p>More case studies are continuously being updated.</p>
              </>
            ) : (
              <>
                <p>실제 운영하고 있는 일부 사례입니다.</p>
                <p>더 많은 사례는</p>
                <p>계속해서 업데이트 중에 있습니다.</p>
              </>
            )}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {properties.map((property, index) => (
                  <div
                    key={property.id}
                    className="aspect-3/2 w-[calc((100vw-40px)/1.2)] shrink-0 pr-5 md:w-[calc((66vw-60px)/1.2)] lg:w-[calc((75vw-80px)/1.2)] lg:pr-10"
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={property.image}
                        alt={
                          property.location
                            ? `Property in ${property.location}`
                            : `Property ${property.id}`
                        }
                        fill
                        sizes="(max-width: 768px) 83vw, (max-width: 1024px) 55vw, 62vw"
                        className={`object-cover opacity-90 transition-all duration-500 ${index === selectedIndex ? "scale-100 blur-0" : "scale-105 blur-sm"}`}
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-linear-to-b from-neutral-900/0 to-neutral-900 opacity-90" />

                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 sm:p-8 lg:p-10 xl:gap-4 xl:p-15">
                        <span className="w-fit rounded-full border border-white bg-black/30 px-1.5 py-1 text-[10px] text-white xl:px-2.5 xl:text-sm">
                          {isEn ? "Asset Management & Remodeling" : "위탁운영 및 리모델링"}
                        </span>

                        <div className="space-y-1 xl:space-y-2">
                          <h3 className="font-semibold text-lg text-white xl:text-[28px]">
                            {property.location}
                          </h3>
                        </div>

                        <Link
                          href="/reference/collection"
                          className="flex w-fit items-center gap-1.5 border border-white bg-neutral-900/70 py-2 pr-3 pl-4 text-white text-xs transition-colors hover:bg-neutral-900/90 sm:py-3 sm:pr-4 sm:pl-6 sm:text-sm"
                        >
                          {isEn ? "View details" : "자세히 보기"}
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 pr-4 sm:mt-6 sm:pr-8 md:pr-14 lg:pr-24">
            {properties.map((property, index) => (
              <button
                key={property.id}
                type="button"
                onClick={() => emblaApi?.goTo(index)}
                className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors ${index === selectedIndex ? "w-14 bg-white" : "bg-white/40"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
