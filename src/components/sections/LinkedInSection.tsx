import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";

function LinkedInPostMockup() {
  return (
    <div className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden shadow-sm max-w-[480px]">
      {/* Header */}
      <div className="p-4 flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-[#0057FF] flex items-center justify-center text-white text-[14px] font-bold shrink-0">
          EN
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-bold text-[#000000]">Enfactum</div>
          <div className="text-[12px] text-[#666666] leading-snug">Marketing & Growth Consultancy · Southeast Asia</div>
          <div className="text-[12px] text-[#666666]">2h · 🌐</div>
        </div>
      </div>

      {/* Post body */}
      <div className="px-4 pb-3">
        <p className="text-[14px] text-[#000000] leading-[1.5]">
          14 markets. 6 languages. 200ms processing.
          <br /><br />
          Here's what most GTM platforms get wrong about Southeast Asia →
          <br /><br />
          They apply US enterprise playbooks to a region where buyers do 90% of their research before talking to sales. Where deal cycles are compressed. Where a single "Asia-Pacific" strategy means you've already lost.
          <br /><br />
          <span className="font-semibold">Signal density beats brand awareness in SEA.</span>
          <br /><br />
          What's your biggest challenge scaling GTM in the region?
        </p>
        <div className="mt-2 text-[14px] text-[#0a66c2] font-medium">
          #SEAmarket #GTMstrategy #B2BSaaS
        </div>
      </div>

      {/* Engagement bar */}
      <div className="px-4 py-2 border-t border-[#e0e0e0] flex items-center gap-1 text-[12px] text-[#666666]">
        <span>👍</span> <span>42 likes</span>
        <span className="mx-auto" />
        <span>8 comments</span>
        <span className="mx-2">·</span>
        <span>3 reposts</span>
      </div>

      {/* Action buttons */}
      <div className="px-2 py-1 border-t border-[#e0e0e0] flex">
        {[
          { icon: ThumbsUp, label: "Like" },
          { icon: MessageCircle, label: "Comment" },
          { icon: Share2, label: "Share" },
        ].map(({ icon: Icon, label }) => (
          <button key={label} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[13px] font-semibold text-[#666666] hover:bg-[#f5f5f5] rounded-md transition-colors duration-150">
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

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
          <div key={p.title} className="brand-card p-5">
            <div className="text-[13px] font-semibold text-foreground mb-2">{p.title}</div>
            <p className="text-[13px] text-text-secondary leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      {/* LinkedIn Post Preview */}
      <Eyebrow className="mb-4">Post Preview</Eyebrow>
      <div className="mb-10 flex justify-center">
        <LinkedInPostMockup />
      </div>

      <Eyebrow className="mb-4">Post Templates</Eyebrow>
      <div className="space-y-4">
        {[
          { type: "Data Hook", example: "14 markets. 6 languages. 200ms processing. Here's what most GTM platforms get wrong about Southeast Asia →" },
          { type: "Contrarian Take", example: "\"Best practices\" in SEA GTM are usually worst practices imported from US playbooks. Here's what actually works:" },
          { type: "Case Insight", example: "We analyzed 2,400 deal cycles across ASEAN. The #1 predictor of close rate wasn't price — it was signal density." },
        ].map((t) => (
          <div key={t.type} className="brand-card p-5">
            <Eyebrow className="text-primary mb-2">{t.type}</Eyebrow>
            <p className="text-[14px] text-foreground leading-relaxed">{t.example}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
