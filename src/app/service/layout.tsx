import ServiceSubheader from "@/components/service/subheader";

export default function ServiceLayout({ children }: LayoutProps<"/service">) {
  return (
    <>
      <ServiceSubheader />
      {children}
    </>
  );
}
