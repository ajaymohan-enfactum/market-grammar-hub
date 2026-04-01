import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";

export function UIComponentsSection() {
  return (
    <SectionWrapper id="ui-components">
      <SectionHeader
        title="UI Components"
        subtitle="Dense, information-rich components built for data-heavy B2B interfaces. Every component follows the same visual grammar."
      />

      {/* Button styles */}
      <Eyebrow className="mb-4">Button Hierarchy</Eyebrow>
      <div className="brand-card p-6 mb-10">
        <div className="flex items-center gap-4 mb-6">
          <button className="px-5 py-2.5 bg-brand-blue text-white text-[13px] font-semibold rounded-lg hover:bg-brand-blue-600 transition-all duration-200" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
            Primary Action
          </button>
          <button className="px-5 py-2.5 border border-border text-foreground text-[13px] font-medium rounded-lg hover:bg-elevated transition-all duration-200" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
            Secondary
          </button>
          <button className="px-5 py-2.5 text-primary text-[13px] font-medium hover:bg-elevated rounded-lg transition-all duration-200" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
            Ghost
          </button>
          <button className="px-5 py-2.5 text-destructive text-[13px] font-medium hover:bg-destructive/10 rounded-lg transition-all duration-200" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
            Destructive
          </button>
        </div>
        <p className="text-[12px] text-muted">
          Radius: 8px · Font: IBM Plex Sans 13px SemiBold · Min-height: 40px · Horizontal padding: 20px
        </p>
      </div>

      {/* Input fields */}
      <Eyebrow className="mb-4">Input Fields</Eyebrow>
      <div className="brand-card p-6 mb-10">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-[12px] font-medium text-foreground mb-1.5 block">Default Input</label>
            <div className="h-10 border border-border rounded-lg px-3 flex items-center text-[13px] text-muted transition-colors duration-200">
              Placeholder text...
            </div>
          </div>
          <div>
            <label className="text-[12px] font-medium text-foreground mb-1.5 block">Focused Input</label>
            <div className="h-10 border-2 border-primary rounded-lg px-3 flex items-center text-[13px] text-foreground">
              Active input
            </div>
          </div>
        </div>
        <p className="text-[12px] text-muted">
          Height: 40px · Border: 1px solid border-default · Focus: 2px solid Brand Blue · Radius: 8px
        </p>
      </div>

      {/* Cards */}
      <Eyebrow className="mb-4">Card Variants</Eyebrow>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="brand-card p-5">
          <Eyebrow className="mb-2">Default Card</Eyebrow>
          <p className="text-[13px] text-text-secondary">Standard surface card with subtle border. Used for content grouping.</p>
        </div>
        <div className="bg-elevated rounded-xl p-5 transition-colors duration-200">
          <Eyebrow className="mb-2">Elevated Card</Eyebrow>
          <p className="text-[13px] text-text-secondary">Elevated background for highlighted content or nested sections.</p>
        </div>
        <div className="border-l-2 border-primary bg-surface rounded-r-xl p-5">
          <Eyebrow className="mb-2">Accent Card</Eyebrow>
          <p className="text-[13px] text-text-secondary">Left border accent for important callouts and quotes.</p>
        </div>
      </div>

      {/* Badges */}
      <Eyebrow className="mb-4">Badges & Tags</Eyebrow>
      <div className="brand-card p-6">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-blue/15 text-brand-blue">Signal</span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-violet/15 text-brand-violet">Territory</span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-emerald/15 text-brand-emerald">Conversion</span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-amber/15 text-brand-amber">Market</span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-elevated text-muted">Neutral</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
