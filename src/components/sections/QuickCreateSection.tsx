import { useState, useMemo } from "react";
import { PenLine, Image, Layout, Code, Search, Copy, Check, ArrowRight } from "lucide-react";
import { SectionWrapper, Eyebrow } from "../SectionParts";

interface TaskCard {
  icon: React.ElementType;
  iconColor: string;
  title: string;
  tool: string;
  toolColor: string;
  subtitle: string;
  targetId: string;
}

const groups: { label: string; tasks: TaskCard[] }[] = [
  {
    label: "Marketing",
    tasks: [
      { icon: PenLine, iconColor: "text-primary", title: "Write a LinkedIn Post", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "Contrarian insight format", targetId: "prompts-copy" },
      { icon: PenLine, iconColor: "text-primary", title: "Write a Cold Email", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "Signal-first outreach", targetId: "prompts-copy" },
      { icon: Image, iconColor: "text-brand-violet", title: "Generate a Hero Image", tool: "Midjourney", toolColor: "bg-brand-violet/15 text-brand-violet", subtitle: "Brand-correct visual", targetId: "prompts-image" },
      { icon: PenLine, iconColor: "text-primary", title: "Write Website Copy", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "Hero + subhead + CTA", targetId: "prompts-copy" },
    ],
  },
  {
    label: "Sales",
    tasks: [
      { icon: PenLine, iconColor: "text-primary", title: "Write a Proposal Intro", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "Data-led positioning", targetId: "prompts-copy" },
      { icon: PenLine, iconColor: "text-primary", title: "Draft Objection Response", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "Signal-backed rebuttal", targetId: "prompts-copy" },
      { icon: PenLine, iconColor: "text-primary", title: "Write a Cold LinkedIn DM", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "Personalized outreach", targetId: "prompts-copy" },
      { icon: PenLine, iconColor: "text-primary", title: "Describe a Capability Pillar", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "Product feature framing", targetId: "prompts-copy" },
    ],
  },
  {
    label: "Design",
    tasks: [
      { icon: Layout, iconColor: "text-brand-emerald", title: "Build a UI Component", tool: "v0", toolColor: "bg-brand-emerald/15 text-brand-emerald", subtitle: "On-brand React component", targetId: "prompts-design" },
      { icon: Image, iconColor: "text-brand-violet", title: "Generate Deck Background", tool: "Midjourney", toolColor: "bg-brand-violet/15 text-brand-violet", subtitle: "Midnight geometric", targetId: "prompts-image" },
      { icon: Image, iconColor: "text-brand-violet", title: "Create a Social Graphic", tool: "Gemini", toolColor: "bg-primary/15 text-primary", subtitle: "Data-noir aesthetic", targetId: "prompts-image" },
      { icon: Image, iconColor: "text-brand-violet", title: "Generate Brand Imagery", tool: "Gemini", toolColor: "bg-primary/15 text-primary", subtitle: "Abstract geometric", targetId: "prompts-image" },
    ],
  },
  {
    label: "Engineering",
    tasks: [
      { icon: Code, iconColor: "text-brand-amber", title: "Build a Metric Card", tool: "v0", toolColor: "bg-brand-emerald/15 text-brand-emerald", subtitle: "KPI display component", targetId: "prompts-design" },
      { icon: Code, iconColor: "text-brand-amber", title: "Build a Data Table", tool: "v0", toolColor: "bg-brand-emerald/15 text-brand-emerald", subtitle: "Dense data grid", targetId: "prompts-design" },
      { icon: Code, iconColor: "text-brand-amber", title: "Build Dashboard Layout", tool: "Lovable", toolColor: "bg-brand-emerald/15 text-brand-emerald", subtitle: "Full-page layout", targetId: "prompts-design" },
      { icon: Code, iconColor: "text-brand-amber", title: "Generate Token Config", tool: "Claude", toolColor: "bg-primary/15 text-primary", subtitle: "CSS custom properties", targetId: "prompts-design" },
    ],
  },
];

const popular = [
  { title: "LinkedIn Contrarian Post", tool: "Claude", targetId: "prompts-copy" },
  { title: "Hero Background Image", tool: "Midjourney", targetId: "prompts-image" },
  { title: "Brand Compliance Check", tool: "Claude", targetId: "prompts-compliance" },
];

interface QuickCreateProps {
  onNavigate: (id: string) => void;
}

export function QuickCreateSection({ onNavigate }: QuickCreateProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return groups;
    const q = search.toLowerCase();
    return groups
      .map((g) => ({
        ...g,
        tasks: g.tasks.filter(
          (t) =>
            t.title.toLowerCase().includes(q) ||
            t.subtitle.toLowerCase().includes(q) ||
            t.tool.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.tasks.length > 0);
  }, [search]);

  return (
    <SectionWrapper id="quick-create">
      <div className="mb-10">
        <h1 className="text-[38px] font-bold leading-tight text-foreground">
          What do you want to <span className="text-primary">create</span>?
        </h1>
        <p className="mt-3 text-[16px] text-text-secondary leading-relaxed max-w-[720px]">
          Pick a task. Get the exact prompt. Produce on-brand work in 60 seconds.
        </p>
      </div>

      {/* Search */}
      <div className="mb-10">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search prompts — e.g. LinkedIn post, hero image, cold email..."
            className="w-full h-12 pl-11 pr-4 rounded-[10px] bg-card border-2 border-border text-[14px] text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors duration-200"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
        </div>
      </div>

      {/* Task grid */}
      {filtered.map((group) => (
        <div key={group.label} className="mb-8">
          <Eyebrow className="mb-3">{group.label}</Eyebrow>
          <div className="grid grid-cols-3 gap-3">
            {group.tasks.map((task) => (
              <button
                key={task.title}
                onClick={() => onNavigate(task.targetId)}
                className="brand-card p-5 text-left group cursor-pointer"
              >
                <task.icon size={24} className={`${task.iconColor} mb-3`} />
                <div className="text-[15px] font-semibold text-foreground mb-1.5">{task.title}</div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${task.toolColor}`}>
                    {task.tool}
                  </span>
                </div>
                <div className="text-[12px] text-muted">{task.subtitle}</div>
                <ArrowRight size={14} className="mt-2 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Popular */}
      <Eyebrow className="mb-3">Popular This Week</Eyebrow>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {popular.map((p) => (
          <button
            key={p.title}
            onClick={() => onNavigate(p.targetId)}
            className="shrink-0 brand-card px-4 py-3 flex items-center gap-3"
          >
            <div className="text-[13px] font-medium text-foreground">{p.title}</div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/15 text-primary">{p.tool}</span>
            <Copy size={14} className="text-muted" />
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
}
