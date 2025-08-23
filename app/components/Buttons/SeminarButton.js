"use client";
import Link from "next/link";

export default function SeminarButton({ seminarUrl }) {
    return (
        <div className="w-full flex items-center justify-center py-12">
            <Link
                href={seminarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block"
            >
                {/* Glowing background graphic */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></span>

                {/* Actual button */}
                <span className="relative px-8 py-3 bg-purple-600 text-white font-bold text-lg rounded-full shadow-lg transform transition-transform animate-pulse-scale">
                    🎤 Join the Seminar
                </span>
            </Link>
        </div>
    );
}
