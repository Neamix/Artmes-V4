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
