import UnmannedOtaSubheader from "@/components/unmanned-ota/subheader";

export default function UnmannedOtaLayout({ children }: LayoutProps<"/unmanned-ota">) {
  return (
    <>
      <UnmannedOtaSubheader />
      {children}
    </>
  );
}
