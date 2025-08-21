"use client";
import { FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FiltersPanel({
    search,
    setSearch,
    categories,
    setCategories,
    skillLevels,
    setSkillLevels,
    tags,
    setTags,
    allCategories,
    allSkillLevels,
    allTags,
    toggleFilter
}) {
    const [showFilters, setShowFilters] = useState(false);

    // Filter content (shared for desktop + mobile)
    const filterContent = (
        <>
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
                <ul className="space-y-2 mb-6 overflow-scroll max-h-[300px] overflow-x-hidden">
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
                <ul className="space-y-2 overflow-scroll max-h-[300px] overflow-x-hidden">
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
        </>
    );

    return (
        <>
            {/* Mobile & Tablet Filters Toggle */}
            <div className="lg:hidden flex justify-center mb-4">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
                >
                    <FaFilter />
                    Filters
                </button>
            </div>

            {/* Mobile & Tablet Filters (Collapsible) */}
            <motion.aside
                initial={{ height: 0, opacity: 0 }}
                animate={showFilters ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden p-6 overflow-hidden bg-white rounded-lg shadow-md"
            >
                {filterContent}
            </motion.aside>

            {/* Desktop Filters */}
            <aside className="hidden lg:block p-6">{filterContent}</aside>

        </>
    );
}
