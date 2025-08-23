// components/CourseCard.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getRandomColor } from "../utils/variables";
import { useRouter } from "next/navigation";

export default function CourseCard({ course }) {
    const [color, setColor] = useState("bg-indigo-600"); // fallback to prevent mismatch
    const router = useRouter();

    useEffect(() => {
        setColor(getRandomColor);
    }, []);

    const handleCardClick = (course) => {
        router.push(`/courses/${course.id}`);
    };

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer h-[420px] flex flex-col"
            onClick={() => handleCardClick(course)}
        >
            {/* Image */}
            <div className="relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                />
                <span
                    className={`absolute top-3 left-3 ${color} text-white text-xs font-semibold px-2 py-1 rounded-md`}
                >
                    {course.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg font-semibold text-gray-800 line-clamp-2"
                >
                    {course.title}
                </motion.h3>

                <div className="flex items-center text-sm text-gray-500 gap-4 mt-2">
                    <span className="flex items-center gap-1">
                        📘 {course.courseContent.length} Lessons
                    </span>
                    <span className="flex items-center gap-1">
                        ⏱ {course.duration}
                    </span>
                </div>

                {/* This pushes button + hr + instructor to the bottom */}
                <div className="mt-auto">
                    <p className="enroll-btn relative text-white bg-purple-500 py-2 px-4 rounded-md font-semibold inline-block mb-3 w-fit overflow-hidden">
                        Enroll Now
                    </p>


                    <hr className="border-gray-300" />

                    <div className="flex items-center justify-between text-sm text-gray-600 pt-3">
                        <span>👨‍🏫 {course.instructor}</span>
                        <span className="flex items-center gap-1">
                            ⭐ {course.rating.toFixed(1)} ({course.reviews})
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
