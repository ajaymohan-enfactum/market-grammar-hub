import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { SectionWrapper, SectionHeader } from "../SectionParts";

interface SwatchProps {
  name: string;
  hex: string;
  usage: string;
}

function CopyHex({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="inline-flex items-center gap-1 text-[12px] font-mono-data text-muted hover:text-primary transition-colors cursor-pointer"
      title="Copy hex"
    >
      {hex}
      {copied ? <Check size={11} className="text-brand-emerald" /> : <Copy size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
    </button>
  );
}

function ColorSwatch({ name, hex, usage }: SwatchProps) {
  return (
    <div className="group bg-surface border border-border rounded-lg overflow-hidden">
      <div className="h-[120px]" style={{ backgroundColor: hex }} />
      <div className="p-3">
        <div className="text-[13px] font-semibold text-foreground">{name}</div>
        <CopyHex hex={hex} />
        <div className="text-[11px] text-text-secondary mt-1">{usage}</div>
      </div>
    </div>
  );
}

export function ColorSystemSection() {
  return (
    <SectionWrapper id="color-system">
      <SectionHeader
        title="Color System"
        subtitle="Our data-noir aesthetic requires absolute colour precision. Dark mode is ALWAYS the hero presentation. Gradients are strictly prohibited on backgrounds."
      />

      {/* Brand Blues */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Brand Blues</h3>
      <div className="grid grid-cols-5 gap-3 mb-10">
        <ColorSwatch name="Brand Blue" hex="#0057FF" usage="Primary accent, Buttons, Links" />
        <ColorSwatch name="Electric Blue" hex="#2979FF" usage="Highlights, Selected text" />
        <ColorSwatch name="Blue-600" hex="#0042CC" usage="Hover states, Active pressed" />
        <ColorSwatch name="Blue-700" hex="#002E99" usage="Deep accent, dark mode pressed" />
        <ColorSwatch name="Blue-900" hex="#000D33" usage="Darkest blue, rarely used" />
      </div>

      {/* Neutrals */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Neutrals</h3>
      <div className="grid grid-cols-7 gap-3 mb-10">
        <ColorSwatch name="Midnight" hex="#0A0F1E" usage="Primary dark bg" />
        <ColorSwatch name="Neutral-800" hex="#0D1020" usage="Code blocks" />
        <ColorSwatch name="Neutral-700" hex="#141829" usage="Secondary bg" />
        <ColorSwatch name="Neutral-600" hex="#252A47" usage="Elevated surface" />
        <ColorSwatch name="Neutral-400" hex="#6B7290" usage="Muted text" />
        <ColorSwatch name="Neutral-200" hex="#C8CDD9" usage="Secondary text" />
        <ColorSwatch name="Neutral-000" hex="#FFFFFF" usage="Primary text (dark)" />
      </div>

      {/* Capability Accents */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Capability Accents</h3>
      <p className="text-[13px] text-text-secondary mb-4">Used exclusively for icon containers, badges, and capability pillars. Never as background fills.</p>
      <div className="grid grid-cols-4 gap-3 mb-10">
        <ColorSwatch name="Signal Blue" hex="#0057FF" usage="Signal Intelligence pillar" />
        <ColorSwatch name="Territory Violet" hex="#7C3AED" usage="Territory Architecture pillar" />
        <ColorSwatch name="Conversion Emerald" hex="#059669" usage="Conversion Infrastructure pillar" />
        <ColorSwatch name="Market Amber" hex="#D97706" usage="Market Intelligence pillar" />
      </div>

      {/* Application Rules */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h4 className="text-[15px] font-semibold text-foreground mb-3">Application Rules</h4>
        <ul className="space-y-2">
          {[
            "Dark Mode is ALWAYS the hero presentation. Light Mode is for document contexts only.",
            "Never mix dark and light mode within a single surface.",
            "Never use gradients as primary backgrounds (accent glows only).",
            "Render capability accent colors at 15% opacity for backgrounds, solid for icons.",
            "Use 1px borders rgba(255,255,255,0.06) on all cards in dark mode.",
          ].map((rule) => (
            <li key={rule} className="text-[13px] text-text-secondary flex items-start gap-2">
              <span className="text-primary mt-1">•</span> {rule}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
