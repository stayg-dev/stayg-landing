import type { Metadata } from "next";
import CheongsongHanok from "@/components/reference/cheongsong-hanok";

export const metadata: Metadata = {
  title: "청송 한옥호텔 안 | STAY-G",
  description: "STAY-G 청송 한옥호텔 위탁운영 사례 페이지",
};

export default function CheongsongHanokPage() {
  return <CheongsongHanok />;
}
