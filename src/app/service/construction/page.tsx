import ConstructionPropertyShowcase from "@/components/service/construction/construction-property-showcase";
import Hero from "@/components/service/construction/hero";
import ProcessSection from "@/components/service/construction/process-section";

export default function ConstructionPage() {
  return (
    <main>
      <Hero />
      <ProcessSection />
      <ConstructionPropertyShowcase />
    </main>
  );
}
