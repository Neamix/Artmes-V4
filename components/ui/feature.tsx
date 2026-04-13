import Image from 'next/image';

export default function Feature() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            {/* Headline */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                    Leads that practically<br />
                    <span> manage themselves</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                    Introducing intelligent lead management for ambitious teams.
                    Dream bigger and move faster with Artmes.
                </p>
                <button className="btn-black">
                    Get started
                </button>
            </div>

            {/* Product Screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-gray-50">            
                {/* Screenshot */}
                <div className="relative w-full aspect-video">
                    <Image
                        src="/images/hero.png"
                        alt="Artmes dashboard"
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </div>
        </section>
    );
}
