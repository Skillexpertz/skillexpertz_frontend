"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
    const brands = Array.from({ length: 5 }, (_, i) => `/brand_${i + 1}.png`);
    return (
        <>
            <div className="relative h-[736px] md:mx-10 lg:mx-20 rounded-2xl">
                {/* Background layer with ripple glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/hero-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Glow ripple using a pseudo overlay */}
                    <div className="absolute inset-0 w-[70%] h-[60%] m-auto bg-[#44249e] opacity-30 blur-3xl animate-pulse"></div>
                </div>
                {/* Foreground content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
                    <p className="text-pink-500 tracking-wider uppercase mb-2">
                        Education Solution
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-snug mb-6">
                        Massive Courses <br /> Available for Anyone.
                    </h1>
                    {/* Search bar */}
                    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-[90%] md:w-[600px]">
                        <input
                            type="text"
                            placeholder="AI-Powered Search: Discover the Perfect Course for You"
                            className="flex-grow outline-none text-gray-700 px-2"
                        />
                        <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium">
                            Search
                        </button>
                    </div>
                    {/* Stats below */}
                    <div className="flex gap-6 mt-6 mx-5 md:mx-0 text-gray-300 text-sm md:text-base">
                        <span>✔ More than 2k Courses</span>
                        <span>✔ 1.1k Free Courses</span>
                        <span>✔ 150+ Instructors</span>
                    </div>
                </div>
            </div>
            <motion.div className="hidden relative w-[90%] max-w-4xl lg:flex flex-row justify-between items-center mx-auto h-[80px] md:h-[100px] px-4 md:px-8 bg-white mt-[-70px] z-20 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                {brands.map((src, idx) => (
                    <div key={src} className="flex-1 flex flex-wrap justify-center items-center min-w-0">
                        <Image
                            src={src}
                            alt={`Brand ${idx + 1}`}
                            width={120}
                            height={60}
                            className="max-h-12 md:max-h-10 w-[120px] object-contain max-w-full"
                            priority={idx < 2}
                        />
                    </div>
                ))}
            </motion.div>
            {/* mobile and tablet */}
            <div className="lg:hidden  overflow-hidden bg-white rounded-lg shadow-lg px-4 mx-0 md:mx-10 py-3 mt-[-40px] h-[100px]">
                <motion.div
                    className="flex items-center gap-8 h-full"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ ease: "linear", duration: 12, repeat: Infinity }}
                >
                    {[...brands, ...brands].map((src, idx) => (
                        <div key={idx} className="flex-shrink-0 flex items-center h-full">
                            <Image
                                src={src}
                                alt={`Brand ${idx + 1}`}
                                width={170}
                                height={80}
                                className="object-contain max-h-20 w-auto"
                                priority={idx < 2}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

        </>
    );
};
export default Hero;