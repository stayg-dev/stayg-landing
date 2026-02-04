import ReferenceSubheader from "@/components/reference/reference-sub-header";

export default function ReferenceLayout({ children }: LayoutProps<"/reference">) {
  return (
    <>
      <ReferenceSubheader />
      {children}
    </>
  );
}
