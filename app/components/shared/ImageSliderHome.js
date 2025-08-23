"use client";
import Image from "next/image";

export default function ImageSlider() {
    const images = [
        "/slider_img/slider_img_1.jpg",
        "/slider_img/slider_img_2.jpg",
        "/slider_img/slider_img_3.jpg",
        "/slider_img/slider_img_4.jpg",
        "/slider_img/slider_img_5.jpg",
        "/slider_img/slider_img_6.jpg",
        "/slider_img/slider_img_7.jpg",
        "/slider_img/slider_img_8.jpg"
    ];

    return (
        <div className="px-10 mt-20">

            <div className="slider-container overflow-hidden w-full bg-white py-8">
                <div className="slider-track flex">
                    {[...images, ...images].map((src, idx) => (
                        <div
                            key={idx}
                            className="slider-item flex-shrink-0 w-[320px] h-[180px] mx-4 rounded-lg overflow-hidden shadow-lg"
                        >
                            <Image
                                src={src}
                                alt={`Slider Image ${idx + 1}`}
                                width={420}
                                height={180}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
