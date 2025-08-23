"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { allCategories, allTags, getRandomColor } from "../utils/variables";
import { FaStar, FaStarHalfAlt, FaRegStar, FaFilter } from "react-icons/fa";
import Blobs from "../shared/Blobs";
import FiltersPanel from "./FiltersPanel";
import CourseCard from "./CourseCard";

const Courses = ({ coursesData }) => {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [skillLevels, setSkillLevels] = useState([]);
    const [tags, setTags] = useState([]);
    const [page, setPage] = useState(1);
    const [sortOption, setSortOption] = useState("rel");
    const [cardColors, setCardColors] = useState({});
    const [showFilters, setShowFilters] = useState(false)

    const perPage = 9;
    const router = useRouter();

    useEffect(() => {
        const newColors = {};
        coursesData.forEach(course => {
            newColors[course.id] = getRandomColor();
        });
        setCardColors(newColors);
    }, [coursesData]);

    const allSkillLevels = ["Beginner", "Intermediate", "Advanced"];



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
        setSortOption("rel");
    };

    // Filter + Search
    let filteredCourses = coursesData.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            categories.length > 0 ? categories.includes(course.category) : true;

        const matchesSkill =
            skillLevels.length > 0 ? skillLevels.includes(course.level) : true;

        const matchesTag =
            tags.length > 0 ? tags.some((tag) => course.tags?.includes(tag)) : true;

        return matchesSearch && matchesCategory && matchesSkill && matchesTag;
    });

    // Apply sorting
    let sortedCourses = [...filteredCourses];
    if (sortOption === "price-asc") {
        sortedCourses.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        sortedCourses.sort((a, b) => b.price - a.price);
    } else if (sortOption === "duration-asc") {
        sortedCourses.sort((a, b) => parseFloat(a.duration) - parseFloat(b.duration));
    } else if (sortOption === "duration-desc") {
        sortedCourses.sort((a, b) => parseFloat(b.duration) - parseFloat(a.duration));
    } else if (sortOption === "new-desc") {
        sortedCourses.sort((a, b) => b.id - a.id); // newest first
    } else if (sortOption === "new-asc") {
        sortedCourses.sort((a, b) => a.id - b.id); // oldest first
    } else {
        sortedCourses = [...filteredCourses];
    }

    // Pagination
    const totalPages = Math.ceil(sortedCourses.length / perPage);
    const paginatedCourses = sortedCourses.slice((page - 1) * perPage, page * perPage);


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
                {/* Gradient blobs */}
                <Blobs />

                {/* Sidebar Filters */}
                <FiltersPanel
                    search={search}
                    setSearch={setSearch}
                    categories={categories}
                    setCategories={setCategories}
                    skillLevels={skillLevels}
                    setSkillLevels={setSkillLevels}
                    tags={tags}
                    setTags={setTags}
                    allCategories={allCategories}
                    allSkillLevels={allSkillLevels}
                    allTags={allTags}
                    toggleFilter={toggleFilter}
                />


                {/* Courses Grid */}
                <main className="lg:col-span-3">
                    {/* Sorting + Reset */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <p className="text-gray-600 mb-5 md:mb-0">
                            Showing {paginatedCourses.length} of {filteredCourses.length} Results
                        </p>
                        <div className="flex justify-start md:justify-normal md:items-center gap-4">
                            <select className="border border-gray-200 rounded-lg px-4 py-2"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="rel">Relevance</option>
                                <option value="new-desc">Newest First</option>
                                <option value="new-asc">Oldest First</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="duration-asc">Duration: Short to Long</option>
                                <option value="duration-desc">Duration: Long to Short</option>
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
                            return (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: course.id * 0.1 }}

                                    onClick={() => handleCardClick(course)}
                                >
                                    <CourseCard course={course} />
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
