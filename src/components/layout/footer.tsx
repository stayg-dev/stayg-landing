"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendMail } from "@/lib/send-mail";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { PrivacyPolicyPopup } from "../ui/privacy-policy-popup";

const formSchema = z.object({
  name: z.string().nonempty(""),
  phone: z
    .string()
    .transform((val) => val.replace(/-/g, ""))
    .refine((val) => /^01\d{8,9}$/.test(val), {
      message: "전화번호는 01로 시작하고 10자리 또는 11자리 숫자여야 해요.",
    }),
  agreed: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의합니다.",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function Footer() {
  const pathname = usePathname();
  const [policyOpen, setPolicyOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      agreed: false,
    },
  });

  const { formState } = form;
  const { isDirty, isValid, isSubmitting } = formState;

  if (pathname === "/contact") return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: FormSchemaType) => {
    setSubmitStatus(null);
    setErrorMessage("");

    const result = await sendMail({ name: data.name, contact: data.phone });

    if (result.success) {
      setSubmitStatus("success");
      window.umami?.track("form_submit", {
        form: "footer_contact",
        page: pathname,
      });
      form.reset();
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || "메일 전송에 실패했습니다.");
    }
  };

  return (
    <footer className="w-full">
      <div className="bg-stone-700 py-10 md:py-16 lg:py-13">
        <div className="mx-auto max-w-7xl px-2.5 md:px-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-15">
            <div className="shrink-0 text-left">
              <h2 className="font-medium text-3xl text-[#BBBBBC] lg:text-[32px]">
                <span className="hidden lg:block">
                  24시간
                  <br />
                  문의하기
                </span>
                <span className="block lg:hidden">24시간 문의하기</span>
              </h2>
            </div>

            <div className="w-full flex-1">
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium text-white">
                      성함
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="성함을 입력해 주세요."
                      {...form.register("name")}
                      aria-invalid={!!form.formState.errors.name}
                      aria-describedby="name-error"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-medium text-white">
                      전화번호
                    </label>
                    <PhoneInput
                      id="phone"
                      value={form.watch("phone")}
                      onChange={(value) => form.setValue("phone", value)}
                      placeholder="010-0000-0000"
                      aria-invalid={!!form.formState.errors.phone}
                    />
                  </div>

                  <div className="flex items-end sm:col-span-2 lg:col-span-1">
                    <button
                      type="submit"
                      className="h-12 w-full cursor-pointer bg-white font-bold text-black text-sm transition-opacity disabled:cursor-not-allowed lg:w-45"
                      disabled={!(isDirty && isValid) || isSubmitting}
                    >
                      {isSubmitting ? "전송 중..." : "온라인 문의 제출하기"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <Checkbox
                    id="agreed"
                    label="개인정보 수집 및 이용에 동의합니다."
                    error={!!form.formState.errors.agreed}
                    {...form.register("agreed")}
                    aria-invalid={!!form.formState.errors.agreed}
                    aria-describedby="agreed-error"
                  />

                  <p className="font-light text-white text-xs">
                    개인정보는 본사의 상담 용도 외 다른 목적으로 사용되지 않으며, 별도의 계약이
                    이루어지지 않으면 즉시 파기됩니다.{" "}
                    <button
                      type="button"
                      className="cursor-pointer underline underline-offset-2"
                      onClick={() => setPolicyOpen(true)}
                    >
                      개인정보처리방침
                    </button>
                    을 참고해 주세요.
                  </p>
                </div>
              </form>

              {submitStatus === "success" && (
                <p className="mt-3 text-green-400 text-sm">문의가 성공적으로 전송되었습니다.</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-3 text-red-400 text-sm">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1f2124] py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-9">
          <div className="border-white/10 border-b pb-6">
            <Image src="/uploads/2024/10/stayglogo.png" alt="STAY-G" width={100} height={27} />
          </div>

          <div className="grid grid-cols-1 gap-10 border-white/10 border-b py-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-semibold text-[#d0d0d0] text-sm tracking-[0.14em]">ABOUT</h3>
              <p className="text-[#999999] text-sm leading-relaxed">
                효율성과 전문성의 새로운 패러다임, 생활숙박시설 위탁운영사 스테이지
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-[#d0d0d0] text-sm tracking-[0.14em]">
                CONTACT
              </h3>
              <p className="text-[#999999] text-sm">010-5172-7060</p>
              <Link
                href="mailto:kevin7060@naver.com"
                className="mt-1 inline-block text-[#999999] text-sm transition-colors hover:text-white"
              >
                kevin7060@naver.com
              </Link>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-[#d0d0d0] text-sm tracking-[0.14em]">
                COMPANY INFO
              </h3>
              <div className="space-y-2 text-[#999999] text-xs md:text-sm">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 leading-7">
                  <span className="inline-flex whitespace-nowrap">
                    주소: 서울특별시 금천구 가산동 319-8 에이스한솔타워 11층 1107호
                  </span>
                  <span className="inline-flex whitespace-nowrap">
                    상호: (주)스테이지 STAY-G Inc.
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 leading-7">
                  <span className="inline-flex whitespace-nowrap">
                    사업자 등록번호: 268-88-03334
                  </span>
                  <span className="inline-flex whitespace-nowrap">대표번호: 0507-1465-7060</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 leading-7">
                  <Link
                    href="/company-basic/personal-information"
                    className="inline-flex whitespace-nowrap transition-colors hover:text-white"
                  >
                    개인정보처리방침
                  </Link>
                  <Link
                    href="/company-basic/emails-permission"
                    className="inline-flex whitespace-nowrap transition-colors hover:text-white"
                  >
                    이메일무단수집거부
                  </Link>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/uploads/2024/11/stay-g_company.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-white/40 px-5 py-2 text-xs transition-colors hover:border-white hover:bg-white hover:text-black"
                >
                  회사소개서 다운로드
                </a>
                <a
                  href="/uploads/2024/11/stay-g_company.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-white/40 px-5 py-2 text-xs transition-colors hover:border-white hover:bg-white hover:text-black"
                >
                  COMPANY PROFILE
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-8 text-[#7d7d7d] text-xs md:flex-row md:items-center md:justify-between">
            <p className="tracking-wide">
              COPYRIGHT © 2024 <span className="font-bold text-[#cacaca]">STAY-G INC.</span> ALL
              RIGHTS RESERVED.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="https://blog.naver.com/stay-g-inc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="STAY-G blog"
              >
                <Image src="/icons/blog.png" alt="" width={24} height={24} />
              </Link>
              <Link
                href="https://www.instagram.com/stay_g.kr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="STAY-G instagram"
                className="inline-flex h-6 w-6 items-center justify-center text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 2c-3.2 0-3.5 0-4.8.1-1 .1-1.5.2-1.9.4-.4.1-.7.3-1 .7-.4.3-.6.6-.7 1-.2.4-.3.9-.4 1.9-.1 1.3-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.5.4 1.9.1.4.3.7.7 1 .3.4.6.6 1 .7.4.2.9.3 1.9.4 1.3.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.5-.2 1.9-.4.4-.1.7-.3 1-.7.4-.3.6-.6.7-1 .2-.4.3-.9.4-1.9.1-1.3.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.5-.4-1.9-.1-.4-.3-.7-.7-1-.3-.4-.6-.6-1-.7-.4-.2-.9-.3-1.9-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.6-2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                </svg>
              </Link>
              <button
                type="button"
                onClick={scrollToTop}
                className="ml-2 inline-flex items-center gap-1 text-[#8f8f8f] text-xs tracking-[0.14em] transition-colors hover:text-white"
              >
                TOP
                <span className="text-sm">^</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <PrivacyPolicyPopup open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </footer>
  );
}
