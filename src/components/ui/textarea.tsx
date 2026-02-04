import type * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={`h-40 resize-none border border-[#EEE] bg-[#2C2826] px-3.75 py-3 text-sm text-white placeholder:font-light placeholder:text-white ${className ?? ""}`}
      {...props}
    />
  );
}

export { Textarea };
