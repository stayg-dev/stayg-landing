import type { Metadata } from "next";
import {
  otaPageContent,
  otaPageContentEn,
  UnmannedOtaLandingPage,
} from "@/components/unmanned-ota/landing-page";

export const metadata: Metadata = {
  title: "OTA 운영대행 | STAY-G",
  description: "STAY-G OTA 운영대행 서비스 랜딩페이지",
};

export default function OtaOperationsPage() {
  return <UnmannedOtaLandingPage content={otaPageContent} englishContent={otaPageContentEn} />;
}
