import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";

export function InteractionStatesSection() {
  return (
    <SectionWrapper id="interaction">
      <SectionHeader
        title="Interaction States"
        subtitle="Every interactive element has 5 defined states. Consistency across states builds the muscle memory that makes dense interfaces feel effortless."
      />

      {/* State definitions */}
      <Eyebrow className="mb-4">State Definitions</Eyebrow>
      <div className="brand-card overflow-hidden mb-10">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 font-semibold text-foreground">State</th>
              <th className="text-left p-3 font-semibold text-foreground">Visual Change</th>
              <th className="text-left p-3 font-semibold text-foreground">Transition</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Default", "Base styling, no elevation", "—"],
              ["Hover", "translateY(-2px), subtle shadow, cursor pointer", "200ms ease-out"],
              ["Active/Pressed", "translateY(0), darker bg (Blue-600)", "100ms"],
              ["Focused", "2px ring in Brand Blue, offset 2px", "Instant"],
              ["Disabled", "50% opacity, cursor not-allowed", "—"],
            ].map(([state, visual, transition]) => (
              <tr key={state} className="border-b border-border last:border-b-0">
                <td className="p-3 font-medium text-foreground">{state}</td>
                <td className="p-3 text-text-secondary">{visual}</td>
                <td className="p-3 font-mono-data text-muted">{transition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interactive demo */}
      <Eyebrow className="mb-4">Interactive Demo</Eyebrow>
      <div className="brand-card p-6 mb-10">
        <p className="text-[12px] text-muted mb-4">Hover and interact with these elements to see states in action</p>
        <div className="flex items-center gap-4">
          <button
            className="px-5 py-2.5 bg-brand-blue text-white text-[13px] font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:bg-brand-blue-600 focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            Primary Button
          </button>
          <div
            className="bg-elevated rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <div className="text-[13px] font-semibold text-foreground">Hover Card</div>
            <div className="text-[11px] text-muted mt-1">Interactive element</div>
          </div>
          <button className="px-5 py-2.5 bg-brand-blue text-white text-[13px] font-semibold rounded-lg opacity-50 cursor-not-allowed">
            Disabled
          </button>
        </div>
      </div>

      {/* Loading states */}
      <Eyebrow className="mb-4">Loading States</Eyebrow>
      <div className="grid grid-cols-3 gap-4">
        <div className="brand-card p-5">
          <div className="text-[13px] font-semibold text-foreground mb-2">Skeleton</div>
          <div className="space-y-2">
            <div className="h-4 bg-elevated rounded animate-pulse w-3/4" />
            <div className="h-4 bg-elevated rounded animate-pulse w-1/2" />
            <div className="h-4 bg-elevated rounded animate-pulse w-5/6" />
          </div>
          <p className="text-[11px] text-muted mt-3">Use for content-heavy areas</p>
        </div>
        <div className="brand-card p-5">
          <div className="text-[13px] font-semibold text-foreground mb-2">Spinner</div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 border-2 border-elevated border-t-primary rounded-full animate-spin" />
            <span className="text-[12px] text-muted">Loading...</span>
          </div>
          <p className="text-[11px] text-muted">Use for discrete actions</p>
        </div>
        <div className="brand-card p-5">
          <div className="text-[13px] font-semibold text-foreground mb-2">Progress</div>
          <div className="h-1.5 bg-elevated rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-primary rounded-full w-2/3 transition-all duration-500" />
          </div>
          <p className="text-[11px] text-muted">Use for determinate operations</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
