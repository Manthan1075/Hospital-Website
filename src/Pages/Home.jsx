import React, { useEffect, useRef } from "react";
import docimg from "../Assets/HomeDoctorimg-min.png";
import PharmacyImg from "../Assets/Services-img/Pharmacy.webp";
import OrthopedicImg from "../Assets/Services-img/Orthopedic.png";
import HematologyImg from "../Assets/Services-img/Hematology.jpg";
import PlasticSurgeryImg from "../Assets/Services-img/Plastic Surgery.jpg";
import NeurologyImg from "../Assets/Services-img/Neurology.png";
import OphthalmologyImg from "../Assets/Services-img/Ophthalmology.webp";
import DentalImg from "../Assets/Services-img/Dental.jpg";
import CardiologyImg from "../Assets/Services-img/Cardiology.jpeg";
import drImg1 from "../Assets/Doc-img/dr-img1.jpg";
import drImg3 from "../Assets/Doc-img/dr-img2.jpg";
import drImg2 from "../Assets/Doc-img/dr-img3.jpg";
import drImg4 from "../Assets/Doc-img/dr-img4.webp";
import { ArrowForward } from "@mui/icons-material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Componets/Footer.jsx"


gsap.registerPlugin(ScrollTrigger);

function Home() {
    const serviceslist = [
        { name: "Pharmacology", imgsrc: PharmacyImg },
        { name: "Orthopedic", imgsrc: OrthopedicImg },
        { name: "Hematology", imgsrc: HematologyImg },
        { name: "Plastic Surgery", imgsrc: PlasticSurgeryImg },
        { name: "Neurology", imgsrc: NeurologyImg },
        { name: "Ophthalmology", imgsrc: OphthalmologyImg },
        { name: "Dental Care", imgsrc: DentalImg },
        { name: "Cardiology", imgsrc: CardiologyImg },
    ];

    const DocList = [
        { img: drImg1, name: "Dr. Neha Shah", speciality: "Cardiology", exp: "12 Years" },
        { img: drImg2, name: "Dr. Krupa Raval", speciality: "Neurology", exp: "15 Years" },
        { img: drImg3, name: "Dr. Peter Parker", speciality: "Orthopedics", exp: "10 Years" },
        { img: drImg4, name: "Dr. Tony Stark", speciality: "General Medicine", exp: "8 Years" }
    ]

    const sectionRef = useRef(null);

    const { contextSafe } = useGSAP(() => {
        const section = sectionRef.current;

        gsap.fromTo(
            section.querySelectorAll(".service-card"),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "sine.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
            }
        );



        gsap.from("#heading", {
            y: 500,
            duration: 1.5,
            delay: 0.5,
            ease: "expo.inOut",
        })
        gsap.from("#heading2", {
            opacity: 0,
            duration: 1.5,
            ease: "sine.in",
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
            },
        })


    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-slate-100 p-4 md:p-0">
                {/* First Section */}
                <section className="flex flex-1 items-center justify-center md:justify-start md:ml-60 px-4 lg:px-0 overflow-hidden">
                    <div className="text-center md:text-left max-w-2xl space-y-8 overflow-hidden">
                        <h1 id="heading" className="text-4xl md:text-5xl lg:text-6xl font-[Roboto] font-bold text-gray-800 leading-tight tracking-wider">
                            Transform Your <br />
                            Health Journey <br />
                            With <br />
                            Expert Care
                        </h1>
                        <div className="flex justify-center md:justify-start">
                            <button
                                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Request Appointment
                                <ArrowForward className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </section>

                <div className="flex-1 flex items-center justify-center p-4 md:p-0">
                    <div
                        className="
                            w-full max-w-md h-[500px] md:h-[600px] lg:h-[700px]
                            bg-gradient-to-br from-blue-200 to-blue-400
                            rounded-[45%_55%_46%_54%/50%_60%_40%_50%]
                            shadow-lg overflow-hidden
                            flex items-center justify-center
                        "
                    >
                        <img
                            src={docimg}
                            loading="eager"
                            alt="Doctor image"
                            className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div
                ref={sectionRef}
                className="min-h-screen w-full bg-blue-50 pt-24 px-4 md:px-20 lg:px-32"
            >
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 id="heading2" className="text-4xl text-white bg-blue-700 text-center p-2.5 shadow-lg border rounded font-[times-new-roman] text-b-shadow">
                            We Are Here To Take Care Of Your Health
                        </h3>

                        <h3 className="text-3xl mt-7 w-screen text-left ml-3 font-serif text-black underline underline-offset-4"
                        >Our Services →</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {serviceslist.map((service, index) => (
                            <div
                                key={index}
                                className="service-card group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-blue-600 opacity-0"></div>

                                <img
                                    src={service.imgsrc}
                                    alt={service.name}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />

                                <div className="p-4 bg-white rounded-b-xl relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors">
                                        {service.name}
                                    </h3>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View All Services
                        </button>
                    </div>
                </div>
            </div>

            {/* Doctor Sections */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-16 lg:px-32">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wider font-[Cormorant Garamond]">
                            Meet Our Medical Experts
                        </h2>

                    </div>

                    {/* Doctor Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {DocList.map((doctor, index) => (
                            <div
                                key={index}
                                className="
                         doc-card  bg-white rounded-2xl shadow-lg overflow-hidden 
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                    "
                            >
                                <div className="relative group">
                                    {/* Doctor Image */}
                                    <div className="w-full h-56 overflow-hidden">
                                        <img
                                            src={doctor.img}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                            {doctor.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-2">{doctor.speciality}</p>
                                        <p className="text-gray-700 font-medium">{doctor.exp} Experience</p>
                                    </div>

                                    {/* Contact Button */}
                                    <div className="flex justify-center pb-6">
                                        <button className="
                                bg-blue-500 text-white px-5 py-2 rounded-full shadow-md
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


            <Footer />
        </>
    );
}

export default Home;
