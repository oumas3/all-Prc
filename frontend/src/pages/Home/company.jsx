/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
        <div className="relative bg-transparent py-16 sm:py-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">

                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-red-400 via-red-400 opacity-90"/>
                            <div className="relative px-8">
                                <div>
                                </div></div>
                                <blockquote className="mt-8">
                                    <footer className="mt-4">
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                           Fleet Management
                        </h2>
                    </div>

                    {/* Stats section */}
                    <div className="mt-10">
                    </div>
                </div>
            </div>
        </div>
    )
}
