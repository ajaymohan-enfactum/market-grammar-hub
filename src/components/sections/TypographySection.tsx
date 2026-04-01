import { SectionWrapper, SectionHeader, CopyToken, Eyebrow } from "../SectionParts";
import { useTheme } from "../ThemeProvider";

export function TypographySection() {
  const { theme } = useTheme();
  const highlightColor = theme === "dark" ? "#2979FF" : "#0057FF";

  return (
    <SectionWrapper id="typography">
      <SectionHeader
        title="Typography"
        subtitle="Clear, dense, and precise. Built for multi-script complexity without romanising local languages."
      />

      {/* Typeface cards */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="brand-card p-6">
          <Eyebrow className="mb-4">Primary Typeface (Latin + CJK)</Eyebrow>
          <div className="text-[56px] font-bold text-foreground leading-none mb-4">IBM Plex Sans</div>
          <p className="text-[13px] text-text-secondary leading-relaxed">
            Our primary typeface for all digital and print products. Never romanise SEA script. Render Thai, Bahasa, Tagalog, Vietnamese at full fidelity in IBM Plex weight equivalents.
          </p>
        </div>
        <div className="brand-card p-6">
          <Eyebrow className="mb-4">Mono Typeface (Data, Code, Metrics Only)</Eyebrow>
          <div className="text-[48px] font-mono-data text-foreground leading-none mb-4">IBM Plex Mono</div>
          <p className="text-[13px] text-text-secondary leading-relaxed">
            Used strictly for numeric data, metrics, and code blocks. Never for body copy or headings.
          </p>
        </div>
      </div>

      {/* Type scale + highlighting */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div>
          <Eyebrow className="mb-4">Type Scale</Eyebrow>
          <div className="brand-card overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-semibold text-foreground">Scale</th>
                  <th className="text-left p-3 font-semibold text-foreground">Size / Weight</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Display-01", "72px / Bold"],
                  ["Display-02", "56px / Bold"],
                  ["Heading-01", "40px / Bold"],
                  ["Heading-02", "32px / SemiBold"],
                  ["Body-Large", "18px / Regular"],
                  ["Body", "16px / Regular"],
                  ["Mono-Data", "14px / Regular Mono"],
                ].map(([scale, spec]) => (
                  <tr key={scale} className="border-b border-border last:border-b-0">
                    <td className="p-3 font-medium text-foreground">{scale}</td>
                    <td className="p-3"><CopyToken value={spec as string} className="text-[13px] text-muted" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Eyebrow className="mb-4">Selective Word Highlighting</Eyebrow>
          <div className="brand-card p-5">
            <p className="text-[13px] text-text-secondary mb-5">
              Signature technique: In bold headlines, 1–2 key words are set in Electric Blue. Never more than 2 words per line. Never use underline, italic, or colour other than Electric Blue.
            </p>
            <div className="mb-4">
              <Eyebrow className="text-brand-emerald mb-2">✓ Correct</Eyebrow>
              <p className="text-[28px] font-bold text-foreground leading-tight">
                Where markets meet{" "}
                <span style={{ color: highlightColor }}>intelligence</span>.
              </p>
            </div>
            <div>
              <Eyebrow className="text-destructive mb-2">✗ Incorrect — Do not italicize</Eyebrow>
              <p className="text-[28px] font-bold text-foreground leading-tight">
                Where markets meet{" "}
                <span className="italic" style={{ color: highlightColor }}>intelligence</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IBM Plex Serif */}
      <div className="bg-brand-midnight rounded-xl p-10 text-center">
        <p className="font-serif-accent text-[24px] text-white leading-relaxed italic">
          "The grammar of Southeast Asian markets is not written in Western startup aesthetic."
        </p>
        <p className="mt-4 text-[13px] text-brand-neutral-400">— IBM Plex Serif / Accent Typeface</p>
        <p className="mt-2 text-[12px] text-brand-neutral-400">
          IBM Plex Serif adds structural elegance to quotes, testimonials, and specific editorial highlights.
        </p>
      </div>
    </SectionWrapper>
  );
}
