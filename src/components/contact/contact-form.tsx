"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendMail } from "@/lib/send-mail";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { PrivacyPolicyPopup } from "../ui/privacy-policy-popup";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().nonempty(""),
  phone: z
    .string()
    .transform((val) => val.replace(/-/g, ""))
    .refine((val) => /^01\d{8,9}$/.test(val), {
      message: "전화번호는 01로 시작하고 10자리 또는 11자리 숫자여야 합니다.",
    }),
  email: z
    .string()
    .trim()
    .nonempty("이메일을 입력해주세요.")
    .email("올바른 이메일 형식으로 입력해주세요."),
  message: z.string().optional(),
  agreed: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [policyOpen, setPolicyOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      agreed: false,
    },
  });

  const { formState } = form;
  const { isDirty, isValid, isSubmitting } = formState;

  const onSubmit = async (data: FormSchemaType) => {
    setSubmitStatus(null);
    setErrorMessage("");

    const result = await sendMail({
      name: data.name,
      contact: data.phone,
      email: data.email,
      inquiry: data.message || undefined,
    });

    if (result.success) {
      setSubmitStatus("success");
      window.umami?.track("form_submit", {
        form: "contact_page",
      });
      form.reset();
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || "메일 전송에 실패했습니다.");
    }
  };

  return (
    <section className="w-full bg-stone-700 py-10 pb-30 lg:pt-15">
      <div className="mx-auto max-w-7xl px-2.5 md:px-9">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8.75">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="font-medium text-sm text-white">
              성함 <span className="text-primary text-xs">*</span>
            </label>
            <Input
              id="contact-name"
              type="text"
              placeholder="성함을 입력해주세요."
              {...form.register("name")}
              aria-invalid={!!form.formState.errors.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-phone" className="font-medium text-sm text-white">
              전화번호 <span className="text-primary text-xs">*</span>
            </label>
            <PhoneInput
              id="contact-phone"
              value={form.watch("phone")}
              onChange={(value) => form.setValue("phone", value)}
              placeholder="010-0000-0000"
              aria-invalid={!!form.formState.errors.phone}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="font-medium text-sm text-white">
              이메일 <span className="text-primary text-xs">*</span>
            </label>
            <Input
              id="contact-email"
              type="email"
              placeholder="이메일을 입력해주세요."
              {...form.register("email")}
              aria-invalid={!!form.formState.errors.email}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="font-medium text-sm text-white">
              문의 내용
            </label>
            <Textarea
              id="contact-message"
              placeholder="문의 내용을 입력해주세요."
              {...form.register("message")}
            />
          </div>

          <div className="flex flex-col gap-2 sm:gap-3">
            <Checkbox
              id="contact-agreed"
              label="[필수] 개인정보 수집 및 이용에 동의합니다."
              error={!!form.formState.errors.agreed}
              {...form.register("agreed")}
              aria-invalid={!!form.formState.errors.agreed}
            />
            <p className="font-light text-white text-xs">
              개인정보는 본사의 상담 용도 외에 다른 목적으로는 노출이 되지 않으며 별도의 계약이
              이루어지지 않는다면 즉시 파기 됩니다.{" "}
              <button
                type="button"
                className="cursor-pointer underline underline-offset-2"
                onClick={() => setPolicyOpen(true)}
              >
                개인정보처리방침
              </button>
              을 참고하시기 바랍니다.
            </p>
          </div>

          <button
            type="submit"
            className="h-12 w-full cursor-pointer bg-white font-bold text-black text-sm transition-opacity disabled:cursor-not-allowed"
            disabled={!(isDirty && isValid) || isSubmitting}
          >
            {isSubmitting ? "전송 중.." : "온라인 문의 제출하기"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-400 text-sm">문의가 성공적으로 전송되었습니다.</p>
          )}
          {submitStatus === "error" && <p className="text-red-400 text-sm">{errorMessage}</p>}
        </form>
      </div>

      <PrivacyPolicyPopup open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </section>
  );
}
