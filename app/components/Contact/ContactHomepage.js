"use client"
import React from 'react'
import PillLabels from '../shared/PillLabels'
import { motion } from "framer-motion";

const ContactHomepage = () => {
    return (
        <section className="relative text-white h-auto md:h-[600px]">
            <div
                style={{
                    backgroundImage: "url('/contact_home_bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-auto md:h-[530px] py-10 md:py-0"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="my-auto text-center md:text-left"
                    >
                        <PillLabels title="Contact Us" className="mx-auto md:mx-0 md:align-left" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                            Register Your <span className="text-yellow-300">Account</span><br />
                            Get free access to{" "}
                            <span className="text-yellow-400">60000</span> online courses
                        </h2>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-indigo-100">
                            Learn something new & build your career from anywhere in the world.
                        </p>
                    </motion.div>

                    {/* Right Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#F5F5FE] text-gray-800 p-10 md:p-5 rounded-2xl shadow-xl shadow-indigo-500/50 
                                   h-auto md:h-[600px] mt-6 md:mt-10"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">Fill Your Registration</h3>
                        <form className="space-y-3 sm:space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-gray-200 rounded-md px-3 sm:px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-gray-200 rounded-md px-3 sm:px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full bg-gray-200 rounded-md px-3 sm:px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full bg-gray-200 rounded-md px-3 sm:px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                            />
                            <textarea
                                rows="3"
                                placeholder="Comment"
                                className="w-full bg-gray-200 rounded-md px-3 sm:px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-7 rounded-md transition"
                            >
                                Sign Up →
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactHomepage
