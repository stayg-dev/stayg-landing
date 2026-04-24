import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const assetPath = "/reference/cheongsong-hanok";

const stats = [
  { value: "7", unit: "동", label: "총 운영 객실" },
  { value: "2026", unit: "년", label: "운영 시작 연도" },
  { value: "24", unit: "시간", label: "컨시어지 운영" },
  { value: "100", unit: "%", label: "STAY-G 위탁운영" },
];

const rooms = [
  {
    name: "참봉댁",
    englishName: "CHAMBONG-DAEK",
    type: "소형",
    image: `${assetPath}/chambong.jpg`,
    description:
      "소박하면서 깊이 있는 한옥재, 조선시대의 생활 풍경을 고스란히 담아 역사와 문화가 살아 숨쉬는 공간입니다.",
    tags: ["기준 4인", "온돌", "취사 가능", "더블 침대", "BBQ"],
  },
  {
    name: "훈장댁",
    englishName: "HUNJANG-DAEK",
    type: "중형",
    image: `${assetPath}/hunjang.jpg`,
    description:
      "조용하고 단아한 분위기의 작은 마당 속 한옥, 고요한 속에서 사색의 향기를 즐기기 편한 환경을 제공합니다.",
    tags: ["기준 4인", "온돌", "취사 불가", "더블 침대"],
  },
  {
    name: "생원댁",
    englishName: "SAENGWON-DAEK",
    type: "소형",
    image: `${assetPath}/saengwon.jpg`,
    description:
      "단아하고 소박한 한옥으로 전통 주거의 미학을 고스란히 담은 구조, 정갈하고 편안한 공간 속에서 여유로운 한국의 여백을 느낄 수 있습니다.",
    tags: ["기준 4인", "온돌", "취사 가능", "더블 침대", "BBQ"],
  },
  {
    name: "교수댁",
    englishName: "GYOSU-DAEK",
    type: "중형",
    image: `${assetPath}/gyosu.jpg`,
    description:
      "전통 목재와 기와의 우아한 구조가 인상적, 정중한 품격이 조용히 묻어나는 독립된 전통 한옥으로 프라이빗하고 특별한 분위기가 특징입니다.",
    tags: ["기준 6인", "온돌", "취사 가능", "더블 침대", "BBQ"],
  },
  {
    name: "영감댁",
    englishName: "YEONGGAM-DAEK",
    type: "대형",
    image: `${assetPath}/yeonggam.jpg`,
    description:
      "가장 큰 규모로 이루어진 한옥, 프라이빗한 공간 구성이 매력이며 넓은 처마와 아늑한 마당이 가족 단위 여행객에게 특히 사랑받는 공간입니다.",
    tags: ["기준 10인", "온돌", "취사 가능", "더블 침대", "BBQ"],
  },
  {
    name: "정승댁",
    englishName: "JUNGSEUNG-DAEK",
    type: "대형",
    image: `${assetPath}/jungseung.jpg`,
    description:
      "국가 민속문화재 제250호 초소고택을 재현, 높은 대청마루가 사방의 경치를 포용하며 별채와 사랑채를 포함한 여유로운 가족 여행에 최적화된 공간입니다.",
    tags: ["기준 10인", "온돌", "취사 가능", "더블 침대", "BBQ"],
  },
];

const details = [
  { title: "위치", body: "경북 청송군 주왕산면 청송백자로 12" },
  { title: "운영 시작", body: "2026년 04월 11일" },
  { title: "운영 형태", body: "STAY-G 위탁운영" },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex min-h-6 items-center border border-[#cfc8bd] px-2 font-medium text-[#81786e] text-xs leading-none">
      {children}
    </span>
  );
}

