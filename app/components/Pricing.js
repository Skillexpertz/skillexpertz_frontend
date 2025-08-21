"use client"
import { motion } from "framer-motion";
import PillLabels from "./shared/PillLabels";
import { pricingPlans } from "./utils/variables";

const Pricing = () => {
    return (
        <section className="py-16 bg-white">
            <div className="text-center mb-12">
                <PillLabels title="Pricing" className="mx-auto" />
                <h2 className="text-3xl font-bold mt-4">
                    Choose The Best Package <br /> For your Learning
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10 lg:px-0">
                {pricingPlans.map((plan, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className="bg-[#F5F5FE] shadow-xl rounded-2xl p-8 flex flex-col"
                    >
                        <h3 className="text-lg font-semibold">{plan.name}</h3>
                        <p className="text-4xl font-bold mt-4">
                            {plan.price}
                            <span className="text-base font-medium text-gray-500">{plan.period}</span>
                        </p>
                        <p className="text-gray-500 mt-1">Perfect for startup</p>

                        <ul className="mt-6 space-y-3">
                            {plan.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className={`flex items-center gap-2 ${feature.available ? "text-gray-800" : "text-gray-400 line-through"
                                        }`}
                                >
                                    <span
                                        className={`w-2.5 h-2.5 rounded-full ${feature.available ? "bg-pink-500" : "bg-gray-300"
                                            }`}
                                    />
                                    {feature.text}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`mt-8 w-full py-3 text-white rounded-lg shadow-lg ${plan.buttonColor}`}
                        >
                            Get Started
                        </button>
                        <p className="text-xs text-gray-400 text-center mt-3">
                            No credit card required
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
