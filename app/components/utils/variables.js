export const colorClasses = [
    "bg-indigo-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-rose-600",
    "bg-red-600",
    "bg-orange-600",
    "bg-amber-600",
    "bg-green-600",
    "bg-emerald-600",
    "bg-teal-600",
    "bg-cyan-600",
    "bg-blue-600",
];

export const getRandomColor = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
};