function RoomCard({ room }: { room: (typeof rooms)[number] }) {
  return (
    <article className="bg-white">
      <div className="relative aspect-[1.95/1] w-full overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} 외관`}
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-white px-3 py-1.5 font-medium text-[#8f867c] text-xs">
          {room.type}
        </span>
      </div>
      <div className="px-6 pt-5 pb-6 md:px-8">
        <h3 className="font-semibold text-[#24211f] text-xl">{room.name}</h3>
        <p className="mt-1 font-medium text-[#a8a19a] text-[11px]">{room.englishName}</p>
        <p className="mt-3 min-h-11 border-[#dfd9d2] border-b pb-5 text-[#a7a09a] text-sm leading-6">
          {room.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {room.tags.map((tag) => (
            <Tag key={`${room.name}-${tag}`}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CheongsongHanok() {
  return (
    <main className="bg-[#f2f0ec] text-[#1d1b19]">
      <section className="bg-[#f2f0ec]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-2.5 pt-12 md:px-9 lg:grid-cols-[0.58fr_1fr] lg:pt-20">
          <div className="flex min-h-95 flex-col justify-center bg-[#f2f0ec] py-10 lg:pr-12">
            <div className="flex items-center gap-3 text-[#a9a19a] text-xs">
              <span className="h-5 w-1 bg-black" aria-hidden="true" />
              <span className="tracking-[0.16em]">REFERENCE</span>
              <span aria-hidden="true">·</span>
              <span>위탁운영 사례</span>
            </div>
            <h1 className="mt-8 font-semibold text-4xl text-black leading-tight md:text-5xl">
              청송 한옥호텔
              <span className="block text-[#6f5f4f]">Cheongsong Hanok Hotel</span>
            </h1>
            <p className="mt-7 text-[#807871] text-lg">
              STAY-G가 운영하고 있는 프리미엄 전통 한옥 호텔입니다.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              {["경상북도 청송군", "전통 한옥", "7개동 운영"].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#b9b1a8] px-5 py-2 font-medium text-[#5f574f] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={`${assetPath}/cs_drone.mp4`}
              poster={`${assetPath}/hero.jpg`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="청송 한옥호텔 드론 영상"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-2.5 py-8 md:px-9 lg:grid-cols-4 lg:py-9">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-semibold text-3xl text-black">
                {stat.value}
                <span className="ml-0.5 align-super text-sm">{stat.unit}</span>
              </p>
              <p className="mt-2 text-[#aaa29b] text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-30">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-2.5 md:px-9 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="relative aspect-[2.2/1] overflow-hidden">
            <Image
              src={`${assetPath}/hero.jpg`}
              alt="청송 한옥호텔 전경"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-medium text-[#aaa29b] text-sm tracking-[0.34em]">ABOUT</p>
            <h2 className="mt-6 font-semibold text-2xl text-black leading-tight">
              한국의 전통 정취가
              <br />
              그대로 살아있는 공간
            </h2>
            <p className="mt-6 text-[#9b948d] text-sm leading-6">
              경상북도 청송군 주왕산 자락에 자리한 청송 한옥호텔은 조선 시대 상류 가옥의 품격을
              현대적 편의와 함께 재현한 프리미엄 전통 숙박 시설입니다. STAY-G가 시설 전체의 운영,
              OTA 관리, 고객 서비스를 전담하고 있습니다.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 border-[#ddd7cf] border-t pt-7 sm:grid-cols-2">
              {details.map((detail) => (
                <div key={detail.title}>
                  <dt className="text-[#aaa29b] text-xs">{detail.title}</dt>
                  <dd className="mt-2 font-semibold text-[#2b2825] text-sm">{detail.body}</dd>
                </div>
              ))}
              <div>
                <dt className="text-[#aaa29b] text-xs">더보기</dt>
                <dd className="mt-2 flex items-center gap-2">
                  <Link
                    href="https://www.instagram.com/hanok_hotel_ann/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="STAY-G Instagram"
                    className="inline-flex h-5 w-5 items-center justify-center border border-[#8c857d] text-[#5f574f]"
                  >
                    <Instagram size={14} />
                  </Link>
                  <Link
                    href="https://map.naver.com/p/entry/place/38676229?lng=129.1061245&lat=36.3785578&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604231102&locale=ko&svcName=map_pcv5&businessCategory=pension&searchType=place"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="STAY-G Naver blog"
                    className="inline-flex h-5 w-5 items-center justify-center border border-[#8c857d] font-semibold text-[#5f574f] text-xs"
                  >
                    N
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0ec] py-18 lg:py-25">
        <div className="mx-auto max-w-7xl px-2.5 md:px-9">
          <p className="font-medium text-[#aaa29b] text-sm tracking-[0.34em]">ROOMS & VILLAS</p>
          <h2 className="mt-8 font-semibold text-2xl text-black">객실 안내</h2>

          <div className="mt-9 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-px lg:gap-y-16">
            {rooms.map((room) => (
              <RoomCard key={room.name} room={room} />
            ))}
          </div>

          <div className="mt-16 md:w-[calc((100%-1px)/2)] lg:w-[calc((100%-1px)/2)]">
            <RoomCard
              room={{
                name: "대감댁",
                englishName: "DAEGAM-DAEK",
                type: "대형",
                image: `${assetPath}/daegam.jpg`,
                description:
                  "도시를 벗어나 제각각 조화로운 전통의 정취와 공간, 소담하면서도 품격은 마음이 남기는 한국의 정취. 사계절의 정취가 보이는 전통 구조가 특징입니다.",
                tags: ["기준 12인", "온돌", "취사 가능", "더블 침대", "BBQ"],
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
