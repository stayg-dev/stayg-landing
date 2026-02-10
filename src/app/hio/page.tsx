import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HiO | STAY-G",
  description: "HiO 준비중입니다.",
};

export default function HioPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#111315] px-4 py-24">
      <h1 className="font-semibold text-3xl text-[#f1f1f1] md:text-5xl">준비중입니다</h1>
    </main>
  );
}
