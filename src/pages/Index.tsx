import { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BrandSidebar } from "@/components/BrandSidebar";
import { navSections } from "@/components/navData";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { LogoGuidelinesSection } from "@/components/sections/LogoGuidelinesSection";
import { ColorSystemSection } from "@/components/sections/ColorSystemSection";
import { TypographySection } from "@/components/sections/TypographySection";
import { VisualStyleSection } from "@/components/sections/VisualStyleSection";
import { MoodBoardSection } from "@/components/sections/MoodBoardSection";
import { MotionSection } from "@/components/sections/MotionSection";
import { VoiceToneSection } from "@/components/sections/VoiceToneSection";
import { LinkedInSection } from "@/components/sections/LinkedInSection";
import { UIComponentsSection } from "@/components/sections/UIComponentsSection";
import { DataVizSection } from "@/components/sections/DataVizSection";
import { InteractionStatesSection } from "@/components/sections/InteractionStatesSection";
import { SEAMarketSection } from "@/components/sections/SEAMarketSection";
import { PPTTemplatesSection } from "@/components/sections/PPTTemplatesSection";

const allIds = navSections.flatMap((s) => s.items.map((i) => i.id));

function BrandBookContent() {
  const [activeSection, setActiveSection] = useState(allIds[0]);

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick the one closest to top
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-64px 0px -60% 0px", threshold: 0 }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BrandSidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="ml-60">
        <div className="max-w-[900px] px-[72px] pt-16 pb-24">
          <BrandStorySection />
          <LogoGuidelinesSection />
          <ColorSystemSection />
          <TypographySection />
          <VisualStyleSection />
          <MoodBoardSection />
          <MotionSection />
          <VoiceToneSection />
          <LinkedInSection />
          <UIComponentsSection />
          <DataVizSection />
          <InteractionStatesSection />
          <SEAMarketSection />
          <PPTTemplatesSection />
        </div>
      </main>
    </div>
  );
}

export default function Index() {
  return (
    <ThemeProvider>
      <BrandBookContent />
    </ThemeProvider>
  );
}
