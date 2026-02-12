export default function LocationMap() {
  return (
    <section className="w-full bg-[#373432] py-10 lg:pt-30 lg:pb-15">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-2.5 md:px-9">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-white text-xl lg:text-[28px] lg:leading-10">
              오시는길
            </h2>
            <p>
              <span className="font-light text-sm text-white lg:text-base">
                서울특별시 금천구 가산동 319-8 에이스하이엔드타워 11층 1107호, (주)스테이지
              </span>
              <br />
              <span className="font-light text-[#8C8C8C] text-sm lg:text-base">
                176, Saekkot-ro, Paju-si, Gyeonggi-do, Republic of Korea
                <br />
                11F-1107, 58, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of Korea
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 lg:w-auto lg:min-w-[420px]">
            <div className="px-4 py-2.5">
              <p className="font-semibold text-white text-xl lg:text-[28px] lg:leading-10">
                유선문의
              </p>
              <p className="font-light text-sm text-white lg:text-base">0507-1465-7060</p>
            </div>
            <div className="px-4 py-2.5">
              <p className="font-semibold text-white text-xl lg:text-[28px] lg:leading-10">
                이메일 문의
              </p>
              <p className="font-light text-sm text-white lg:text-base">stayg@stayg.kr</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden border border-neutral-600 bg-stone-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.3239024039638!2d126.88522048710706!3d37.471185972443386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b61e6312b905b%3A0x6218490db7931e1f!2z7ISc7Jq47Yq567OE7IucIOq4iOyynOq1rCDqsIDsgrDrj5kgMzE5LTg!5e0!3m2!1sko!2skr!4v1770380506248!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="오시는길 지도"
          />
        </div>
      </div>
    </section>
  );
}
