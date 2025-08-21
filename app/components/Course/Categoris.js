"use client";

import { motion } from "framer-motion";

const categories = ["All", "Artificial", "Featured", "Language", "Marketing"];

export default function Categories({ active, setActive }) {
    return (
        <div className="flex justify-center my-10">
            {/* Mobile pill design */}
            <div className="flex md:hidden overflow-x-auto space-x-3 px-4 mx-4 scrollbar-hide">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-2 rounded-full text-sm flex-shrink-0 transition 
                            ${active === cat
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Desktop underline design */}
            <div className="hidden md:flex overflow-hidden items-center bg-white rounded-xl shadow-sm px-6 py-3 w-[70%] justify-center space-x-4">
                {categories.map((cat, idx) => (
                    <div key={cat} className="flex items-center text-center flex-shrink-0">
                        <button
                            onClick={() => setActive(cat)}
                            className={`relative pb-2 text-sm md:text-base font-medium transition-colors ${active === cat
                                ? "text-purple-600"
                                : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            {cat}
                            {active === cat && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-purple-600 rounded-full"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                        {idx < categories.length - 1 && (
                            <span className="mx-4 h-5 w-px bg-gray-400" />
                        )}
                    </div>
                ))}
            </div>
            <style jsx>{`
                /* Works for most browsers */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
