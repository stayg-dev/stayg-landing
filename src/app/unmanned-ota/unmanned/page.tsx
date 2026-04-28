import type { Metadata } from "next";
import {
  UnmannedOtaLandingPage,
  unmannedPageContent,
  unmannedPageContentEn,
} from "@/components/unmanned-ota/landing-page";

export const metadata: Metadata = {
  title: "무인관제 | STAY-G",
  description: "STAY-G 무인관제 서비스 랜딩페이지",
};

export default function UnmannedControlPage() {
  return (
    <UnmannedOtaLandingPage content={unmannedPageContent} englishContent={unmannedPageContentEn} />
  );
}
