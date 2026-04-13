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
