"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  no: number;
  id: string;
  label: string;
  href: Route;
}

const tabs: Tab[] = [
  { no: 1, id: "brand", label: "STAY-G 브랜드", href: "/reference/brand" as Route },
  { no: 2, id: "collection", label: "사례 모음", href: "/reference/collection" as Route },
];

export default function ReferenceSubheader() {
  const pathname = usePathname();

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
