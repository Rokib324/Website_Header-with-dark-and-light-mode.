import { FaReact } from "react-icons/fa"
import { GoCopy } from "react-icons/go"
import { SiTailwindcss } from "react-icons/si"


const Hero = () => {
    
  return (
    <div className="isolate">
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 blur-3xl opacity-20 rounded-full">
            </div>
            <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                    <div className="flex-1 space-y-6 lg:space-y-7">
                        <div className="space-y-4 lg:space-y-5">
                            <div className="flex items-center">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">New</span>
                                <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 text-sm font-medium backdrop:blur-sm border border-neutral-800/50"><i className="bx bx-trending-up mr-1 "></i>Next Generation Design System</h2>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white"><span className="mb-1 block">Design</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600">Without Limits</span>
                            </h1>
                            <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl font-light">Experience the future of design with our innovative system that breaks boundaries and redefines creativity. The error is happening because your variant name contains invalid characters. </p>
                            <div className="flex gap-3 items-center">
                                <div className="h-px w-12 bg-neutral-300 dark:bg-amber-700"></div>
                                <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">Transition Seemlessly</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 lg:gap-4">
                        {/* Start Coding button */}
                        <button className="group inline-flex items-center px-4 py-2 rounded-lg bg-amber-500 text-neutral-800 text-xs font-medium hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
                            <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform duration-200"></i>
                            Start Coding
                        </button>

                        {/* Documentation button */}
                        <button className="group inline-flex items-center px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-600/40 text-neutral-800 dark:text-neutral-100 text-xs font-medium hover:bg-neutral-300 dark:hover:bg-neutral-600/50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">
                            <i className="bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform duration-200"></i>
                            Documentation
                        </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-700/50">
                        <div className="flex -space-x-3">
                            <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="user" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-neutral-200 dark:border-neutral-700/50" />
                            <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="user" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-neutral-200 dark:border-neutral-700/50" />
                            <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="user" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-neutral-200 dark:border-neutral-700/50" />
                            <img src="https://randomuser.me/api/portraits/men/24.jpg" alt="user" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-neutral-200 dark:border-neutral-700/50" />
                            <span className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-neutral-200 dark:border-neutral-700/50 bg-amber-500 dark:bg-amber-600/40 text-neutral-800 dark:text-neutral-100 text-xs font-medium">+5K</span>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <i className="bx bxs-star text-amber-500 mr-1"></i>
                                <i className="bx bxs-star text-amber-500 mr-1"></i>
                                <i className="bx bxs-star text-amber-500 mr-1"></i>
                                <i className="bx bxs-star text-amber-500 mr-1"></i>
                                <i className="bx bxs-star-half text-amber-500 mr-1"></i>
                                <span className="text-neutral-600 dark:text-neutral-400 text-sm ml-1">4.8/5</span>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                Trusted by {''} <span className="font-bold text-neutral-900 dark:text-white">55500+</span> {' '} Developers worldwide
                            </p>
                        </div>
                        </div>        
                    </div>
                    <div className="flex-1 w-full">
                            <div className="relative shadow-lg shadow-amber-500/20">
                                <div className="relative bg-white dark:bg-neutral-900 p-4 lg:p-6 rounded-lg shadow-2xl border border-neutral-200 dark:border-neutral-700/50 overflow-hidden">
                                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-red-500 transition-all duration-200 group-hover:scale-110"></span>
                                            <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-amber-300 transition-all duration-200 group-hover:scale-110"></span>
                                            <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-green-400 transition-all duration-200 group-hover:scale-110"></span>
                                        </div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400">dark_mode.jsx</div>
                                    </div>
                                    <div className="relative h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                                        <img src="/images/light.png" alt="light mode" className="absolute w-full h-full object-cover object-left-top dark:hidden" />
                                        <img src="/images/dark.png" alt="dark mode" className=" absolute w-full h-full object-cover hidden dark:block" />
                                        <div className="absolute bottom-4 right-4">
                                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-amber-500 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse">
                                                <i className="bx bx-brightness-half text-xl lg:text-2xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 lg:mt-4 flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {/* Tailwind Badge */}
                                            <span className="group px-2.5 py-2 lg:px-3 rounded-full bg-neutral-900/90 dark:bg-neutral-900 text-amber-400 text-xs font-medium flex items-center">
                                            <SiTailwindcss className="mr-2 text-lg group-hover:rotate-12 transition-transform duration-200"/> 
                                                Tailwind v4
                                            </span>
                                            {/* React Badge */}
                                            <span className="group px-2.5 py-2 lg:px-3 rounded-full bg-purple-300/20 text-purple-800 dark:text-purple-400 text-xs font-medium flex items-center">
                                            <FaReact className="mr-2 text-lg group-hover:rotate-12 transition-transform duration-200" />
                                                React v19
                                            </span>
                                        </div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400 bg-amber-500 dark:bg-amber-600 rounded-full p-2"><GoCopy className="text-white text-md cursor-pointer" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <div className="hidden md:block absolute left-8 bottom-8 lg:bottom-10 lg:left-10 animate-bounce">
                <div className="bg-neutral-900/90 dark:bg-neutral-800 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium lg:text-sm flex items-center">
                    <i className="bx bx-check-circle mr-2 text-amber-500"></i> Responsive
                </div>
            </div>
            <div className="hidden md:block absolute right-[15%] top-16 lg:top-20 lg:right-[20%] animate-bounce delay-300">
                <div className="bg-neutral-900/90 dark:bg-neutral-800 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium lg:text-sm flex items-center">
                    <i className="bx bx-check-circle mr-2 text-amber-500"></i> Accessible
                </div>
            </div>
        </div>
  )
}

export default Hero