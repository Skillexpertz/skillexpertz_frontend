"use client"
import React from 'react'
import PillLabels from '../shared/PillLabels'
import { motion } from "framer-motion";

const ContactHomepage = () => {
    return (
        // <div className="relative h-[700px] rounded-2xl w-full">
        //     <div
        //         style={{
        //             backgroundImage: "url('/contact_home_bg.png')",
        //             backgroundSize: "cover",
        //             backgroundPosition: "center",
        //         }} className='h-[521px] flex flex-row'>
        //         <div className='w-[50%] h-full flex flex-col items-center justify-center'>
        //             <PillLabels title="Contact Us" className="align-left" />
        //             <h1 className="text-4xl md:text-6xl font-bold leading-snug mb-6 text-white ">
        //                 Get In Touch
        //             </h1>
        //             <p className="text-pink-500 tracking-wider uppercase mb-2 text-white">
        //                 Education Solution
        //             </p>
        //             <p className="text-white text-xl">
        //                 We are here to help you
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <section className="relative text-white h-[600px]" >
            <div style={{
                backgroundImage: "url('/contact_home_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
                className='w-full h-[530px]'>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='my-auto'
                    >
                        <PillLabels title="Contact Us" className="align-left" />
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                            Register Your <span className="text-yellow-300">Account</span><br />
                            Get free access to{" "}
                            <span className="text-yellow-400">60000</span> online courses
                        </h2>
                        <p className="mt-4 text-lg text-indigo-100">
                            Learn something new & build your career from anywhere in the world.
                        </p>
                    </motion.div>

                    {/* Right Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#F5F5FE] text-gray-800 p-8 rounded-2xl shadow-xl shadow-indigo-500/50 h-[600px] mt-10"
                    >
                        <h3 className="text-xl font-semibold mb-6 ">Fill Your Registration</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-gray-200  rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-gray-200  rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full bg-gray-200  rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full bg-gray-200  rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <textarea
                                rows="3"
                                placeholder="Comment"
                                className="w-full bg-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-7 rounded-md transition"
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