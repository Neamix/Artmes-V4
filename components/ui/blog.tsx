import { BookOpen } from 'lucide-react';

const posts = [
    {
        title: 'How to Follow Up Without Being Annoying',
        author: 'Sarah Mitchell',
        authorInitial: 'S',
        category: 'Sales Tips',
        description: 'Timing is everything in sales. Learn the exact follow-up cadence top reps use to stay top-of-mind without burning bridges with prospects.',
    },
    {
        title: '5 Signs Your Pipeline Is Leaking Revenue',
        author: 'James Okafor',
        authorInitial: 'J',
        category: 'Pipeline Management',
        description: 'Most teams don\'t realize they\'re losing deals until it\'s too late. Here are the warning signs to watch and how to fix them before it costs you.',
    },
    {
        title: 'The One-Minute Lead Capture Habit',
        author: 'Artmes Team',
        authorInitial: 'A',
        category: 'Productivity',
        description: 'Missed leads are missed revenue. This simple daily habit takes sixty seconds and ensures no potential customer ever slips through the cracks again.',
    },
    {
        title: 'Why Your CRM Data Is Probably Wrong',
        author: 'Lena Brauer',
        authorInitial: 'L',
        category: 'Data & Insights',
        description: 'Dirty data silently kills forecasts and commissions. Find out the most common data quality mistakes sales teams make and the fixes that actually stick.',
    },
];

export default function Blog() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-700" />
                    <h2 className="text-xl font-bold text-gray-900">Blog</h2>
                </div>
                <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                    → View all
                </a>
            </div>
            <p className="text-sm text-gray-500 mb-8">
                Tips and insights for sales teams and business owners.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <a
                        key={post.title}
                        href="#"
                        className="group flex flex-col justify-between gap-4 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-green-700 transition-colors">
                                {post.title}
                            </h3>
                            <div className="shrink-0 w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                                {post.authorInitial}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 mb-2">
                                {post.author} · {post.category}
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                                {post.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
