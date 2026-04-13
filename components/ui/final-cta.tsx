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
