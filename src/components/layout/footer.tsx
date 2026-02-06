"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
      message: "휴대폰 번호는 01로 시작하고 10자리 또는 11자리 숫자여야 해요.",
    }),
  agreed: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
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
    <footer className="w-full bg-stone-700 px-5 py-10 sm:px-6 md:px-8 md:py-16 lg:py-13">
      <div className="mx-auto max-w-262.75">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-15">
          {/* Title Section */}
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

          {/* Form Section */}
          <div className="w-full flex-1">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
              {/* Input Fields Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium text-white">
                    성함
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="성함을 입력해주세요."
                    {...form.register("name")}
                    aria-invalid={!!form.formState.errors.name}
                    aria-describedby="name-error"
                  />
                </div>

                {/* Phone Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-medium text-white">
                    전화번호
                  </label>
                  {/* Controlled input for phone with masking */}
                  <PhoneInput
                    id="phone"
                    value={form.watch("phone")}
                    onChange={(value) => form.setValue("phone", value)}
                    placeholder="010-0000-0000"
                    aria-invalid={!!form.formState.errors.phone}
                  />
                </div>

                {/* Submit Button */}
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

              {/* Checkbox & Privacy Agreement */}
              <div>
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
                    개인정보는 본사의 상담 용도 외에 다른 목적으로는 노출이 되지 않으며 별도의
                    계약이 이루어지지 않는다면 즉시 파기 됩니다.{" "}
                    <button
                      type="button"
                      className="cursor-pointer underline underline-offset-2"
                      onClick={() => setPolicyOpen(true)}
                    >
                      개인정보처리방침
                    </button>
                    을 참고 하시기 바랍니다.
                  </p>
                </div>
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
      <PrivacyPolicyPopup open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </footer>
  );
}
