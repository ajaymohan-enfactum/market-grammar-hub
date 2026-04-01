import { useState } from "react";
import { SectionWrapper, SectionHeader, Eyebrow } from "../SectionParts";
import { PromptCard } from "../PromptCard";

const tabs = ["Midjourney", "Ideogram", "Gemini", "DALL-E", "Claude"] as const;

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
          <Eyebrow className="mb-2">Dark Presentations</Eyebrow>
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

          <Eyebrow className="mt-8 mb-2">Light Presentations</Eyebrow>
          <PromptCard
            id="prompt-mj-light-linkedin"
            tool="Midjourney"
            title="LinkedIn Post Background — Prismatic Light"
            whenToUse="Backgrounds for LinkedIn carousel posts, article headers, light-mode contexts."
            prompt={`/imagine prompt: prismatic color field, clean white canvas, intersecting geometric planes in electric blue #0057FF and full-spectrum gradients, sharp angular forms, non-representational, no people, no text, high chroma saturation, precision geometry, B2B editorial, bold focal plane --ar 16:9 --style raw --v 6.1

Negative: midnight tones, warm brown, soft bokeh, watercolor, organic blobs, corporate offices, neon glow`}
          />
          <PromptCard
            id="prompt-mj-light-event"
            tool="Midjourney"
            title="Event Backdrop — Color Architecture"
            whenToUse="Conference stage, and physical brand environments in light mode."
            prompt={`/imagine prompt: color planes intersecting at sharp angles, vivid electric blue #0057FF and clean spectral forms, white ground plane, non-representational abstract architecture, no signage, no people, high contrast color blocks, B2B editorial precision, bold single focal point --ar 16:9 --style raw --v 6.1

Negative: soft gradients, dark backgrounds, neon glow, cyberpunk, watercolor, friendly corporate`}
          />
          <PromptCard
            id="prompt-mj-light-social"
            tool="Midjourney"
            title="Social Media Square — Color Grid"
            whenToUse="Social media avatars, and square format graphics in light mode."
            prompt={`/imagine prompt: abstract color grid on clean white background, vivid electric blue #0057FF and full-spectrum accent planes, mathematical grid lines, sharp angular forms, non-representational, no text, no people, bold color contrast, minimal depth, editorial precision --ar 1:1 --style raw --v 6.1

Negative: dark backgrounds, warm gradients, neon particles, bokeh, soft lighting, organic shapes`}
          />
        </div>
      )}

      {activeTab === "Ideogram" && (
        <div className="space-y-4">
          <Eyebrow className="mb-2">Dark Presentations</Eyebrow>
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

          <Eyebrow className="mt-8 mb-2">Light Presentations</Eyebrow>
          <PromptCard
            id="prompt-ideo-light-report"
            tool="Ideogram"
            title="Data Report Background — Luminous"
            whenToUse="Light-themed infographic backgrounds, report covers, and document headers."
            prompt={`A vibrant, abstract background for a modern B2B data report. Clean white base with flowing geometric color fields in electric blue (#0057FF), violet (#7C3AED), and emerald (#10B981). Smooth gradient transitions between bold color zones. Abstract, non-representational, suitable for text overlay. No people, no corporate stock imagery, no flat single-color fills. Style: modern data visualization art, high energy. Aspect ratio: 16:9`}
          />
          <PromptCard
            id="prompt-ideo-light-territory"
            tool="Ideogram"
            title="Territory Map Visual — Chromatic"
            whenToUse="Light-themed SEA market coverage visuals and territory breakdowns."
            prompt={`Abstract colorful map visualization of Southeast Asia rendered as overlapping translucent geometric planes on a clean white background. Countries represented as bold color blocks in electric blue (#0057FF), violet (#7C3AED), and emerald (#10B981). Singapore highlighted with a vivid amber (#F59E0B) accent glow. No labels, no people, no dark backgrounds. Style: modern cartographic art, chromatic depth. Aspect ratio: 16:9`}
          />
        </div>
      )}

      {activeTab === "Gemini" && (
        <div className="space-y-4">
          <Eyebrow className="mb-2">Dark Presentations — Foundation / Pathway / Monument</Eyebrow>
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

          <Eyebrow className="mt-8 mb-2">Light Presentations — Radiance / Spectrum / Prism</Eyebrow>
          <p className="text-[13px] text-text-secondary mb-4">Light counterparts to the dark frameworks. Vivid color fields on white canvas, abstract and non-representational.</p>
          <PromptCard
            id="prompt-gemini-light-foundation"
            tool="Gemini"
            title="The Radiance — Data & Color"
            whenToUse="Light-themed hero images, landing pages, product visuals."
            prompt={`A photorealistic macro shot of 3D geometric cubes arranged in a rigid, asymmetrical grid. The background is clean white fading into soft light grey. The cubes are made of translucent colored glass in electric blue (#0057FF), violet (#7C3AED), and emerald (#10B981). Sharp directional lighting creates vivid colored shadows and refractions. Modern abstract art style, highly detailed. Exclude all people, dark backgrounds, midnight blue, black, glowing neon nodes, and organic shapes.`}
          />
          <PromptCard
            id="prompt-gemini-light-pathway"
            tool="Gemini"
            title="The Spectrum — Strategy & Flow"
            whenToUse="Light-themed process diagrams, strategy visuals, flow illustrations."
            prompt={`Abstract 3D structural lines and geometric pathways intersecting cleanly on a bright white canvas. The primary colors are vivid electric blue (#0057FF), violet (#7C3AED), and emerald (#10B981) with smooth gradient transitions. Bold, energetic design. Color bands flow along the edges of the structures, creating depth and movement. Precise, mathematical, modern corporate art. Exclude dark backgrounds, midnight blue, black, binary code, cybernetic themes, people, and muted colors.`}
          />
          <PromptCard
            id="prompt-gemini-light-monument"
            tool="Gemini"
            title="The Prism — Scale & Brilliance"
            whenToUse="Light-themed keynote backgrounds, executive presentations, brand statements."
            prompt={`A low-angle view of massive, minimalist architecture made of translucent prismatic glass. Intersecting planes refract light into vivid spectrums of blue (#0057FF), violet (#7C3AED), and amber (#F59E0B). Clean white atmosphere with bold color reflections. No windows, no human context. 8k resolution, highly realistic, structural focus. Exclude dark backgrounds, midnight blue, black, warm red, orange, natural landscapes, people, and watercolor effects.`}
          />
        </div>
      )}

      {activeTab === "DALL-E" && (
        <div className="space-y-4">
          <Eyebrow className="mb-2">Dark Presentations</Eyebrow>
          <PromptCard
            id="prompt-blog-header"
            tool="DALL-E"
            title="Blog Post Header Image"
            whenToUse="Blog headers, newsletter banners, content marketing visuals."
            prompt={`Create an abstract architectural composition for a B2B technology blog header. Style: minimalist brutalism. Base color: deep midnight navy (#0A0F1E). Accent: single thin line of electric blue (#0057FF). Composition: overlapping geometric planes creating depth. Materials: concrete, dark steel, matte glass. Lighting: single cold directional light from upper left. No people, no text, no warm colors, no organic shapes. Photorealistic, 8k quality. Aspect ratio 16:9.`}
          />

          <Eyebrow className="mt-8 mb-2">Light Presentations</Eyebrow>
          <PromptCard
            id="prompt-dalle-light-blog"
            tool="DALL-E"
            title="Blog Post Header — Chromatic Abstract"
            whenToUse="Light-themed blog headers, newsletter banners, content marketing visuals."
            prompt={`Create an abstract color field composition for a modern B2B technology blog header. Style: bold geometric abstraction. Base: clean white canvas. Primary colors: electric blue (#0057FF), violet (#7C3AED), emerald (#10B981). Composition: overlapping translucent geometric ribbons creating depth and movement. Materials: glass-like surfaces with color refractions. Lighting: bright, even, high-key. No people, no text, no dark backgrounds, no flat single-color fills, no corporate stock imagery. High energy, non-representational. 8k quality. Aspect ratio 16:9.`}
          />
        </div>
      )}
    </SectionWrapper>
  );
}
