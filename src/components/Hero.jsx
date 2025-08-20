

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
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Hero