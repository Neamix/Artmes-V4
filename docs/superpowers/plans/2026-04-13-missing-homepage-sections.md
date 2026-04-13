# Missing Homepage Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 5 missing homepage sections to match ClickUp's conversion-optimized structure: Trust Logos, Stats/ROI, Testimonials, Integrations, and Final CTA Banner.

**Architecture:** Each section is an independent React server component in `components/ui/`. All use Tailwind CSS v4 with the existing `btn-black` utility class. No external data — all copy is hardcoded. Components are inserted into `app/page.tsx` in the correct order.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Lucide React

**New page order:**
Navbar → Hero → TrustLogos → Features → Feature → Stats → Testimonials → Integrations → Blog → FinalCTA → Footer

---

### Task 1: TrustLogos component

**Files:**
- Create: `components/ui/trust-logos.tsx`

- [ ] Create the component with 6 company name "logos" rendered as styled text (no real images needed):

```tsx
export default function TrustLogos() {
    const companies = ['Nexlify', 'Orbita', 'Stackrow', 'Veltis', 'Crendo', 'Lumara'];
    return (
        <section className="border-y border-gray-100 py-10 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
                    Trusted by fast-growing teams worldwide
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {companies.map((name) => (
                        <span key={name} className="text-lg font-bold text-gray-300 hover:text-gray-400 transition-colors tracking-tight select-none">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

- [ ] Commit: `git add components/ui/trust-logos.tsx && git commit -m "feat: add TrustLogos section"`

---

### Task 2: Stats component

**Files:**
- Create: `components/ui/stats.tsx`

- [ ] Create the component with 4 impact metrics:

```tsx
const stats = [
    { value: '3×', label: 'More leads captured', sub: 'vs. spreadsheets' },
    { value: '2 hrs', label: 'Saved per rep, per day', sub: 'on average' },
    { value: '41%', label: 'Higher close rate', sub: 'within 90 days' },
    { value: '98%', label: 'Customer satisfaction', sub: 'across all plans' },
];

export default function Stats() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Results teams actually see
                </h2>
                <p className="mt-3 text-gray-500 text-base max-w-md mx-auto">
                    Artmes users report measurable impact within weeks — not quarters.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s) => (
                    <div key={s.value} className="flex flex-col items-center text-center gap-1">
                        <span className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{s.value}</span>
                        <span className="text-sm font-semibold text-gray-700 mt-1">{s.label}</span>
                        <span className="text-xs text-gray-400">{s.sub}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
```

- [ ] Commit: `git add components/ui/stats.tsx && git commit -m "feat: add Stats section"`

---

### Task 3: Testimonials component

**Files:**
- Create: `components/ui/testimonials.tsx`

- [ ] Create the component with 3 testimonials:

```tsx
const testimonials = [
    {
        quote: "Artmes completely changed how our team handles leads. We went from losing deals in spreadsheets to closing 40% more in the first month.",
        name: "Marcus Webb",
        title: "Head of Sales, Nexlify",
        initials: "MW",
        rating: 5,
    },
    {
        quote: "The follow-up reminders alone are worth it. Our reps never drop a hot lead anymore — and management finally has the visibility they were asking for.",
        name: "Priya Sharma",
        title: "VP of Revenue, Veltis",
        initials: "PS",
        rating: 5,
    },
    {
        quote: "We tried three CRMs before Artmes. This is the first one the whole team actually uses. Setup took an afternoon, not a month.",
        name: "Daniel Hofer",
        title: "Founder & CEO, Crendo",
        initials: "DH",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Loved by ambitious teams
                    </h2>
                    <p className="mt-3 text-gray-500 text-base">
                        Don't take our word for it — here's what our customers say.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-200 flex flex-col gap-5 shadow-sm">
                            <div className="flex gap-1">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed flex-1">"{t.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-400">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

- [ ] Commit: `git add components/ui/testimonials.tsx && git commit -m "feat: add Testimonials section"`

---

### Task 4: Integrations component

**Files:**
- Create: `components/ui/integrations.tsx`

- [ ] Create the component with 8 integration badges:

```tsx
const integrations = [
    { name: 'Gmail', color: 'bg-red-50 text-red-600 border-red-100' },
    { name: 'Slack', color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { name: 'HubSpot', color: 'bg-orange-50 text-orange-600 border-orange-100' },
    { name: 'Salesforce', color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { name: 'Zapier', color: 'bg-orange-50 text-orange-500 border-orange-100' },
    { name: 'LinkedIn', color: 'bg-sky-50 text-sky-600 border-sky-100' },
    { name: 'Outlook', color: 'bg-blue-50 text-blue-700 border-blue-100' },
    { name: 'Notion', color: 'bg-gray-50 text-gray-700 border-gray-200' },
];

export default function Integrations() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Works with the tools you already use
                </h2>
                <p className="mt-3 text-gray-500 text-base max-w-md mx-auto">
                    Connect Artmes to your existing stack in minutes — no developer required.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {integrations.map((integration) => (
                    <div
                        key={integration.name}
                        className={`px-5 py-2.5 rounded-full border text-sm font-semibold ${integration.color}`}
                    >
                        {integration.name}
                    </div>
                ))}
            </div>
            <p className="text-center text-xs text-gray-400">+ 50 more integrations via Zapier</p>
        </section>
    );
}
```

- [ ] Commit: `git add components/ui/integrations.tsx && git commit -m "feat: add Integrations section"`

---

### Task 5: FinalCTA component

**Files:**
- Create: `components/ui/final-cta.tsx`

- [ ] Create the bold conversion banner:

```tsx
export default function FinalCTA() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10 pb-20">
            <div className="bg-gray-900 rounded-3xl px-8 py-16 md:py-20 text-center relative overflow-hidden">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_0%,_transparent_70%)]" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 relative">
                    Your next deal is<br />waiting to be closed.
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-10 max-w-md mx-auto relative">
                    Join thousands of sales teams that use Artmes to capture more leads, follow up faster, and close more deals.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                    <button className="bg-white text-gray-900 font-bold text-sm py-3 px-8 rounded-full hover:bg-gray-100 transition-colors w-full sm:w-auto">
                        Get started free
                    </button>
                    <button className="border border-white/20 text-white font-bold text-sm py-3 px-8 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto">
                        Book a demo
                    </button>
                </div>
                <p className="mt-6 text-xs text-gray-500 relative">No credit card required · Free forever plan available</p>
            </div>
        </section>
    );
}
```

- [ ] Commit: `git add components/ui/final-cta.tsx && git commit -m "feat: add FinalCTA section"`

---

### Task 6: Wire into page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] Replace contents with:

```tsx
import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Feature from "@/components/ui/feature";
import Features from "@/components/ui/features";
import Blog from "@/components/ui/blog";
import Footer from "@/components/ui/footer";
import TrustLogos from "@/components/ui/trust-logos";
import Stats from "@/components/ui/stats";
import Testimonials from "@/components/ui/testimonials";
import Integrations from "@/components/ui/integrations";
import FinalCTA from "@/components/ui/final-cta";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Features />
      <Feature />
      <Stats />
      <Testimonials />
      <Integrations />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
}
```

- [ ] Commit: `git add app/page.tsx && git commit -m "feat: wire all new sections into homepage"`
