import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white  w-full ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center rtl:space-x-reverse">
                    <Image src="/logo.png" className="h-8" alt="Flowbite Logo" width={50} height={50} />
                    <div className='mx-2'>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#F1287E]">Skill</span><span className="text-2xl font-semibold whitespace-nowrap text-[#5F2DED]">Expertz</span>
                    </div>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-gray-700 font-semibold rounded-lg text-lg px-4 py-2 text-center">Login</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#5F2DED] rounded-sm md:bg-transparent  md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-800 rounded-sm md:hover:bg-transparent md:p-0 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-800 rounded-sm md:hover:bg-transparent md:p-0 ">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-800 rounded-sm md:hover:bg-transparent md:p-0 ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar