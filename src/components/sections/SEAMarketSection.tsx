import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";

export function SEAMarketSection() {
  return (
    <SectionWrapper id="sea-market">
      <SectionHeader
        title="SEA Market Adaptation"
        subtitle="Southeast Asia isn't one market — it's 14. Each requires distinct linguistic, cultural, and visual adaptation."
      />

      {/* Market grid */}
      <Eyebrow className="mb-4">Priority Markets</Eyebrow>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {[
          { market: "Singapore", lang: "English, Mandarin, Malay, Tamil", note: "Primary HQ market. English-first with Mandarin for enterprise." },
          { market: "Indonesia", lang: "Bahasa Indonesia", note: "Largest market by volume. Never romanise — use full Bahasa." },
          { market: "Thailand", lang: "Thai", note: "Thai script required. IBM Plex has Thai weight equivalents." },
          { market: "Vietnam", lang: "Vietnamese", note: "Full diacritical fidelity required. Test all tonal marks." },
          { market: "Philippines", lang: "Filipino, English", note: "Bilingual market. English for enterprise, Filipino for SMB." },
          { market: "Malaysia", lang: "Malay, English, Mandarin", note: "Trilingual complexity. Bahasa Melayu distinct from Indonesian." },
        ].map((m) => (
          <div key={m.market} className="brand-card p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[15px] font-semibold text-foreground">{m.market}</span>
              <span className="font-mono-data text-[11px] text-muted">{m.lang}</span>
            </div>
            <p className="text-[13px] text-text-secondary">{m.note}</p>
          </div>
        ))}
      </div>

      {/* Adaptation rules */}
      <div className="brand-card p-6">
        <h4 className="text-[15px] font-semibold text-foreground mb-3">Localisation Rules</h4>
        <ul className="space-y-2">
          {[
            "Never romanise local scripts. Render Thai, Vietnamese, Bahasa in native script.",
            "Number formatting follows local convention (e.g., 1.000.000 for Indonesian).",
            "Date formats adapt per market (DD/MM/YYYY for most SEA markets).",
            "Currency symbols always precede amounts with no space.",
            "Right-to-left (RTL) support not required for current SEA markets.",
            "All UI strings must support variable-length text expansion (up to 40%).",
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
