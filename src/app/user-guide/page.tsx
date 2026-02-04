import FaqAccordion from "@/components/user-guide/faq-accordion";
import Hero from "@/components/user-guide/hero";
import ServiceGuidelines from "@/components/user-guide/service-guidelines";
import ServiceProcessSteps from "@/components/user-guide/service-process-steps";

export default function UserGuide() {
  return (
    <main>
      <Hero />
      <ServiceProcessSteps />
      <ServiceGuidelines />
      <FaqAccordion />
    </main>
  );
}
