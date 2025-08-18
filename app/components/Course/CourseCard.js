// components/CourseCard.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//for category random colors
const colorClasses = [
    "bg-indigo-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-rose-600",
    "bg-red-600",
    "bg-orange-600",
    "bg-amber-600",
    "bg-green-600",
    "bg-emerald-600",
    "bg-teal-600",
    "bg-cyan-600",
    "bg-blue-600",
];

export default function CourseCard({ course }) {
    const [color, setColor] = useState("bg-indigo-600"); // fallback to prevent mismatch
    // Pick random color once for each card render
    useEffect(() => {
        const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        setColor(randomColor);
    }, []);
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer"
        >
            {/* Image */}
            <div className="relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                />
                <span className={`absolute top-3 left-3 ${color} text-white text-xs font-semibold px-2 py-1 rounded-md`}>
                    {course.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg font-semibold text-gray-800 line-clamp-2"
                >
                    {course.title}
                </motion.h3>

                <div className="flex items-center text-sm text-gray-500 gap-4">
                    <span className="flex items-center gap-1">
                        📘 {course.courseContent.length} Lessons
                    </span>
                    <span className="flex items-center gap-1">⏱ {course.duration}</span>
                </div>

                <p className="text-indigo-600 font-semibold">${course.price}</p>

                <hr className="border-gray-300" />

                {/* Instructor + Rating */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>👨‍🏫 {course.instructor}</span>
                    <span className="flex items-center gap-1">
                        ⭐ {course.rating.toFixed(1)} ({course.reviews})
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
