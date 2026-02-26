"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";

interface Tab {
  no: number;
  id: string;
  label: string;
  href: Route;
}

const tabsByLocale: Record<"ko" | "en", Tab[]> = {
  ko: [
    { no: 1, id: "operation", label: "위탁 운영", href: "/service/operation" as Route },
    { no: 2, id: "construction", label: "시공 · 건축", href: "/service/construction" as Route },
    { no: 3, id: "marketing", label: "마케팅", href: "/service/marketing" as Route },
  ],
  en: [
    {
      no: 1,
      id: "operation",
      label: "Asset Management",
      href: "/service/operation" as Route,
    },
    {
      no: 2,
      id: "construction",
      label: "Construction & Development",
      href: "/service/construction" as Route,
    },
    { no: 3, id: "marketing", label: "Marketing", href: "/service/marketing" as Route },
  ],
};

export default function ServiceSubheader() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const tabs = tabsByLocale[locale];

  return (
    <div className="h-12 w-full bg-background">
      <nav className="flex h-full items-center justify-center">
        <ul className="flex items-center gap-8 md:gap-16 lg:gap-30">
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
                  {tab.no}. {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
