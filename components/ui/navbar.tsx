import Image from "next/image";

const Navbar = () => {
     return (
        <header className="w-full border-b border-gray-200 mx-auto !bg-white">
            <div className="flex items-center h-[64px] px-6 w-full gap-8 max-w-7xl mx-auto">

                <a href="/" className="text-[32px] font-bold text-[#20BEFF] tracking-tighter hover:opacity-90 leading-none pb-1 font-sans">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={140}
                        height={100}
                    />
                </a>

                <div className="flex items-center gap-6 ml-auto">
                    <div className="relative hidden md:flex items-center">
                        <svg className="absolute left-4 w-[18px] h-[18px] text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[280px] h-[42px] pl-11 pr-4 text-[14px] text-gray-900 border border-[#dadce0] rounded-full focus:outline-none focus:border-[#20BEFF] focus:ring-1 focus:ring-[#20BEFF] placeholder:text-[#5f6368] transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-6 ml-2">
                        <button className="text-[12px] md:text-[14px] font-bold text-[#202124] hover:text-[#5f6368] transition-colors cursor-pointer whitespace-nowrap">
                            Sign In
                        </button>
                        <button className="btn-black">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;