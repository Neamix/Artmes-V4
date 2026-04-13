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
                        Don&apos;t take our word for it — here&apos;s what our customers say.
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
                            <p className="text-sm text-gray-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
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
