import type * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={`h-12 border border-[#EEE] bg-[#2C2826] px-3.75 text-sm text-white placeholder:font-light placeholder:text-white ${className ?? ""}`}
      {...props}
    />
  );
}

export { Input };
