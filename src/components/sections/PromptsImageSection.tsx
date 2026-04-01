import { useState } from "react";
import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";
import { PromptCard } from "../PromptCard";

const tabs = ["Midjourney", "Ideogram", "Gemini", "DALL-E"] as const;

export function PromptsImageSection() {
  const [activeTab, setActiveTab] = useState<string>("Midjourney");

  return (
    <SectionWrapper id="prompts-image">
      <SectionHeader
        title={<>Image <span className="text-primary">Generation</span> Prompts</>}
        subtitle="Production-ready prompts for every image context. Pick the tool, copy the prompt, generate on-brand visuals in one shot."
      />

      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 ${
              activeTab === t ? "bg-primary text-primary-foreground" : "bg-elevated text-text-secondary hover:text-foreground"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            {t}
          </button>
        ))}
      </div>

      {activeTab === "Midjourney" && (
        <div className="space-y-4">
          <PromptCard
            id="prompt-linkedin-hero-bg"
            tool="Midjourney"
            title="LinkedIn Post Background — Geometric Dark"
            whenToUse="Document backgrounds for LinkedIn carousel posts and article headers."
            prompt={`/imagine prompt: abstract geometric architecture, deep midnight navy background #0A0F1E, intersecting concrete planes, single electric blue accent light #2979FF, brutalist minimalism, sharp shadows, no people, no gradients, no warm colors, photorealistic, 8k, architectural visualization --ar 16:9 --style raw --v 6.1

Negative: people, faces, orange, red, warm tones, soft gradients, glowing particles, binary code, cyberpunk, neon, watercolor, bokeh`}
          />
          <PromptCard
            id="prompt-event-backdrop"
            tool="Midjourney"
            title="Event Backdrop — Scale & Authority"
            whenToUse="Conference stages, event signage, and physical brand environments."
            prompt={`/imagine prompt: low angle view of massive minimalist brutalist structure, intersecting concrete and dark steel planes, midnight blue atmosphere #0A0F1E, sharp electric blue reflection on glass surface #0057FF, corporate cold precision, no windows, no people, no signage, architectural 8k render, deep shadows, structural focus --ar 16:9 --style raw --v 6.1

Negative: people, warm colors, orange, red, organic shapes, trees, sky, watercolor, friendly corporate`}
          />
          <PromptCard
            id="prompt-social-square"
            tool="Midjourney"
            title="Social Media Square — Data Grid"
            whenToUse="Instagram posts, social media avatars, and square format graphics."
            prompt={`/imagine prompt: macro shot of precision geometric grid, dark graphite surface, mathematical grid lines in electric blue #2979FF at 20% opacity, single sharp light source, deep contrast, structural minimalism, data infrastructure aesthetic, no text, no people, no warm tones --ar 1:1 --style raw --v 6.1

Negative: people, gradients, orange, warm, glowing, neon, bokeh, soft`}
          />
        </div>
      )}

      {activeTab === "Ideogram" && (
        <div className="space-y-4">
          <PromptCard
            id="prompt-data-report-bg"
            tool="Ideogram"
            title="Data Report Background"
            whenToUse="Infographic backgrounds, report covers, and document headers."
            prompt={`A dark, minimalist abstract background for a B2B data report. Deep midnight blue (#0A0F1E) base. Subtle geometric grid lines visible at low opacity. One sharp electric blue accent line diagonal across frame. Architectural, cold, precise. Suitable for text overlay. No gradients, no people, no warm colors. Style: corporate minimalist, data-noir. Aspect ratio: 16:9`}
          />
          <PromptCard
            id="prompt-territory-map"
            tool="Ideogram"
            title="Territory Map Visual"
            whenToUse="SEA market coverage visuals, territory breakdowns."
            prompt={`Abstract minimalist map visualization of Southeast Asia rendered as geometric blocks and precise grid lines on deep midnight blue (#0A0F1E) background. Countries represented as clean geometric shapes in varying shades of dark navy. Singapore highlighted with electric blue (#0057FF) accent glow. No labels, no people, no warm colors. Style: data infrastructure, architectural precision. Aspect ratio: 16:9`}
          />
        </div>
      )}

      {activeTab === "Gemini" && (
        <div className="space-y-4">
          <Eyebrow className="mb-2">Foundation / Pathway / Monument Frameworks</Eyebrow>
          <p className="text-[13px] text-text-secondary mb-4">These are the three core Gemini prompt frameworks from the Mood Board. Each produces a distinct visual category.</p>
          <PromptCard
            id="prompt-gemini-foundation"
            tool="Gemini"
            title="The Foundation — Data & Structure"
            whenToUse="Primary hero images, landing page backgrounds, product screenshots."
            prompt={`A photorealistic macro shot of 3D geometric cubes arranged in a rigid, asymmetrical grid. The background is pure midnight blue (#0A0F1E) fading into black. The cubes are made of matte graphite and dark tinted glass. A single, sharp directional electric blue light (#2979FF) casts hard, defined shadows. Architectural rendering style, highly detailed. Exclude all people, gradients, soft lighting, glowing neon nodes, red colors, and organic shapes.`}
          />
          <PromptCard
            id="prompt-gemini-pathway"
            tool="Gemini"
            title="The Pathway — Strategy & Flow"
            whenToUse="Process diagrams, strategy visuals, flow illustrations."
            prompt={`Abstract 3D structural lines and geometric pathways intersecting cleanly in a pitch-dark void. The primary colors are deep solid midnight blue and absolute black. Minimalist, brutalist design. Accents of sharp electric blue light hit the edges of the structures, casting hard shadows. Precise, mathematical, corporate minimalism. Exclude binary code, cybernetic themes, soft curves, people, and warm colors.`}
          />
          <PromptCard
            id="prompt-gemini-monument"
            tool="Gemini"
            title="The Monument — Scale & Authority"
            whenToUse="Keynote backgrounds, executive presentations, brand statements."
            prompt={`A low-angle view of massive, minimalist brutalist architecture without any windows or human context. Intersecting solid concrete and dark steel planes. Deep, high-contrast shadows. The atmosphere is cold and corporate. A subtle, sharp electric blue reflection strikes a pane of dark glass. 8k resolution, highly realistic, structural focus. Exclude red tones, orange tones, natural landscapes, people, sky gradients, and soft watercolor effects.`}
          />
        </div>
      )}

      {activeTab === "DALL-E" && (
        <div className="space-y-4">
          <PromptCard
            id="prompt-blog-header"
            tool="DALL-E"
            title="Blog Post Header Image"
            whenToUse="Blog headers, newsletter banners, content marketing visuals."
            prompt={`Create an abstract architectural composition for a B2B technology blog header. Style: minimalist brutalism. Base color: deep midnight navy (#0A0F1E). Accent: single thin line of electric blue (#0057FF). Composition: overlapping geometric planes creating depth. Materials: concrete, dark steel, matte glass. Lighting: single cold directional light from upper left. No people, no text, no warm colors, no organic shapes. Photorealistic, 8k quality. Aspect ratio 16:9.`}
          />
        </div>
      )}
    </SectionWrapper>
  );
}
