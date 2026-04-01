import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";

export function PPTTemplatesSection() {
  return (
    <SectionWrapper id="ppt-templates">
      <SectionHeader
        title="PPT Templates"
        subtitle="Presentation decks follow the same data-noir aesthetic. Dark mode is the default. Every slide earns its place with density and precision."
      />

      {/* Slide types */}
      <Eyebrow className="mb-4">Slide Templates</Eyebrow>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {[
          { type: "Title Slide", desc: "Centered wordmark, subtitle in Body-Large, dark midnight background. Minimal." },
          { type: "Data Slide", desc: "Full-width chart with metrics in IBM Plex Mono. Max 3 KPIs per slide." },
          { type: "Content Slide", desc: "Left-aligned headline with Blue highlight word. Right column for supporting visual." },
          { type: "Comparison Slide", desc: "Two-column layout with clear divider. Before/after or competitor comparison." },
          { type: "Quote Slide", desc: "IBM Plex Serif pull quote, centered. Attribution below. Minimal background." },
          { type: "Closing Slide", desc: "Wordmark, CTA, and contact info. Same structure as title slide." },
        ].map((s) => (
          <div key={s.type} className="bg-brand-midnight rounded-xl p-6 h-[160px] flex flex-col justify-between">
            <Eyebrow className="text-brand-neutral-400">{s.type}</Eyebrow>
            <p className="text-[12px] text-brand-neutral-200 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Rules */}
      <div className="brand-card p-6">
        <h4 className="text-[15px] font-semibold text-foreground mb-3">Presentation Rules</h4>
        <ul className="space-y-2">
          {[
            "16:9 aspect ratio only. Never 4:3.",
            "Dark backgrounds (#0A0F1E) for all external-facing decks.",
            "Light backgrounds for internal documents and printed handouts.",
            "Maximum 6 lines of text per slide. If more, split into two slides.",
            "Every data claim must have a source footnote in 10px IBM Plex Sans Light.",
            "Animations: fade-in only. No fly-ins, bounces, or transitions between slides.",
          ].map((r) => (
            <li key={r} className="text-[13px] text-text-secondary flex items-start gap-2">
              <span className="text-primary mt-1">•</span> {r}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
