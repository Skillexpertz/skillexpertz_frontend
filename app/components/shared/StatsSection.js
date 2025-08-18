import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";

function StatCard({ value, label, image }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const duration = 1500; // total time in ms
            const stepTime = Math.max(Math.floor(duration / end), 20); // prevent too fast

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-row items-center text-center px-6"
        >
            <div className="text-pink-600 text-4xl mb-2 my-auto mr-3">
                <Image src={`/${image}`} alt={label} width={40} height={40} />
            </div>
            <div>

                <h2 className="text-2xl font-bold text-left">
                    {count}
                    {value >= 1000 ? "k" : "+"}
                </h2>
                <p className="text-gray-600 uppercase text-sm">{label}</p>
            </div>
        </motion.div>
    );
}

export default function StatsSection() {
    const stats = [
        { value: 24, label: "Total Achievement", image: "achievment.svg" },
        { value: 104, label: "Total Students", image: "students.svg" },
        { value: 4, label: "Total Instructor", image: "instructor.svg" },
        { value: 153, label: "Happy Clients", image: "clients.svg" },
    ];

    return (
        <div className="flex justify-around py-10 flex-wrap w-[70%] mx-auto">
            {stats.map((stat, i) => (
                <StatCard key={i} {...stat} />
            ))}
        </div>
    );
}
