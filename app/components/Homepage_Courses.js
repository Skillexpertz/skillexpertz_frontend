"use client"
import React from 'react'
import CourseCard from './Course/CourseCard'
import { courses } from '../course_data'
import Categories from './Course/Categoris';
import { motion } from "framer-motion";
import StatsSection from './shared/StatsSection';
import PillLabels from './shared/PillLabels';

const categories = ["All", "Artificial", "Featured", "Language", "Marketing"];


const Homepage_Courses = () => {

    return (
        <div className='bg-[#F3F4FD] w-full'>
            <div className='mt-20 pt-10'>
                <PillLabels title="Course List" className="mx-auto" />
                <h1 className="text-3xl font-bold text-center  text-gray-600">
                    Perfect Online <span className="text-indigo-600 underline decoration-red-500 decoration-7 underline-offset-x-8 font-bold">Course</span> <br /> For
                    Your Career
                </h1>
            </div>

            <Categories />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-10 transition-transform duration-300">
                {courses.map((course) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: course.id * 0.2, duration: 0.5 }}
                    >

                        <CourseCard key={course.id} course={course} />
                    </motion.div>
                ))}
            </div>
            <div className="bg-white">
                <StatsSection />
            </div>
        </div>
    )
}

export default Homepage_Courses