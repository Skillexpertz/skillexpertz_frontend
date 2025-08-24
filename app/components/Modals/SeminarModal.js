import React from 'react';
import { motion } from "framer-motion";
import SeminarButton from '../Buttons/SeminarButton';

const SeminarModal = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 max-w-lg w-[90%] text-center"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-4">
                    📢 Upcoming Seminar
                </h2>
                <p className="text-white/90 mb-6">
                    Join us for an exciting seminar on the future of AI & education.
                    Learn from top experts and network with like-minded professionals.
                </p>

                {/* Reusable Button */}
                <div className="flex justify-center">
                    <SeminarButton onClick={onClose}>
                        Register Now
                    </SeminarButton>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white/70 hover:text-white text-xl"
                >
                    ✕
                </button>
            </motion.div>
        </motion.div>
    );
};

export default SeminarModal;
