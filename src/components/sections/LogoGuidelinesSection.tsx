import { Download, Check, X } from "lucide-react";
import { SectionWrapper, SectionHeader } from "../SectionParts";
import { EnfactumLogo, SymbolMark } from "../EnfactumLogo";

export function LogoGuidelinesSection() {
  return (
    <SectionWrapper id="logo-guidelines">
      <SectionHeader
        title="Logo Guidelines"
        subtitle="The wordmark is the cornerstone of Enfactum's visual identity. Use it consistently to build recognition."
        action={
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-[13px] font-medium text-muted cursor-not-allowed opacity-60">
            <Download size={14} /> Download Logo
          </button>
        }
      />

      {/* Primary display */}
      <div className="mb-8 bg-brand-midnight rounded-lg flex items-center justify-center min-h-[200px]">
        <span className="font-bold text-[64px] tracking-tight">
          <span className="text-white">en</span>
          <span className="text-brand-blue">fact</span>
          <span className="text-white">um</span>
        </span>
      </div>
      <p className="text-[13px] text-muted mb-10">Primary wordmark — use on dark backgrounds</p>

      {/* Three variants */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-brand-midnight rounded-lg flex items-center justify-center h-[140px]">
          <span className="font-bold text-[32px] tracking-tight">
            <span className="text-white">en</span><span className="text-brand-blue">fact</span><span className="text-white">um</span>
          </span>
        </div>
        <div className="bg-elevated border border-border rounded-lg flex items-center justify-center h-[140px]">
          <EnfactumLogo size={32} />
        </div>
        <div className="bg-brand-midnight rounded-lg flex items-center justify-center h-[140px]">
          <SymbolMark size={40} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <p className="text-[12px] text-muted">Primary — Dark backgrounds</p>
        <p className="text-[12px] text-muted">Light — Document contexts</p>
        <p className="text-[12px] text-muted">Symbol — Favicons, tight spaces</p>
      </div>

      {/* Clear space */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Clear Space</h3>
        <div className="bg-surface border border-border rounded-lg p-8 flex items-center justify-center">
          <div className="border-2 border-dashed border-muted p-8 relative">
            <EnfactumLogo size={32} />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono-data text-muted">x</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono-data text-muted">x</span>
            <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-[10px] font-mono-data text-muted">x</span>
            <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-[10px] font-mono-data text-muted">x</span>
          </div>
        </div>
        <p className="text-[13px] text-muted mt-3">Always maintain minimum clearspace equal to the cap height of the 'e' in the wordmark.</p>
      </div>

      {/* Usage rules */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-brand-emerald mb-3 flex items-center gap-2">
            <Check size={14} /> Do
          </h4>
          <ul className="space-y-2">
            {[
              "Use the logo in its original proportions",
              "Maintain minimum clearspace at all times",
              "Use on approved backgrounds only (dark, white, light gray)",
              "Use the symbol mark when space is below 120px wide",
            ].map((r) => (
              <li key={r} className="flex items-start gap-2 text-[13px] text-text-secondary">
                <Check size={14} className="text-brand-emerald mt-0.5 shrink-0" /> {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-destructive mb-3 flex items-center gap-2">
            <X size={14} /> Don't
          </h4>
          <ul className="space-y-2">
            {[
              "Stretch, skew, or rotate the logo",
              "Apply drop shadows or effects",
              "Change the blue to any other color",
              "Use on busy photographic backgrounds",
              "Place 'fact' symbol standalone without context",
            ].map((r) => (
              <li key={r} className="flex items-start gap-2 text-[13px] text-text-secondary">
                <X size={14} className="text-destructive mt-0.5 shrink-0" /> {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
