// app/courses/[id]/page.js

import CourseDetails from "@/app/components/Course/CourseDetails";
import { courses } from "@/app/course_data";

export default function CourseDetailsPage({ params }) {
    const courseId = Number(params.id);

    const course = courses.find((c) => c.id === courseId);
    console.log(course);

    if (!course) return <p>Course not found</p>;

    return (
        <div className="">
            <CourseDetails course={course} />
        </div>
    );
}
