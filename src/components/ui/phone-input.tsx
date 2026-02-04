"use client";

import { type ChangeEvent, forwardRef, type InputHTMLAttributes } from "react";

interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  value: string;
  onChange: (value: string) => void;
}

function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/\D/g, "");
  const limited = numbers.slice(0, 11);

  if (limited.length <= 3) {
    return limited;
  }
  if (limited.length <= 7) {
    return `${limited.slice(0, 3)}-${limited.slice(3)}`;
  }
  return `${limited.slice(0, 3)}-${limited.slice(3, 7)}-${limited.slice(7)}`;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, className, placeholder = "010-0000-0000", ...props }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhoneNumber(e.target.value);
      onChange(formatted);
    };

    return (
      <input
        ref={ref}
        type="tel"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`h-12 border border-[#EEE] bg-[#2C2826] px-3.75 text-sm text-white placeholder:font-light placeholder:text-white ${className ?? ""}`}
        {...props}
      />
    );
  },
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
