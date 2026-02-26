"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLocale } from "@/components/providers/locale-provider";
import { sendMail } from "@/lib/send-mail";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { PrivacyPolicyPopup } from "../ui/privacy-policy-popup";

function getFooterInquiryCopy(locale: "ko" | "en") {
  if (locale === "en") {
    return {
      titleDesktop: ["Contact Us", "24/7"],
      titleMobile: "Contact Us 24/7",
      nameLabel: "Full Name",
      namePlaceholder: "Please enter your name.",
      phoneLabel: "Phone Number",
      phonePlaceholder: "010-0000-0000",
      emailLabel: "Email Address",
      emailPlaceholder: "Please enter your email.",
      submitLabel: "Submit Online",
      submittingLabel: "Submitting...",
      agreedLabel: "I agree to the collection and use of personal information.",
      privacyDetail:
        "Your information will be used solely for consultation purposes and will be destroyed immediately if no contract is concluded.",
      privacyLink: "Privacy Policy",
      privacySuffix: "for more details.",
      successMessage: "Your inquiry has been submitted successfully.",
      defaultErrorMessage: "Failed to send your inquiry email.",
      nameRequired: "Please enter your name.",
      phoneInvalid: "Phone number must start with 01 and contain 10 or 11 digits.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please enter a valid email address.",
      agreedRequired: "Please agree to the collection and use of personal information.",
    };
  }

  return {
    titleDesktop: ["24시간", "문의"],
    titleMobile: "24시간 문의",
    nameLabel: "성함",
    namePlaceholder: "성함을 입력해 주세요.",
    phoneLabel: "전화번호",
    phonePlaceholder: "010-0000-0000",
    emailLabel: "이메일",
    emailPlaceholder: "이메일을 입력해 주세요.",
    submitLabel: "온라인 문의 제출하기",
    submittingLabel: "전송 중...",
    agreedLabel: "개인정보 수집 및 이용에 동의합니다.",
    privacyDetail:
      "개인정보는 본사의 상담 용도 외 다른 목적으로 사용되지 않으며, 별도의 계약이 이루어지지 않으면 즉시 폐기됩니다.",
    privacyLink: "개인정보처리방침",
    privacySuffix: "을 참고해 주세요.",
    successMessage: "문의가 성공적으로 전송되었습니다.",
    defaultErrorMessage: "메일 전송에 실패했습니다.",
    nameRequired: "성함을 입력해 주세요.",
    phoneInvalid: "전화번호는 01로 시작하고 10자리 또는 11자리 숫자여야 합니다.",
    emailRequired: "이메일을 입력해 주세요.",
    emailInvalid: "올바른 이메일 형식으로 입력해 주세요.",
    agreedRequired: "개인정보 수집 및 이용에 동의해 주세요.",
  };
}

type FormSchemaType = {
  name: string;
  phone: string;
  email: string;
  agreed: boolean;
};

export default function FooterInquiry() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const copy = getFooterInquiryCopy(locale);

  const [policyOpen, setPolicyOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().trim().nonempty(copy.nameRequired),
        phone: z
          .string()
          .transform((val) => val.replace(/-/g, ""))
          .refine((val) => /^01\d{8,9}$/.test(val), {
            message: copy.phoneInvalid,
          }),
        email: z.string().trim().nonempty(copy.emailRequired).email(copy.emailInvalid),
        agreed: z.boolean().refine((val) => val === true, {
          message: copy.agreedRequired,
        }),
      }),
    [copy],
  );

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      agreed: false,
    },
  });

  const { formState } = form;
  const { isDirty, isValid, isSubmitting } = formState;

  const onSubmit = async (data: FormSchemaType) => {
    setSubmitStatus(null);
    setErrorMessage("");

    const result = await sendMail({ name: data.name, contact: data.phone, email: data.email });

    if (result.success) {
      setSubmitStatus("success");
      window.umami?.track("form_submit", {
        form: "footer_contact",
        page: pathname,
      });
      form.reset();
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || copy.defaultErrorMessage);
    }
  };

  return (
    <div className="bg-stone-700 py-10 md:py-16 lg:py-13">
      <div className="mx-auto max-w-7xl px-2.5 md:px-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-15">
          <div className="shrink-0 text-left">
            <h2 className="font-medium text-3xl text-[#BBBBBC] lg:text-[32px]">
              <span className="hidden lg:block">
                {copy.titleDesktop[0]}
                <br />
                {copy.titleDesktop[1]}
              </span>
              <span className="block lg:hidden">{copy.titleMobile}</span>
            </h2>
          </div>

          <div className="w-full flex-1">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="footer-name" className="font-medium text-white">
                    {copy.nameLabel}
                  </label>
                  <Input
                    id="footer-name"
                    type="text"
                    placeholder={copy.namePlaceholder}
                    {...form.register("name")}
                    aria-invalid={!!form.formState.errors.name}
                    aria-describedby="footer-name-error"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="footer-phone" className="font-medium text-white">
                    {copy.phoneLabel}
                  </label>
                  <PhoneInput
                    id="footer-phone"
                    value={form.watch("phone")}
                    onChange={(value) => form.setValue("phone", value)}
                    placeholder={copy.phonePlaceholder}
                    aria-invalid={!!form.formState.errors.phone}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="footer-email" className="font-medium text-white">
                    {copy.emailLabel}
                  </label>
                  <Input
                    id="footer-email"
                    type="email"
                    placeholder={copy.emailPlaceholder}
                    {...form.register("email")}
                    aria-invalid={!!form.formState.errors.email}
                    aria-describedby="footer-email-error"
                  />
                </div>

                <div className="flex items-end sm:col-span-2 lg:col-span-1">
                  <button
                    type="submit"
                    className="h-12 w-full cursor-pointer bg-white px-4 font-bold text-black text-sm transition-opacity disabled:cursor-not-allowed lg:w-45"
                    disabled={!(isDirty && isValid) || isSubmitting}
                  >
                    {isSubmitting ? copy.submittingLabel : `${copy.submitLabel}`}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3">
                <Checkbox
                  id="footer-agreed"
                  label={copy.agreedLabel}
                  error={!!form.formState.errors.agreed}
                  {...form.register("agreed")}
                  aria-invalid={!!form.formState.errors.agreed}
                  aria-describedby="footer-agreed-error"
                />

                <p className="font-light text-white text-xs">
                  {copy.privacyDetail}{" "}
                  <button
                    type="button"
                    className="cursor-pointer underline underline-offset-2"
                    onClick={() => setPolicyOpen(true)}
                  >
                    {copy.privacyLink}
                  </button>{" "}
                  {copy.privacySuffix}
                </p>
              </div>
            </form>

            {submitStatus === "success" && (
              <p className="mt-3 text-green-400 text-sm">{copy.successMessage}</p>
            )}
            {submitStatus === "error" && (
              <p className="mt-3 text-red-400 text-sm">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>

      <PrivacyPolicyPopup open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </div>
  );
}
