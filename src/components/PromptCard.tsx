import { useState } from "react";
import { Copy, Check } from "lucide-react";

export type ToolType = "Claude" | "Midjourney" | "v0" | "Gamma" | "ChatGPT" | "Gemini" | "Ideogram" | "Flux" | "DALL-E" | "Lovable" | "Canva";

const toolColors: Record<ToolType, { bg: string; text: string }> = {
  Claude: { bg: "bg-primary/15", text: "text-primary" },
  Midjourney: { bg: "bg-brand-violet/15", text: "text-brand-violet" },
  v0: { bg: "bg-brand-emerald/15", text: "text-brand-emerald" },
  Lovable: { bg: "bg-brand-emerald/15", text: "text-brand-emerald" },
  Gamma: { bg: "bg-brand-amber/15", text: "text-brand-amber" },
  ChatGPT: { bg: "bg-elevated", text: "text-muted" },
  Gemini: { bg: "bg-primary/15", text: "text-primary" },
  Ideogram: { bg: "bg-brand-violet/15", text: "text-brand-violet" },
  Flux: { bg: "bg-brand-amber/15", text: "text-brand-amber" },
  "DALL-E": { bg: "bg-brand-emerald/15", text: "text-brand-emerald" },
  Canva: { bg: "bg-brand-amber/15", text: "text-brand-amber" },
};

function highlightVariables(text: string) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={i} className="px-1 py-0.5 rounded bg-primary/10 text-primary font-semibold">
          {part}
        </span>
      );
    }
    return part;
  });
}

interface PromptCardProps {
  tool: ToolType | ToolType[];
  title: string;
  whenToUse: string;
  prompt: string;
  id?: string;
}

export function PromptCard({ tool, title, whenToUse, prompt, id }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const tools = Array.isArray(tool) ? tool : [tool];

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id={id} className="bg-card border border-border rounded-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          {tools.map((t) => (
            <span key={t} className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${toolColors[t]?.bg || "bg-elevated"} ${toolColors[t]?.text || "text-muted"}`}>
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md border text-[12px] font-medium transition-all duration-200 ${
            copied
              ? "border-brand-emerald text-brand-emerald bg-brand-emerald/10"
              : "border-border text-muted hover:text-foreground hover:border-foreground/20"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied ✓" : "Copy Prompt"}
        </button>
      </div>

      {/* Body */}
      <div className="px-4 py-4">
        <h4 className="text-[14px] font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-[12px] text-muted italic mb-3">{whenToUse}</p>
        <div className="border-t border-border pt-3">
          <pre className="font-mono-data text-[12px] text-text-secondary leading-[1.7] whitespace-pre-wrap">
            {highlightVariables(prompt)}
          </pre>
        </div>
      </div>
    </div>
  );
}
