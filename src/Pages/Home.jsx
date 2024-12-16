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
                ease: "power1.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                },
            }
        );
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-slate-100 p-4 md:p-0">
                {/* First Section */}
                <section className="flex flex-1 items-center justify-center md:justify-start md:ml-60 px-4 lg:px-0 overflow-hidden">
                    <div className="text-center md:text-left max-w-2xl space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Roboto] font-bold text-gray-800 leading-tight tracking-wider">
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
                        <h3 className="text-4xl bg-[white] text-center p-2.5 shadow-lg border rounded font-[Roboto] text-w-shadow">
                            We Are Here To Take Care Of Your
                        </h3>
                        <p className="text-xl text-[#333] max-w-2xl mx-auto mt-4 font-serif text-b-shadow">
                            Discover our comprehensive range of medical services designed to
                            support your health journey
                        </p>
                        <h3 className="text-2xl mt-5 w-screen text-left ml-3 font-serif text-black underline underline-offset-4"
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
            <Footer />
        </>
    );
}

export default Home;
