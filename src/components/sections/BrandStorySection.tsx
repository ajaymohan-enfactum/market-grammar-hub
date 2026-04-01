import { Grid3x3, Target, MapPin } from "lucide-react";
import { SectionWrapper, SectionHeader } from "../SectionParts";

export function BrandStorySection() {
  return (
    <SectionWrapper id="brand-story">
      <SectionHeader
        title="Brand Story"
        subtitle="Enfactum exists because Southeast Asia's markets don't move like Western playbooks say they should."
      />

      {/* THE ORIGIN */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">The Origin</h3>
        <div className="border-l-2 border-primary bg-surface rounded-r-lg p-6">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            Most GTM tools were built for US enterprise markets — linear funnels, single-language outreach, predictable buyer cycles. Southeast Asia has none of that. 14 markets. 6 dominant languages. Compressed deal cycles. Buyers who do 90% of their research before talking to sales. Enfactum was built for this reality.
          </p>
        </div>
      </div>

      {/* THREE TRUTHS */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Three Truths</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              icon: Grid3x3,
              bg: "rgba(0,87,255,0.1)",
              color: "#0057FF",
              title: "Density is Clarity",
              body: "Information-rich layouts signal intelligence, not overwhelm. Whitespace is earned, not given. Every empty pixel must justify itself.",
            },
            {
              icon: Target,
              bg: "rgba(124,58,237,0.1)",
              color: "#7C3AED",
              title: "Precision is Trust",
              body: "Every pixel, weight, and token is deliberate. Craft communicates competence before words do. Inconsistency is the enemy of authority in B2B.",
            },
            {
              icon: MapPin,
              bg: "rgba(5,150,105,0.1)",
              color: "#059669",
              title: "Locality is Advantage",
              body: "SEA's multi-script modernity, urban density, and tropical data-noir are our aesthetic source code. No Western design reference applies.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-surface border border-border rounded-lg p-5">
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                style={{ backgroundColor: card.bg }}
              >
                <card.icon size={20} style={{ color: card.color }} />
              </div>
              <h4 className="text-[15px] font-semibold text-foreground mb-2">{card.title}</h4>
              <p className="text-[13px] leading-relaxed text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* POSITIONING */}
      <div className="bg-brand-midnight rounded-lg p-10 text-center">
        <p className="text-2xl font-bold text-white leading-relaxed">
          "The Bloomberg Terminal of SEA GTM.{" "}
          <span className="text-brand-electric">Dense. Precise. Locally fluent.</span>"
        </p>
      </div>
    </SectionWrapper>
  );
}
