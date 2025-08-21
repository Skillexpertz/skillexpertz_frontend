"use client"
import React, { useState } from 'react'
import CourseCard from './Course/CourseCard'
import { courses } from '../course_data'
import Categories from './Course/Categoris';
import { motion } from "framer-motion";
import StatsSection from './shared/StatsSection';
import PillLabels from './shared/PillLabels';
import { useRouter } from "next/navigation";

const Homepage_Courses = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const router = useRouter();

    // Filter courses
    const filteredCourses =
        activeCategory === "All"
            ? courses
            : courses.filter((c) => c.category === activeCategory);

    // Show only 6
    const displayedCourses = filteredCourses.slice(0, 6);

    return (
        <div className='bg-[#F3F4FD] w-full'>
            <div className='mt-10 md:mt-20 pt-10'>
                <PillLabels title="Course List" className="mx-auto" />
                <h1 className="text-3xl font-bold text-center  text-gray-600">
                    Perfect Online{" "}
                    <span className="text-indigo-600 underline decoration-red-500 decoration-7 underline-offset-x-8 font-bold">
                        Course
                    </span>{" "}
                    <br /> For Your Career
                </h1>
            </div>

            {/* Categories with state */}
            {/* <Categories active={activeCategory} setActive={setActiveCategory} /> */}

            {/* Courses grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 transition-transform duration-300">
                {displayedCourses.map((course, index) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                        <CourseCard course={course} />
                    </motion.div>
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mb-12 ">
                <button
                    onClick={() => router.push("/courses")}
                    className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition hover:cursor-pointer"
                >
                    View All Courses →
                </button>
            </div>

            <div className="bg-white">
                <StatsSection />
            </div>
        </div>
    )
}

export default Homepage_Courses
