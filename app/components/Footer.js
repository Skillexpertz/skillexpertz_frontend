"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaVimeoV, FaSkype, FaClock, FaArrowUp } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-[#0d0c23] text-white pt-16 pb-6">
            {/* Top Section */}
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-10 gap-6">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Still You Need Our <span className="text-purple-500">Support</span> ?
                        </h2>
                        <p className="text-gray-400 mt-2">
                            Don’t wait make a smart & logical quote here. Its pretty easy.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="px-4 py-2 w-72 bg-[#1e1d35] text-gray-300 outline-none rounded-l-md"
                        />
                        <button className="bg-purple-500 px-4 md:px-6 py-2 rounded-r-md hover:bg-purple-600 transition">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
                    {/* About Us */}
                    <div>
                        <h3 className="font-bold mb-4">About us</h3>
                        <p className="text-gray-400 mb-6">
                            Corporate clients and leisure travelers has been relying on Groundlink
                            for dependable safe, and professional chauffeured car end service in
                            major cities across World.
                        </p>
                        <div className="flex items-center gap-4 bg-purple-600 p-4 w-fit rounded">
                            <FaClock className="text-2xl" />
                            <div>
                                <p className="text-sm font-semibold">OPENING HOURS</p>
                                <p className="text-sm">Mon - Sat (8.00 - 6.00)</p>
                                <p className="text-sm">Sunday - Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="font-bold mb-4">Usefull Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>About Us</li>
                            <li>Teachers</li>
                            <li>Partner</li>
                            <li>Room-Details</li>
                            <li>Gallery</li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="font-bold mb-4">Course</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>UI UX Design</li>
                            <li>Web Development</li>
                            <li>Business Strategy</li>
                            <li>Software Development</li>
                            <li>Business English</li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h3 className="font-bold mb-4">Recent Post</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center">
                                <img
                                    src="https://placehold.co/80x80"
                                    alt="post"
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <p className="text-xs text-gray-400">02 Apr 2025</p>
                                    <p className="font-semibold">Best Your Business</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <img
                                    src="https://placehold.co/80x80"
                                    alt="post"
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <p className="text-xs text-gray-400">02 Apr 2025</p>
                                    <p className="font-semibold">Keep Your Business</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <img
                                    src="https://placehold.co/80x80"
                                    alt="post"
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <p className="text-xs text-gray-400">02 Apr 2025</p>
                                    <p className="font-semibold">Nice Your Business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="logo" className="w-6 h-6" />
                        <span className="text-xl font-bold text-purple-500">SkillBoost</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Copyright © 2025 All Rights Reserved.
                    </p>
                    <div className="flex gap-4 text-gray-400 text-lg mt-4 md:mt-0">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaVimeoV className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                        <FaSkype className="hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Back to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200 flex items-center justify-center"
            >
                <FaArrowUp className="text-2xl" />
            </button>

        </footer>
    );
}
