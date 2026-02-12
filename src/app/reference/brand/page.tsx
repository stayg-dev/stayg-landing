"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import RightArrow from "@/components/icons/right-arrow";
import { BRANDS_DATA } from "@/lib/reference-data";

export default function Brand() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const showXlControls = BRANDS_DATA.length > 6;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    duration: 25,
    slidesToScroll: 1,
    containScroll: false,
    draggable: false,
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.goToNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.goToPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnap());
  }, [emblaApi]);

  const handleKnowMore = (index: number) => {
    setExpandedIndex(index);
    router.push(`/reference/collection?buildingId=${BRANDS_DATA[index].id}`);
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setTimeout(() => {
      emblaApi.reInit();
    }, 510);
    return () => clearTimeout(timer);
  }, [emblaApi]);

  return (
    <section>
      <div className="bg-white py-10 lg:py-25">
        <div className="mx-auto max-w-7xl px-2.5 md:px-9">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {BRANDS_DATA.map((location, index) => {
                  const isActive = expandedIndex === index;
                  return (
                    <div
                      key={`carousel-${location.region}-${location.area}`}
                      className={`h-80 w-full shrink-0 pr-4 transition-[width] duration-500 sm:h-100 lg:h-160 lg:w-[calc(100%/3)] ${
                        isActive
                          ? "w-full lg:w-[calc(200%/4)] xl:w-[calc(200%/7)]"
                          : "w-full lg:w-[calc(100%/4)] xl:w-[calc(100%/7)]"
                      }`}
                    >
                      <button
                        type="button"
                        onMouseEnter={() => setExpandedIndex(index)}
                        onFocus={() => setExpandedIndex(index)}
                        onClick={() => handleKnowMore(index)}
                        className="group relative flex h-full w-full cursor-pointer flex-col justify-end overflow-hidden text-left"
                      >
                        <Image
                          src={location.image}
                          alt={`${location.region} ${location.area}`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 30vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/35 to-black" />
                        <div className="relative flex flex-col gap-4 p-6 lg:gap-6 lg:p-8">
                          <div className="flex flex-col gap-1 lg:gap-2">
                            <span
                              className={`font-semibold text-lg text-white ${isActive ? "lg:text-2xl" : "lg:text-[22px]"}`}
                            >
                              {location.region}
                            </span>
                            <span className="font-semibold text-sm text-white lg:text-base">
                              {location.area}
                            </span>
                          </div>
                          <div className="inline-flex items-center">
                            <span className="font-normal text-white underline underline-offset-2 lg:text-sm">
                              자세히 보기
                            </span>
                            <ChevronRight size={20} className="text-white" />
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prev */}
            <button
              type="button"
              onClick={scrollPrev}
              className={`absolute top-1/2 left-[3%] z-20 hidden h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center p-2 md:flex xl:h-10 xl:w-10 ${!showXlControls ? "xl:hidden" : ""}`}
              aria-label="Previous slide"
            >
              <RightArrow className="size-full" style={{ transform: 'scaleX(-1)' }} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              className={`absolute top-1/2 right-[3%] z-20 hidden h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center p-2 md:flex xl:h-10 xl:w-10 ${!showXlControls ? "xl:hidden" : ""}`}
              aria-label="Next slide"
            >
              <RightArrow className="size-full" />
            </button>
          </div>

          <div
            className={`mt-6 flex items-center justify-center gap-2 ${!showXlControls ? "xl:hidden" : ""}`}
          >
            {BRANDS_DATA.map((location, index) => (
              <button
                key={`dot-${location.region}-${location.area}`}
                type="button"
                onClick={() => {
                  emblaApi?.goTo(index);
                }}
                className={`h-1.5 cursor-pointer rounded-full transition-all ${
                  index === selectedIndex ? "w-14 bg-neutral-800" : "w-1.5 bg-neutral-800/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl justify-center bg-white px-2.5 md:px-9">
        <Image
          src="/reference/brand-location.svg"
          alt="스테이지 전국 브랜드 위치 지도"
          width={1440}
          height={1212}
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
