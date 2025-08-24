"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SeminarModal from "./Modals/SeminarModal";

const Hero = () => {
    const brands = Array.from({ length: 5 }, (_, i) => `/brand_${i + 1}.png`);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        // Show modal after page load
        const timer = setTimeout(() => setShowModal(true), 200); // small delay for effect
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <AnimatePresence>
                {showModal && (
                    <SeminarModal onClose={() => setShowModal(false)} />
                )}
            </AnimatePresence>

            <div className="relative h-[850px] md:h-[736px] md:mx-10 lg:mx-20 rounded-2xl">
                {/* Background layer */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/hero-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 w-[70%] h-[60%] m-auto bg-[#44249e] opacity-30 blur-3xl animate-pulse"></div>
                </div>

                {/* Foreground content */}
                <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center text-center md:text-left text-white p-6 gap-8">

                    {/* Left side AI Illustration */}
                    <div
                        className="flex-shrink-0 w-full md:w-1/2 flex justify-center animate-pulse"
                        style={{
                            animation: "float 4s ease-in-out infinite, pulse 2s ease-in-out infinite",
                        }}
                    >
                        <Image
                            src="/ai_robot.png"
                            alt="AI Illustration"
                            width={500}
                            height={500}
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                    <style jsx>{`
                            @keyframes float {
                                0%, 100% {
                                    transform: translateY(0);
                                }
                                50% {
                                    transform: translateY(-10px);
                                }
                            }
                        `}</style>

                    {/* Right side text */}
                    <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
                        <p className="text-pink-500 tracking-wider uppercase mb-2">
                            Education Solution
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-snug mb-6">
                            Massive Courses <br /> Available for Anyone.
                        </h1>
                        {/* Stats */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 mx-5 md:mx-0 text-gray-300 text-sm md:text-base">
                            <span>✔ More than 2k Courses</span>
                            <span>✔ 1.1k Free Courses</span>
                            <span>✔ 150+ Instructors</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brands section */}
            <div className="w-full flex flex-col items-center mt-10">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                    We are <span className="text-purple-600">working</span> with
                </h2>
                <motion.div
                    className="hidden relative w-[90%] max-w-4xl lg:flex flex-row justify-between items-center mx-auto h-[80px] md:h-[100px] px-4 md:px-8 bg-white mt-[-20px] z-20 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    {brands.map((src, idx) => (
                        <div
                            key={src}
                            className="flex-1 flex flex-wrap justify-center items-center min-w-0"
                        >
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
            </div>

            {/* Mobile brands carousel */}
            <div className="lg:hidden overflow-hidden bg-white rounded-lg shadow-lg px-4 mx-0 md:mx-10 py-3 mt-[-40px] h-[100px]">
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
