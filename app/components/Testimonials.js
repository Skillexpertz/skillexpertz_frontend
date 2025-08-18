"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
    const testimonials = [
        {
            quote:
                "The other hand we denounce righteous indignation men who are so beguiled and demoralized by the moment. Dislike men who so development co",
            name: "Robind Jon",
            role: "Designer TechBoot",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            quote:
                "The other hand we denounce righteous indignation men who are so beguiled and demoralized by the moment. Dislike men who so development co",
            name: "Robind Jon",
            role: "Designer TechBoot",
            img: "https://randomuser.me/api/portraits/men/45.jpg",
        },
    ];

    return (
        <motion.section
            className="bg-purple-50 py-16"
            style={{
                backgroundImage: "url('/testimonial_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 text-sm rounded-full font-medium">
                        Course List
                    </span>
                    <h2 className="text-3xl font-bold mt-4 mb-6">
                        What They Say <br /> About us
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Construction is a general term meaning the art and science to form
                        systems organizations and comes from Latin Construction is
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
                    >
                        Explore More →
                    </motion.button>
                </motion.div>

                {/* Right Testimonials */}
                <motion.div
                    className="grid gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 relative"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Quote icon */}
                            <motion.div
                                className="absolute -top-4 left-4 bg-purple-600 text-white text-2xl p-2 rounded"
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 2,
                                }}
                            >
                                “
                            </motion.div>

                            {/* Testimonial text */}
                            <p className="text-gray-700 text-sm mb-6">{t.quote}</p>

                            {/* User info */}
                            <div className="flex items-center gap-4">
                                <motion.img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div>
                                    <h4 className="font-semibold">{t.name}</h4>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
