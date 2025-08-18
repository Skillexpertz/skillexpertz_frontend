import React from 'react'
import Courses from '../components/Course/Courses'
import { courses } from '../course_data'

const page = () => {
    return (
        <div>
            <Courses coursesData={courses} />
        </div>
    )
}

export default page