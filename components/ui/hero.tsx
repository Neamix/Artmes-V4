import React from 'react';
import { Search, MoreHorizontal, Trophy, Code, GraduationCap, Users, Award, BarChart2, Star, Share2 } from 'lucide-react';
import Image from 'next/image';
export default function Hero() {
    return (
        <div className=" bg-white font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full max-w-[90vw] mx-auto block lg:hidden">
                    <img
                        src="/images/hero.svg"
                        alt="Hero Illustration"
                        className="w-auto h-auto object-contain m-auto max-w-[220px] sm:max-w-[320px]"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="max-w-2xl">
                    <h1 className="font-sans text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-6">
                        Effortless lead management
                    </h1>
                    <p className="text-sm md:text-lg text-gray-600 mb-10 leading-[1.6]">
                        Discover Artmes, the effortlessly simple lead management system built for ambitious teams. Seamlessly capture, track, and convert your leads into loyal customers with zero friction.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <button className="flex items-center justify-center gap-3 border border-gray-300 shadow-sm rounded-full px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto">
                            <img src="/images/googleIcon.svg" alt="Google" className="w-5 h-5" />
                            Register with Google
                        </button>
                        <button className="text-sm font-bold text-gray-900 hover:underline px-4 py-3 w-full sm:w-auto">
                            Register with Email
                        </button>
                    </div>
                </div>

                {/* Hero Illustration */}
                <div className="relative w-full aspect-square max-w-lg mx-auto hidden lg:block">
                    <Image
                        src="/images/hero.png"
                        alt="Hero Illustration"
                        referrerPolicy="no-referrer"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>
        </div>
    );
}
