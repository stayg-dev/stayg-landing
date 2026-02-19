import Image from "next/image";

export default function Brand() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="mx-auto flex max-w-7xl justify-center px-2.5 md:px-9">
        <Image
          src="/reference/brand-single.webp"
          alt="STAY-G 브랜드 소개"
          width={1440}
          height={4200}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
