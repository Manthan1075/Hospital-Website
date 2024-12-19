import React from 'react'
import drImg1 from "../Assets/Doc-img/dr-img1.jpg";
import drImg3 from "../Assets/Doc-img/dr-img2.jpg";
import drImg2 from "../Assets/Doc-img/dr-img3.jpg";
import drImg4 from "../Assets/Doc-img/dr-img4.webp";
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DoctorCard() {
    const DocList = [
        { img: drImg1, name: "Dr. Neha Shah", speciality: "Cardiology", exp: "12 Years" },
        { img: drImg2, name: "Dr. Krupa Raval", speciality: "Neurology", exp: "15 Years" },
        { img: drImg3, name: "Dr. Peter Parker", speciality: "Orthopedics", exp: "10 Years" },
        { img: drImg4, name: "Dr. Tony Stark", speciality: "General Medicine", exp: "8 Years" }
    ]

    useGSAP(() => {
        gsap.fromTo(
            ".card",
            {
                opacity: 0,
                y: 80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: ".card",
                    start: "top 100%",
                    toggleActions: "play none none play",
                },
            }
        );
    });



    return (
        <>
            <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 tracking-wider font-[Cormorant Garamond]">
                            Meet Our Medical Experts
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                        {DocList.map((doctor, index) => (
                            <div
                                key={index}
                                className="
                        bg-white rounded-2xl shadow-lg overflow-hidden 
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                    "
                            >
                                <div className="relative group">
                                    {/* Doctor Image */}
                                    <div className="w-full h-56 sm:h-64 overflow-hidden">
                                        <img
                                            src={doctor.img}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                            {doctor.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-2">{doctor.speciality}</p>
                                        <p className="text-gray-700 font-medium">{doctor.exp} Experience</p>
                                    </div>

                                    {/* Contact Button */}
                                    <div className="flex justify-center pb-6">
                                        <button className="
                                bg-blue-500 text-white px-4 sm:px-5 py-2 rounded-full shadow-md
                                hover:bg-blue-600 transition duration-300 ease-in-out
                            ">
                                            Contact Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default DoctorCard
