"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";

interface Tab {
  no: number;
  id: string;
  href: Route;
  label: {
    ko: string;
    en: string;
  };
}

const tabs: Tab[] = [
  {
    no: 1,
    id: "brand",
    href: "/reference/brand" as Route,
    label: { ko: "STAY-G 브랜드", en: "STAY-G Brand" },
  },
  {
    no: 2,
    id: "collection",
    href: "/reference/collection" as Route,
    label: { ko: "사례 모음", en: "Project Portfolio" },
  },
  {
    no: 3,
    id: "cheongsong-hanok",
    href: "/reference/cheongsong-hanok" as Route,
    label: { ko: "청송 한옥호텔 안", en: "Cheongsong Hanok Plan" },
  },
];

export default function ReferenceSubheader() {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <div className="h-12 w-full bg-background">
      <nav className="flex h-full items-center overflow-x-auto px-2">
        <ul className="mx-auto flex shrink-0 items-center gap-4 whitespace-nowrap md:gap-12 lg:gap-30">
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
