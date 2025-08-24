"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileDropdown({ isOpen, onClose, navItems }) {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden backdrop-blur-lg bg-white/30 shadow-lg absolute top-[80px] left-0 w-full z-50 border-t border-white/20 rounded-b-xl"
                >

                    <ul className="flex flex-col p-4 space-y-3">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`block py-2 px-3 rounded-md ${isActive(item.href)
                                        ? "text-[#5F2DED] font-semibold bg-gray-100"
                                        : "text-gray-200 hover:text-[#5F2DED] hover:bg-gray-100"
                                        }`}
                                    onClick={onClose}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
