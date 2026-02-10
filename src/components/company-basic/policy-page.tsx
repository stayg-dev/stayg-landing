import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface PolicyPageProps {
  activeTab: "privacy" | "emails";
  title: string;
  subtitle: string;
  description?: string;
  children?: ReactNode;
}

export default function PolicyPage({
  activeTab,
  title,
  subtitle,
  description,
  children,
}: PolicyPageProps) {
  return (
    <main className="bg-[#f3f3f3]">
      <section className="relative h-40 overflow-hidden md:h-52">
        <Image
          src="/company/hero-bg.webp"
          alt="Policy background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#02060f]/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-white">
          <h1 className="font-medium text-[31px]">Privacy Policy</h1>
          <p className="mt-2 text-sm text-white/80">Authorities emphasize the importance</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-0 pb-10 md:pb-14">
        <div className="grid grid-cols-2 border-[#b9b9b9] border-x">
          <Link
            href="/company-basic/personal-information"
            className={`border-[#b9b9b9] border-b px-3 py-3 text-center text-lg ${
              activeTab === "privacy" ? "border-[#3a3a3a] text-[#1f1f1f]" : "text-[#2b2b2b]"
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/company-basic/emails-permission"
            className={`border-[#b9b9b9] border-b px-3 py-3 text-center text-lg ${
              activeTab === "emails" ? "border-[#3a3a3a] text-[#1f1f1f]" : "text-[#2b2b2b]"
            }`}
          >
            Emails Permission
          </Link>
        </div>

        <div className="pt-10">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#222] text-white">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-[#222] text-xl">{title}</h2>
              <p className="text-2xl text-[#8f8f8f]">{subtitle}</p>
            </div>
          </div>

          <div className="mt-6 border-[#dfdfdf] border-t" />
          {description && <p className="mt-5 text-[#2f2f2f] text-xs leading-7">{description}</p>}
          {children && <div className="mt-5 text-[#2f2f2f] text-sm leading-7">{children}</div>}
        </div>
      </section>
    </main>
  );
}
