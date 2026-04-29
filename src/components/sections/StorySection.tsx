import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { siteConfig } from "@/data/site";

export function StorySection() {
  return (
    <section className="px-5 py-8 sm:px-6 lg:px-8">
      <div className="page-container grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-tertiary-container/10 blur-3xl" />
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            {siteConfig.story.eyebrow}
          </span>
          <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            From the <span className="text-primary">streets of Lagos</span> to your table.
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-on-surface-variant">
            {siteConfig.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <SmartImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2HdS5lo3PjT20Wt7snvijMCuLuivYoLxSzKYNk5tF1e88YegDqKgwRXPjbaNCinvB2hDyo9Vii6obwuaKUcax9_kBawLgguRzwWkcls9JaUYiu90kMJfvR9U92rjZykwTMZKGM_msiiCsdU964z0I-lrq-Co26qyzPo0VtXH-HkLOPCcDFk_5JYeqR_Il0xpkMpwcN5wfiOmoHK0ZcfNK7ThQxgerqCPtskN7IErMMIoI-apqWnk_mcTQOefC8voggCBFzTNj_-wn"
              alt="Vibrant modern restaurant interior with African decor elements"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden max-w-[220px] rounded-2xl bg-surface-container-lowest p-6 shadow-xl md:block">
            <p className="font-headline font-bold italic text-primary">{siteConfig.story.quote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
