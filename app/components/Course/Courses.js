"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getRandomColor } from "../utils/variables";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Courses = ({ coursesData }) => {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [skillLevels, setSkillLevels] = useState([]);
    const [tags, setTags] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 6;
    const router = useRouter();



    const allCategories = ["Mechanical", "Development", "Data & Tech", "UX Design"];
    const allSkillLevels = ["Beginner", "Intermediate", "Advanced"];
    const allTags = ["Mechanic", "English", "Computer Science", "Data & Tech", "UX Design"];



    // Toggle filter values
    const toggleFilter = (value, setFn, current) => {
        if (current.includes(value)) {
            setFn(current.filter((v) => v !== value));
        } else {
            setFn([...current, value]);
        }
        setPage(1);
    };

    // Reset all filters
    const resetFilters = () => {
        setCategories([]);
        setSkillLevels([]);
        setTags([]);
        setSearch("");
        setPage(1);
    };

    // Filter + Search
    const filteredCourses = coursesData.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            categories.length > 0 ? categories.includes(course.category) : true;

        const matchesSkill =
            skillLevels.length > 0 ? skillLevels.includes(course.level) : true;

        const matchesTag =
            tags.length > 0 ? tags.some((tag) => course.tags?.includes(tag)) : true;

        return matchesSearch && matchesCategory && matchesSkill && matchesTag;
    });

    // Pagination
    const totalPages = Math.ceil(filteredCourses.length / perPage);
    const paginatedCourses = filteredCourses.slice(
        (page - 1) * perPage,
        page * perPage
    );


    const handleCardClick = (course) => {
        router.push(`/courses/${course.id}`);
    };


    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Header */}
            <div
                className="text-center mb-12 h-[300px] flex flex-col justify-center items-center"
                style={{
                    backgroundImage: "url('/course_page_bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-4xl font-bold text-gray-800">Featured Courses</h1>
                <p className="text-gray-500">Home &gt; Courses</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-10 px-6 lg:px-60 relative">
                {/* Gradient Blobs */}
                <div className="absolute top-0 -left-20 w-72 h-72 bg-gradient-to-r from-[#F2277E] to-[#5F2DED] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-[#5F2DED] to-[#F2277E] rounded-full blur-3xl opacity-20 animate-pulse"></div>

                {/* Sidebar Filters */}
                <aside className="p-6">
                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search product"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-6"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Categories */}
                    <div className="rounded-2xl shadow-md bg-white p-4 my-5">
                        <h3 className="font-semibold mb-2">Categories</h3>
                        <ul className="space-y-2 mb-6">
                            {allCategories.map((cat) => (
                                <li key={cat}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={categories.includes(cat)}
                                            onChange={() => toggleFilter(cat, setCategories, categories)}
                                        />
                                        {cat}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Skill Level */}
                    <div className="rounded-2xl shadow-md bg-white p-4 my-5">
                        <h3 className="font-semibold mb-2">Skill Level</h3>
                        <ul className="space-y-2 mb-6">
                            {allSkillLevels.map((level) => (
                                <li key={level}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={skillLevels.includes(level)}
                                            onChange={() =>
                                                toggleFilter(level, setSkillLevels, skillLevels)
                                            }
                                        />
                                        {level}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className="rounded-2xl shadow-md bg-white p-4 my-5">
                        <h3 className="font-semibold mb-2">Tags</h3>
                        <ul className="space-y-2">
                            {allTags.map((tag) => (
                                <li key={tag}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={tags.includes(tag)}
                                            onChange={() => toggleFilter(tag, setTags, tags)}
                                        />
                                        {tag}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Courses Grid */}
                <main className="lg:col-span-3">
                    {/* Sorting + Reset */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-600">
                            Showing {paginatedCourses.length} of {filteredCourses.length} Results
                        </p>
                        <div className="flex items-center gap-4">
                            <select className="border border-gray-200 rounded-lg px-4 py-2">
                                <option>Sort by New</option>
                                <option>Sort by Price</option>
                                <option>Sort by Duration</option>
                            </select>
                            <button
                                onClick={resetFilters}
                                className="text-sm text-red-500 underline"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Course Cards */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedCourses.map((course) => {
                            const fullStars = Math.floor(course.rating);
                            const halfStar = course.rating % 1 >= 0.5;
                            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

                            return (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition hover:scale-105 hover:cursor-pointer relative h-[370px] flex flex-col"
                                    onClick={() => handleCardClick(course)}
                                >
                                    {/* Category Tag */}
                                    <span
                                        className={`absolute top-3 left-3 ${getRandomColor()} text-white text-xs font-semibold px-2 py-1 rounded-md`}
                                    >
                                        {course.category}
                                    </span>

                                    {/* Image */}
                                    <div className="h-36 rounded-lg mb-4">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Title & Info */}
                                    <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {course.courseContent.length} Lessons • {course.duration}
                                    </p>

                                    {/* Price */}
                                    <p className="text-gray-800 font-semibold">
                                        ${course.price}{" "}
                                        <span className="text-gray-400 line-through ml-2">
                                            ${course.oldPrice}
                                        </span>
                                        {course.isFree && (
                                            <span className="ml-2 text-green-500 font-semibold">Free</span>
                                        )}
                                    </p>

                                    <hr className="text-gray-300 mt-auto" />

                                    {/* Instructor + Rating */}
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-sm text-gray-500">By {course.instructor}</p>
                                        <div className="flex items-center text-yellow-400 text-sm">
                                            {Array.from({ length: fullStars }, (_, i) => (
                                                <FaStar key={`full-${i}`} />
                                            ))}
                                            {halfStar && <FaStarHalfAlt />}
                                            {Array.from({ length: emptyStars }, (_, i) => (
                                                <FaRegStar key={`empty-${i}`} />
                                            ))}
                                            <span className="ml-1 text-gray-600 text-xs">
                                                {course.rating.toFixed(1)}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
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
                                className={`px-3 py-1 rounded ${page === i + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
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
        </div >
    );
};

export default Courses;
