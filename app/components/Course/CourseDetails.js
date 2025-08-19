"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUser, FaClock, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

export default function CourseDetails({ course }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="bg-white">
            <div
                className="text-center mb-12 h-[300px] flex flex-col justify-center items-center"
                style={{
                    backgroundImage: "url('/course_page_bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto py-10 px-6 lg:px-1">
                {/* Left Section */}
                <div className="lg:col-span-2">
                    {/* Video/Image Preview */}
                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Category & Info */}
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">
                            {course.category}
                        </span>
                        <span>{course.language}</span>
                        <span>Last Update: Jul 2023</span>
                    </div>

                    {/* Title & Price */}
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-2xl font-bold">{course.title}</h1>
                        <span className="text-2xl font-semibold text-purple-600">
                            ${course.price}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="mt-4 text-gray-700">
                        {showMore
                            ? course.description + " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et."
                            : course.description.slice(0, 150) + "..."}
                        <button
                            className="text-purple-600 ml-2"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>

                    {/* What You Will Learn */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">What you’ll learn</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                            {course.WhatYouWillLearn.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                    <FaCheckCircle className="text-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Curriculum */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Course Content</h3>
                        <ul className="divide-y border rounded-lg">
                            {course.courseContent.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex justify-between items-center px-4 py-3 text-gray-700"
                                >
                                    <span>{item}</span>
                                    <span className="text-sm text-gray-500">
                                        {Math.floor(Math.random() * 10) + 5}:0{Math.floor(Math.random() * 9)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Pricing */}
                    <div className="bg-white shadow-lg p-6 rounded-lg border">
                        <h2 className="text-2xl font-bold text-purple-600">
                            ${course.price}
                        </h2>
                        <button className="w-full bg-purple-600 text-white py-3 mt-4 rounded-md hover:bg-purple-700 transition">
                            Add to cart
                        </button>
                        <div className="mt-4 space-y-2 text-gray-700 text-sm">
                            <p>Level: {course.level}</p>
                            <p>Enrolled: {Math.floor(Math.random() * 50) + 1} students</p>
                            <p>Duration: {course.duration}</p>
                            <p>Last Updated: Jul 13, 2023</p>
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white shadow p-6 rounded-lg border">
                        <h3 className="font-semibold mb-2">Requirements</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Basic Programming</li>
                            <li>Daily Practice</li>
                            <li>Regular Attendance</li>
                        </ul>
                    </div>

                    {/* Audience */}
                    <div className="bg-white shadow p-6 rounded-lg border">
                        <h3 className="font-semibold mb-2">Audience</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Technical People</li>
                            <li>Engineering Students</li>
                            <li>Programming Enthusiasts</li>
                        </ul>
                    </div>

                    {/* Instructor */}
                    <div className="bg-white shadow p-6 rounded-lg border text-center">
                        <Image
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt={course.instructor}
                            width={80}
                            height={80}
                            className="rounded-full mx-auto"
                        />
                        <h4 className="mt-2 font-semibold">{course.instructor}</h4>
                        <p className="text-sm text-gray-600">Lead Instructor</p>
                        <p className="mt-3 text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            pretium.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
