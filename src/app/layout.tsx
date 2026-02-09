import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { NavigationTracker } from "@/components/analytics/navigation-tracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const chosunilbo = localFont({
  src: [{ path: "./fonts/ChosunilboNM-Regular.woff2", weight: "400", style: "normal" }],
  display: "swap",
  variable: "--font-chosunilbo",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "(주)스테이지 STAY-G - 숙박 운영의 시작부터 매출까지 위탁운영 · 무인관제 · OTA 운영대행",
  description: "위탁운영 · 무인관제 · OTA 운영대행",
  icons: {
    icon: "/src/app/favicon.ico",
    apple: "/src/app/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body className={` ${geistSans.variable} ${chosunilbo.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <NavigationTracker />
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
