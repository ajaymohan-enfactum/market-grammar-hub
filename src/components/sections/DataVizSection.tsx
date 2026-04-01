import { SectionWrapper, SectionHeader } from "../SectionParts";

export function DataVizSection() {
  return (
    <SectionWrapper id="data-viz">
      <SectionHeader
        title="Data Visualization"
        subtitle="Charts and data displays follow the same data-noir aesthetic. Dark mode is always the hero. Numbers use IBM Plex Mono."
      />

      {/* Color mapping */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Chart Color Mapping</h3>
      <div className="bg-surface border border-border rounded-lg p-6 mb-10">
        <div className="flex items-center gap-6">
          {[
            { color: "#0057FF", label: "Primary Series" },
            { color: "#2979FF", label: "Secondary Series" },
            { color: "#7C3AED", label: "Tertiary Series" },
            { color: "#059669", label: "Positive/Growth" },
            { color: "#D97706", label: "Warning/Caution" },
            { color: "#6B7290", label: "Baseline/Muted" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
              <span className="text-[11px] text-text-secondary">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart placeholder */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Chart Examples</h3>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-brand-midnight rounded-lg p-6 h-[240px] flex flex-col">
          <div className="text-[11px] text-brand-neutral-400 mb-2">Bar Chart — Signal Volume</div>
          <div className="flex-1 flex items-end gap-2 pb-4">
            {[40, 65, 35, 80, 55, 70, 45, 90, 60, 75, 50, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 7 ? "#0057FF" : "#252A47" }} />
            ))}
          </div>
          <div className="flex justify-between text-[9px] font-mono-data text-brand-neutral-400">
            <span>Jan</span><span>Jun</span><span>Dec</span>
          </div>
        </div>
        <div className="bg-brand-midnight rounded-lg p-6 h-[240px] flex flex-col justify-center items-center">
          <div className="text-[11px] text-brand-neutral-400 mb-4 self-start">KPI Card — Metric Display</div>
          <div className="text-center">
            <div className="font-mono-data text-[48px] font-semibold text-white">2,847</div>
            <div className="text-[12px] text-brand-neutral-400 mt-1">Active Signals</div>
            <div className="text-[12px] text-brand-emerald mt-2 font-mono-data">↑ 12.4%</div>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h4 className="text-[15px] font-semibold text-foreground mb-3">Visualization Rules</h4>
        <ul className="space-y-2">
          {[
            "All numeric values rendered in IBM Plex Mono",
            "Dark backgrounds (#0A0F1E) for all chart containers in hero context",
            "Brand Blue (#0057FF) for primary data series, never red for negative values — use muted gray",
            "Grid lines at 8% opacity maximum",
            "Axis labels in IBM Plex Sans 11px, Neutral-400 color",
            "Animate data entry with 40ms stagger between elements",
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
