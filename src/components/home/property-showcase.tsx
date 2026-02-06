"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import RightArrow from "../icons/right-arrow";

const properties = [
  {
    id: 1,
    image: "/home/property-showcase/image-1.webp",
    tag: "위탁운영 및 리모델링",
    location: "경기도 일산",
    originalPrice: "5,000만원",
    newPrice: "1억 1,100만원",
  },
  {
    id: 2,
    image: "/home/property-showcase/image-2.webp",
    tag: "위탁운영 및 리모델링",
    location: "경기도 파주",
    originalPrice: "6,000만원",
    newPrice: "1억 2,000만원",
  },
  {
    id: 3,
    image: "/home/property-showcase/image-3.webp",
    tag: "위탁운영 및 리모델링",
    location: "경기도 가평",
    originalPrice: "2,000만원",
    newPrice: "6,000만원",
  },
  {
    id: 4,
    image: "/home/property-showcase/image-4.webp",
    tag: "위탁운영 및 리모델링",
    location: "전라북도 전주",
    originalPrice: "5,000만원",
    newPrice: "1억 5,000만원",
  },
  {
    id: 5,
    image: "/home/property-showcase/image-5.webp",
  },
  {
    id: 6,
    image: "/home/property-showcase/image6.webp",
  },
];

export default function PropertyShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragThreshold: 10,
    duration: 25,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.goToNext();
  }, [emblaApi]);

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
      {/* Background Image */}
      <Image
        src="/home/property-showcase/bg-image.webp"
        alt="Property showcase background"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />

      {/* Content Container */}
      <div className="relative z-10 flex w-full flex-col gap-8 py-12 pr-0 pl-2.5 md:flex-row md:items-center md:gap-6 md:pl-[max(2.25rem,calc((100vw-80rem)/2+2.25rem))] lg:gap-22.25">
        {/* Left Side - Branding */}
        <div className="flex flex-col gap-5 text-center md:shrink-0 md:text-start">
          <div className="flex flex-col">
            <h2 className="font-semibold text-white text-xl lg:text-[28px]">STAY-G</h2>
            <p className="font-semibold text-white text-xl lg:text-[28px]">대표 운영 숙박 시설</p>
          </div>
          <div className="max-w-full text-sm text-white leading-[140%] md:max-w-57 lg:text-base">
            <p>실제 운영하고 있는 일부 사례입니다.</p>
            <p>더 많은 사례는 </p>
            <p>계속해서 업데이트 중에 있습니다.</p>
          </div>
        </div>

        {/* Right Side - Carousel */}
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
                      {/* Background Image */}
                      <Image
                        src={property.image}
                        alt={property.location ? `Property in ${property.location}` : `Property ${property.id}`}
                        fill
                        sizes="(max-width: 768px) 83vw, (max-width: 1024px) 55vw, 62vw"
                        className={`object-cover opacity-90 transition-all duration-500 ${
                          index === selectedIndex ? "scale-100 blur-0" : "scale-105 blur-sm"
                        }`}
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-b from-neutral-900/0 to-neutral-900 opacity-90" />

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 sm:p-8 lg:p-10 xl:gap-4 xl:p-15">
                        {/* Tag Badge */}
                        {property.tag && (
                          <span className="w-fit rounded-full border border-white bg-black/30 px-1.5 py-1 text-[10px] text-white xl:px-2.5 xl:text-sm">
                            {property.tag}
                          </span>
                        )}

                        {property.location && (
                          <div className="space-y-1 xl:space-y-2">
                            {/* Location */}
                            <h3 className="font-semibold text-lg text-white xl:text-[28px]">
                              {property.location}
                            </h3>

                            {/* Price Row */}
                            <div className="flex items-center gap-2">
                              <span className="font-light text-neutral-200 text-xs sm:text-base lg:text-lg">
                                {property.originalPrice}
                              </span>
                              <ArrowRight className="h-4 w-4 text-neutral-200" />
                              <span className="font-bold text-amber-200 text-sm sm:text-lg lg:text-xl">
                                {property.newPrice}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Button */}
                        {property.location && (
                          <Link
                            href="/reference/collection"
                            className="flex w-fit items-center gap-1.5 border border-white bg-neutral-900/70 py-2 pr-3 pl-4 text-white text-xs transition-colors hover:bg-neutral-900/90 sm:py-3 sm:pr-4 sm:pl-6 sm:text-sm"
                          >
                            자세히 보기
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrow Button */}
            <button
              type="button"
              onClick={scrollNext}
              className="absolute top-1/2 right-[10%] z-20 hidden h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center md:right-[21%] md:flex lg:right-[9.5%] xl:right-[15%] xl:h-8 xl:w-8 2xl:right-[16%]"
              aria-label="Next slide"
            >
              <RightArrow className="size-full" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2 pr-4 sm:mt-6 sm:pr-8 md:pr-14 lg:pr-24">
            {properties.map((property, index) => (
              <button
                key={property.id}
                type="button"
                onClick={() => emblaApi?.goTo(index)}
                className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors ${
                  index === selectedIndex ? "w-14 bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
