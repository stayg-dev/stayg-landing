import AboutStayG from "@/components/home/about-stay-g";
import BusinessConcerns from "@/components/home/business-concerns";
import GrowthCta from "@/components/home/growth-cta";
import Hero from "@/components/home/hero";
import IntroVideo from "@/components/home/intro-video";
import PropertyShowcase from "@/components/home/property-showcase";
import RevenueGrowth from "@/components/home/revenue-growth";

export default function Main() {
  return (
    <main>
      <Hero />
      <IntroVideo />
      <AboutStayG />
      <BusinessConcerns />
      <RevenueGrowth />
      <PropertyShowcase />
      <GrowthCta />
    </main>
  );
}
