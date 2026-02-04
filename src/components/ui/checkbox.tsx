"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex items-start gap-2 sm:items-center sm:gap-3">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={`mt-0.5 h-4 w-4 shrink-0 cursor-pointer border border-white bg-transparent sm:mt-0 ${className ?? ""}`}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="cursor-pointer font-medium font-sans text-white text-xs sm:text-sm"
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
