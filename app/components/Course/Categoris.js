"use client";

import { motion } from "framer-motion";

const categories = ["All", "Artificial", "Featured", "Language", "Marketing"];

export default function Categories({ active, setActive }) {
    return (
        <div className="flex justify-center my-10">
            <div className="flex items-center bg-white rounded-xl shadow-sm px-6 py-3 w-[70%] justify-center space-x-4">
                {categories.map((cat, idx) => (
                    <div key={cat} className="flex items-center text-center">
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

                        {/* Divider except last */}
                        {idx < categories.length - 1 && (
                            <span className="mx-4 h-5 w-px bg-gray-400" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
