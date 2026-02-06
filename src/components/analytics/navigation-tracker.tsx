"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

const PAGE_NAMES: Record<string, string> = {
  "/": "홈",
  "/company": "회사정보",
  "/service/operation": "사업분야-OTA운영대행",
  "/service/marketing": "사업분야-마케팅",
  "/service/construction": "사업분야-시공",
  "/reference/brand": "레퍼런스-브랜드",
  "/reference/collection": "레퍼런스-콜렉션",
  "/user-guide": "이용가이드",
  "/contact": "문의하기",
};

function NavigationTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    prevPathRef.current = pathname;

    // Skip initial load (Umami script handles the first pageview)
    if (prevPath === null) return;

    // Skip if same page
    if (prevPath === pathname) return;

    const pageName = PAGE_NAMES[pathname] || pathname;
    const prevPageName = PAGE_NAMES[prevPath] || prevPath;

    // Track navigation flow: from -> to
    window.umami?.track("navigation", {
      from: prevPageName,
      to: pageName,
      from_path: prevPath,
      to_path: pathname,
    });
  }, [pathname, searchParams]);

  // Track referrer on first load
  useEffect(() => {
    const referrer = document.referrer;
    if (!referrer) return;

    try {
      const url = new URL(referrer);
      // Only track external referrers
      if (url.hostname !== window.location.hostname) {
        window.umami?.track("external_referrer", {
          referrer_url: referrer,
          referrer_host: url.hostname,
          landing_page: PAGE_NAMES[pathname] || pathname,
          landing_path: pathname,
        });
      }
    } catch {
      // Invalid referrer URL, ignore
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

export function NavigationTracker() {
  return (
    <Suspense fallback={null}>
      <NavigationTrackerInner />
    </Suspense>
  );
}
