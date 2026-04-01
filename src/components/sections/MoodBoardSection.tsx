import { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";
import { SectionWrapper, SectionHeader } from "../SectionParts";

import moodDeepArch from "@/assets/mood-deep-arch.jpg";
import moodSignalGrid from "@/assets/mood-signal-grid.jpg";
import moodGlassSteel from "@/assets/mood-glass-steel.jpg";
import moodUrbanDensity from "@/assets/mood-urban-density.jpg";
import moodMarketInfra from "@/assets/mood-market-infra.jpg";
import moodTerminalData from "@/assets/mood-terminal-data.jpg";
import moodGeometricPrecision from "@/assets/mood-geometric-precision.jpg";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="flex items-center gap-1.5 text-[12px] text-primary hover:text-highlight transition-colors"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied" : "Copy Prompt"}
    </button>
  );
}

const prompts = [
  {
    tab: "The Foundation (Data & Structure)",
    formula: "[Primary Object] + [Material] + [Lighting Constraint] + [Negative Constraints]",
    text: `A photorealistic macro shot of 3D geometric cubes arranged in a rigid, asymmetrical grid. The background is pure midnight blue (#0A0F1E) fading into black. The cubes are made of matte graphite and dark tinted glass. A single, sharp directional electric blue light (#2979FF) casts hard, defined shadows. Architectural rendering style, highly detailed. Exclude all people, gradients, soft lighting, glowing neon nodes, red colors, and organic shapes.`,
  },
  {
    tab: "The Pathway (Strategy & Flow)",
    formula: "[Intersecting Lines] + [Dark Void] + [Sharp Contrast] + [Minimalism]",
    text: `Abstract 3D structural lines and geometric pathways intersecting cleanly in a pitch-dark void. The primary colors are deep solid midnight blue and absolute black. Minimalist, brutalist design. Accents of sharp electric blue light hit the edges of the structures, casting hard shadows. Precise, mathematical, corporate minimalism. Exclude binary code, cybernetic themes, soft curves, people, and warm colors.`,
  },
  {
    tab: "The Monument (Scale & Authority)",
    formula: "[Brutalist Structure] + [Scale/Angle] + [Material] + [Cold Tone]",
    text: `A low-angle view of massive, minimalist brutalist architecture without any windows or human context. Intersecting solid concrete and dark steel planes. Deep, high-contrast shadows. The atmosphere is cold and corporate. A subtle, sharp electric blue reflection strikes a pane of dark glass. 8k resolution, highly realistic, structural focus. Exclude red tones, orange tones, natural landscapes, people, sky gradients, and soft watercolor effects.`,
  },
];

export function MoodBoardSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="mood-board">
      <SectionHeader
        title="Visual Mood Board"
        subtitle="The curated visual direction. Strict 3D geometric forms, abstract architectural details, solid colors over gradients, zero human subjects."
      />

      {/* Masonry grid */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {[
          { label: "Deep Architecture", h: "h-[200px]", img: moodDeepArch },
          { label: "Signal Grid", h: "h-[280px]", img: moodSignalGrid },
          { label: "Glass & Steel", h: "h-[160px]", img: moodGlassSteel },
          { label: "Urban Density", h: "h-[240px]", img: moodUrbanDensity },
          { label: "Market Infrastructure", h: "h-[180px]", img: moodMarketInfra },
          { label: "Terminal Data", h: "h-[260px]", img: moodTerminalData },
          { label: "Geometric Precision", h: "h-[200px]", img: moodGeometricPrecision },
        ].map((item) => (
          <div key={item.label} className={`rounded-lg ${item.h} relative overflow-hidden flex items-end`}>
            <img src={item.img} alt={item.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <span className="relative z-10 text-[10px] text-white/80 p-3 bg-gradient-to-t from-black/60 to-transparent w-full">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Rules table */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Photography & Imagery Rules</h3>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-brand-emerald mb-3">Do Include</div>
          <ul className="space-y-2 text-[13px] text-text-secondary">
            <li>• Strict 3D geometric objects (cubes, spheres, sharp edges)</li>
            <li>• Abstract, minimalist architecture or macro material details</li>
            <li>• High-contrast shadows, pure black/midnight tones</li>
            <li>• Electric blue as accent or focal light source</li>
          </ul>
        </div>
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-destructive mb-3">Do Not Include</div>
          <ul className="space-y-2 text-[13px] text-text-secondary">
            <li>• Red or warm colors (orange, bright yellow)</li>
            <li>• People, faces, or hands in any capacity</li>
            <li>• Soft gradients or blended watercolor effects</li>
            <li>• Generic "technology" metaphors (floating nodes, glowing binary code)</li>
          </ul>
        </div>
      </div>

      {/* Gemini prompts */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-2 flex items-center gap-2">
          <Sparkles size={14} className="text-primary" /> Gemini Prompt Frameworks
        </h3>
        <p className="text-[13px] text-text-secondary mb-4">
          Because Enfactum's visual identity relies on strict abstract geometry and pure dark tones, generative AI models will naturally add unwanted 'friendly' elements. Use these engineered prompt formulas to force the model into our exact structural aesthetic.
        </p>

        <div className="flex gap-2 mb-3">
          {prompts.map((p, i) => (
            <button
              key={p.tab}
              onClick={() => setActiveTab(i)}
              className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors ${
                activeTab === i ? "bg-primary text-primary-foreground" : "bg-elevated text-text-secondary hover:text-foreground"
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono-data text-muted">{prompts[activeTab].formula}</span>
            <CopyButton text={prompts[activeTab].text} />
          </div>
          <pre className="font-mono-data text-[12px] text-text-secondary leading-relaxed whitespace-pre-wrap">
            {prompts[activeTab].text}
          </pre>
        </div>
      </div>

      {/* Negative prompt */}
      <div className="bg-brand-neutral-800 rounded-lg p-5">
        <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-brand-neutral-400 mb-2">Negative Prompt Cheat Sheet</div>
        <pre className="font-mono-data text-[12px] text-brand-neutral-200 leading-relaxed whitespace-pre-wrap">
          Exclude: people, human subjects, faces, hands, red, orange, warm colors, soft gradients, watercolor effects, glowing neon nodes, floating particles, binary code, cybernetic themes, friendly corporate art.
        </pre>
      </div>
    </SectionWrapper>
  );
}
