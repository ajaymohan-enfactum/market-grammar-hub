import { SectionWrapper, SectionHeader } from "../SectionParts";

export function VoiceToneSection() {
  return (
    <SectionWrapper id="voice-tone">
      <SectionHeader
        title="Voice & Tone"
        subtitle="Authoritative but never arrogant. Precise but never clinical. Locally fluent but globally legible. Data-dense but never inaccessible."
      />

      {/* Pull quote */}
      <div className="border-l-2 border-primary bg-surface rounded-r-lg p-6 mb-10">
        <p className="text-lg font-medium text-foreground leading-relaxed">
          "We communicate the complexity of Asian markets with data-noir precision. We build the pipeline, we don't add to the noise."
        </p>
      </div>

      {/* Three registers */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Three Registers</h3>
      <div className="bg-surface border border-border rounded-lg overflow-hidden mb-10">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 font-semibold text-foreground">Register</th>
              <th className="text-left p-3 font-semibold text-foreground">When</th>
              <th className="text-left p-3 font-semibold text-foreground">Example</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Authority", "Thought leadership, keynotes, brand statements", "\"Southeast Asia's GTM infrastructure was built on assumptions that never applied.\""],
              ["Precision", "Product UI, documentation, sales decks", "\"Signal captures across 14 markets in 6 languages, processed in under 200ms.\""],
              ["Clarity", "Support, onboarding, internal comms", "\"Your territory map updates every 4 hours. Here's what changed.\""],
            ].map(([register, when, example]) => (
              <tr key={register} className="border-b border-border last:border-b-0">
                <td className="p-3 font-medium text-foreground">{register}</td>
                <td className="p-3 text-text-secondary">{when}</td>
                <td className="p-3 text-text-secondary italic">{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Writing principles */}
      <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4">Writing Principles</h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Lead with Data", body: "Numbers first, narrative second. Every claim earns its place with evidence." },
          { title: "No Jargon Without Context", body: "If a term needs a glossary, define it inline. Never assume shared vocabulary." },
          { title: "Short Sentences Win", body: "Max 20 words per sentence in product copy. Complexity lives in the data, not the grammar." },
          { title: "Active Voice Always", body: "\"The system processes signals\" not \"Signals are processed by the system.\"" },
        ].map((p) => (
          <div key={p.title} className="bg-surface border border-border rounded-lg p-5">
            <div className="text-[13px] font-semibold text-foreground mb-1">{p.title}</div>
            <p className="text-[12px] text-text-secondary">{p.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
