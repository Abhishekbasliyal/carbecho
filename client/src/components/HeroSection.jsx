function HeroSection(){
    return(
        <>
            <div className="relative overflow-hidden bg-[#e6f0fe] px-24">
                <div
                    className="container grid min-h-[400px] grid-cols-1 items-center gap-8 py-2 md:min-h-[500px] md:grid-cols-2 md:py-4">
                    <div className="z-10 space-y-6 md:space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
                                Find Your Perfect Pre-Owned Vehicle
                            </h1>
                            <p className="text-base text-gray-600 sm:text-lg">
                                Discover a wide selection of quality used cars at competitive prices
                            </p>
                        </div>
                        <div
                            className="flex w-full flex-col gap-2 sm:flex-row sm:max-w-xl items-center rounded-lg bg-white p-2 shadow-lg">
                            <input
                                type="text"
                                placeholder="Search by make, model, or year"
                                className="w-full flex-1 border-0 bg-transparent px-3 py-2 text-base focus:outline-none focus:ring-0"
                            />
                            <button
                                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-[#4361EE] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#4361EE]/90 transition-colors">
                                {/*<Search className="mr-2 h-4 w-4"/>*/}
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="relative mt-8 md:mt-0">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;