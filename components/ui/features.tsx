import { Users, BarChart2, Share2, Target, TrendingUp, Zap, Bell, PieChart, GitBranch } from 'lucide-react';

const personas = [
    {
        title: 'Sales Reps',
        description: 'Capture leads instantly and follow up at the right moment. Stay organized and close more deals with less effort.',
        illustration: '/images/icon-sales-rep.svg',
        features: [
            { icon: <Target className="w-5 h-5" />, label: 'Lead capture & tracking' },
            { icon: <Bell className="w-5 h-5" />, label: 'Smart follow-up reminders' },
            { icon: <Zap className="w-5 h-5" />, label: 'One-click pipeline updates' },
        ],
    },
    {
        title: 'Team Managers',
        description: 'Get full visibility into your team\'s pipeline. Assign leads, spot bottlenecks, and coach reps with real data.',
        illustration: '/images/icon-team-manager.svg',
        features: [
            { icon: <Users className="w-5 h-5" />, label: 'Team lead assignment' },
            { icon: <BarChart2 className="w-5 h-5" />, label: 'Pipeline health reports' },
            { icon: <GitBranch className="w-5 h-5" />, label: 'Bottleneck detection' },
        ],
    },
    {
        title: 'Business Owners',
        description: 'See your revenue engine from the top. Understand conversion rates, track growth, and make decisions backed by data.',
        illustration: '/images/icon-business-owner.svg',
        features: [
            { icon: <TrendingUp className="w-5 h-5" />, label: 'Revenue growth tracking' },
            { icon: <PieChart className="w-5 h-5" />, label: 'Conversion rate insights' },
            { icon: <Share2 className="w-5 h-5" />, label: 'Full funnel visibility' },
        ],
    },
];

export default function Features() {
    return (
        <section className="max-w-7xl mx-auto px-6 ">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Who uses Artmes?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {personas.map((persona) => (
                    <div key={persona.title} className="flex flex-col gap-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{persona.title}</h3>
                                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{persona.description}</p>
                            </div>
                            <div className="shrink-0">
                                <img src={persona.illustration} alt={persona.title} className="w-24 h-24" />
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">Key Features</p>
                            <ul className="flex flex-col gap-3">
                                {persona.features.map((f) => (
                                    <li key={f.label} className="flex items-center gap-3 text-sm text-gray-700">
                                        <span className="text-gray-500">{f.icon}</span>
                                        {f.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
