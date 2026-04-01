import { SectionWrapper, SectionHeader } from "../SectionParts";

export function LinkedInSection() {
  return (
    <SectionWrapper id="linkedin">
      <SectionHeader
        title="LinkedIn Playbook"
        subtitle="LinkedIn is our primary channel for thought leadership and pipeline generation. Every post must earn attention through data density and local insight."
      />

      <div className="grid grid-cols-2 gap-4 mb-10">
        {[
          { title: "Post Structure", body: "Hook (1 line, data-led) → Context (2-3 lines) → Insight (1 line, bold) → CTA (question or link). Max 1,300 characters." },
          { title: "Visual Format", body: "Dark mode card graphics preferred. IBM Plex Sans Bold headlines. Metric callouts in IBM Plex Mono. Brand Blue accents only." },
          { title: "Frequency", body: "Minimum 3x/week from company page. Founder posts 2x/week. Employee amplification encouraged with pre-approved hooks." },
          { title: "Hashtag Strategy", body: "Max 3 hashtags. Always include #SEAmarket or #GTMstrategy. Never use generic tags like #innovation or #leadership." },
        ].map((p) => (
          <div key={p.title} className="bg-surface border border-border rounded-lg p-5">
            <div className="text-[13px] font-semibold text-foreground mb-2">{p.title}</div>
            <p className="text-[13px] text-text-secondary leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Post Templates</h3>
      <div className="space-y-4">
        {[
          { type: "Data Hook", example: "14 markets. 6 languages. 200ms processing. Here's what most GTM platforms get wrong about Southeast Asia →" },
          { type: "Contrarian Take", example: "\"Best practices\" in SEA GTM are usually worst practices imported from US playbooks. Here's what actually works:" },
          { type: "Case Insight", example: "We analyzed 2,400 deal cycles across ASEAN. The #1 predictor of close rate wasn't price — it was signal density." },
        ].map((t) => (
          <div key={t.type} className="bg-surface border border-border rounded-lg p-5">
            <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-primary mb-2">{t.type}</div>
            <p className="text-[14px] text-foreground leading-relaxed">{t.example}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
