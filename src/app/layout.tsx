import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import { NavigationTracker } from "@/components/analytics/navigation-tracker";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { LocaleProvider } from "@/components/providers/locale-provider";

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
  const gtmId = "GTM-N8P623S4";

  return (
    <html lang="ko">
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      </head>
      <body className={` ${geistSans.variable} ${chosunilbo.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LocaleProvider>
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
        </LocaleProvider>
      </body>
    </html>
  );
}
