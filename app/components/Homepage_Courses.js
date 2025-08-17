import React from 'react'
import CourseCard from './Course/CourseCard'
import { courses } from '../course_data'
import Categories from './Course/Categoris';


const categories = ["All", "Artificial", "Featured", "Language", "Marketing"];


const Homepage_Courses = () => {

    return (
        <div className='bg-[#F3F4FD] w-full'>
            <div className='mt-20 pt-10'>
                <h4 className='text-sm font-semibold rounded-4xl bg-[#E7DEFF] text-[#5F2DED] text-center py-2 w-[100px] mx-auto my-5'>Course List</h4>
                <h1 className="text-3xl font-bold text-center  text-gray-600">
                    Perfect Online <span className="text-indigo-600 underline decoration-red-500 decoration-7 underline-offset-x-8 font-bold">Course</span> <br /> For
                    Your Career
                </h1>
            </div>

            <Categories />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-10 hover:scale-105 transition-transform duration-300">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default Homepage_Courses