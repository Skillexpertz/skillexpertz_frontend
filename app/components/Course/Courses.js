"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Courses = ({ coursesData }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    const perPage = 6;

    // Filter + Search
    const filteredCourses = coursesData.filter(
        (course) =>
            course.title.toLowerCase().includes(search.toLowerCase()) &&
            (category ? course.category === category : true)
    );

    // Pagination
    const totalPages = Math.ceil(filteredCourses.length / perPage);
    const paginatedCourses = filteredCourses.slice(
        (page - 1) * perPage,
        page * perPage
    );

    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Header */}
            <div className="text-center mb-12 h-[300px] flex flex-col justify-center items-center" style={{
                backgroundImage: "url('/course_page_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <h1 className="text-4xl font-bold text-gray-800">Featured Courses</h1>
                <p className="text-gray-500">Home &gt; Courses</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-10 px-6 lg:px-60 relative">
                <div className="absolute top-0 -left-20 w-72 h-72 bg-gradient-to-r from-[#F2277E] to-[#5F2DED] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-[#5F2DED] to-[#F2277E] rounded-full blur-3xl opacity-20 animate-pulse"></div>

                {/* Sidebar Filters */}
                <aside className="bg-white p-6 rounded-2xl shadow-md">
                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search product"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-6"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Categories */}
                    <h3 className="font-semibold mb-2">Categories</h3>
                    <ul className="space-y-2 mb-6">
                        {["Mechanical", "Development", "Data & Tech", "UX Design"].map(
                            (cat) => (
                                <li
                                    key={cat}
                                    className={`cursor-pointer ${category === cat ? "text-blue-500 font-semibold" : ""
                                        }`}
                                    onClick={() => setCategory(cat)}
                                >
                                    {cat}
                                </li>
                            )
                        )}
                    </ul>

                    {/* Skill Level */}
                    <h3 className="font-semibold mb-2">Skill Level</h3>
                    <ul className="space-y-2">
                        {["Beginner", "Intermediate", "Advanced"].map((level) => (
                            <li key={level} className="text-gray-600 cursor-pointer">
                                {level}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Courses Grid */}
                <main className="lg:col-span-3">
                    {/* Sorting */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-600">
                            Showing {paginatedCourses.length} of {filteredCourses.length} Results
                        </p>
                        <select className="border border-gray-200 rounded-lg px-4 py-2">
                            <option>Sort by New</option>
                            <option>Sort by Price</option>
                            <option>Sort by Duration</option>
                        </select>
                    </div>

                    {/* Course Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedCourses.map((course) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
                            >
                                <div className="h-36 bg-gray-200 rounded-lg mb-4"></div>
                                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    {course.lessons} Lessons • {course.duration}
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    ${course.price}{" "}
                                    <span className="text-gray-400 line-through ml-2">
                                        ${course.oldPrice}
                                    </span>
                                    {course.isFree && (
                                        <span className="ml-2 text-green-500 font-semibold">Free</span>
                                    )}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">By {course.teacher}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center space-x-4 mt-8">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                        >
                            «
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setPage(i + 1)}
                                className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                        >
                            »
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Courses