"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";

interface Tab {
  no: number;
  href: Route;
  label: {
    ko: string;
    en: string;
  };
}

const tabs: Tab[] = [
  {
    no: 1,
    href: "/unmanned-ota/unmanned" as Route,
    label: { ko: "무인관제", en: "Unmanned Control" },
  },
  {
    no: 2,
    href: "/unmanned-ota/ota" as Route,
    label: { ko: "OTA 운영대행", en: "OTA Operations" },
  },
];

export default function UnmannedOtaSubheader() {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <div className="h-12 w-full bg-background">
      <nav className="flex h-full items-center overflow-x-auto px-2">
        <ul className="mx-auto flex shrink-0 items-center gap-8 whitespace-nowrap md:gap-16 lg:gap-30">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href || pathname.startsWith(`${tab.href}/`);

            return (
              <li key={tab.no}>
                <Link
                  href={tab.href}
                  className={`font-medium text-sm transition-colors ${
                    isActive
                      ? "text-white underline underline-offset-2"
                      : "text-[#BBB] hover:text-white"
                  }`}
                >
                  {tab.no}. {tab.label[locale]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
