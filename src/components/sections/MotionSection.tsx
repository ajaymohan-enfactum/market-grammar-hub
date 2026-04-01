import { SectionWrapper, SectionHeader, CopyToken, Eyebrow } from "../SectionParts";

export function MotionSection() {
  return (
    <SectionWrapper id="motion">
      <SectionHeader
        title="Motion & Animation"
        subtitle="Precise deceleration only. No spring physics, no bounce. Everything moves with the confidence of a system that knows exactly where it's going."
      />

      {/* Easing curves */}
      <Eyebrow className="mb-4">Easing Curves</Eyebrow>
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { name: "Enter — Decelerate", curve: "cubic-bezier(0.0, 0.0, 0.2, 1.0)", desc: "Fast start, smooth landing. Elements entering screen.", anim: "animate-dot-decel" },
          { name: "Exit — Accelerate", curve: "cubic-bezier(0.4, 0.0, 1.0, 1.0)", desc: "Slow start, sharp departure. Elements leaving screen.", anim: "animate-dot-accel" },
          { name: "Standard", curve: "cubic-bezier(0.4, 0.0, 0.2, 1.0)", desc: "Balanced state changes within screen.", anim: "animate-dot-standard" },
        ].map((c) => (
          <div key={c.name} className="brand-card p-5">
            <div className="text-[13px] font-semibold text-foreground mb-1">{c.name}</div>
            <CopyToken value={c.curve} className="text-[11px] text-muted mb-3" />
            <div className="relative h-3 bg-elevated rounded-full mb-3">
              <div className={`absolute top-0.5 w-3 h-2 rounded-full bg-primary ${c.anim}`} />
            </div>
            <p className="text-[12px] text-text-secondary">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Duration scale */}
      <Eyebrow className="mb-4">Duration Scale</Eyebrow>
      <div className="brand-card overflow-hidden mb-10">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 font-semibold text-foreground">Token</th>
              <th className="text-left p-3 font-semibold text-foreground">Duration</th>
              <th className="text-left p-3 font-semibold text-foreground">Usage</th>
              <th className="text-left p-3 font-semibold text-foreground">Visual</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Instant", "0ms", "Toggles, boolean flags", 0],
              ["Fast", "100ms", "Microinteractions", 12],
              ["Base", "200ms", "Button hover, badges", 25],
              ["Medium", "300ms", "Card hover, panel open", 37],
              ["Slow", "500ms", "Page transitions, modal", 62],
              ["Cinematic", "800ms", "Hero reveals, data load", 100],
            ].map(([token, dur, usage, width]) => (
              <tr key={token as string} className="border-b border-border last:border-b-0">
                <td className="p-3 font-medium text-foreground">{token}</td>
                <td className="p-3"><CopyToken value={dur as string} className="text-[13px] text-muted" /></td>
                <td className="p-3 text-text-secondary">{usage}</td>
                <td className="p-3">
                  <div className="h-2 bg-primary rounded-full" style={{ width: `${width}%`, minWidth: width ? 4 : 0 }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Motion principles */}
      <Eyebrow className="mb-4">Motion Principles</Eyebrow>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Data Enters Sequentially", body: "Metrics stagger in at 40ms intervals. Never simultaneous." },
          { title: "Numbers Count Up", body: "Metric values animate from zero on first render. 300ms ease-out." },
          { title: "Glow is Alive", body: "Hover glows pulse at 2s interval. Never static." },
          { title: "Cards Lift", body: "hover: translateY(-2px) + elevated shadow. No bounce, no spring." },
        ].map((p) => (
          <div key={p.title} className="brand-card p-5">
            <div className="text-[13px] font-semibold text-foreground mb-1">{p.title}</div>
            <p className="text-[12px] text-text-secondary">{p.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
