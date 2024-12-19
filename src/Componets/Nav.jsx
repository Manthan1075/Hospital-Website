import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import {
    HomeOutlined,
    InfoOutlined,
    ManageAccountsOutlined,
    SupportAgentOutlined,
    SearchOutlined,
    LoginOutlined
} from "@mui/icons-material";
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';

const Nav = () => {

    const [visible, setVisible] = useState(false);

    function showSearchBox() {
        setVisible((prev) => !prev);
    }

    const Links = [
        { to: "/", Value: "Home", icon: <HomeOutlined /> },
        { to: "/about", Value: "About", icon: <InfoOutlined /> },
        { to: "/contact", Value: "contact", icon: <SupportAgentOutlined /> },
        { to: "/services", Value: "Services", icon: <ManageAccountsOutlined /> }
    ];

    // Animation GSAP

    useGSAP(() => {
        gsap.fromTo(".links", {
            scale: 0,
            y: 50
        }, {
            y: 0,
            scale: 1,
            stagger: 0.3,
            ease: "circ.in",
            duration: 1.3,
        })
    })


    return (
        <>
            <header className="flex w-full dark:bg-[#071952] bg-blue-600 text-white p-4 drop-shadow-2xl items-center">
                {/* Hospital Name */}
                <div className="flex items-center space-x-2 ml-4 sm:ml-20">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-[lora]">
                        Well Care Hospital
                    </h3>
                </div>

                {/* Navigation Links and Actions */}
                <div className="flex flex-1 justify-end items-center space-x-2">
                    {/* Navigation Links (Hidden on small screens) */}
                    <nav className="hidden sm:flex gap-4">
                        {Links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                className={({ isActive }) =>
                                    `links
                        px-4 py-2 rounded-xl text-white shadow-sm shadow-[#ffffff6c]
                        transition-all duration-300 ease-in-out
                        ${!isActive ? 'text-white/50 shadow-md hover:text-white ' : 'hover:text-slate-500/50 font-bold '}`
                                }
                            >
                                <span className="text-lg">{link.icon}</span>
                                <span>{link.Value}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Search Functionality */}
                    <div className="flex items-center">
                        {visible && (
                            <input
                                type="search"
                                placeholder="Search Here..."
                                className="
                        hidden sm:block border bg-transparent p-2.5 text-sm sm:text-base rounded shadow-lg shadow-slate-50/10 outline-none backdrop-blur-lg font-[times-new-roman] 
                        transition-all mr-2 focus:shadow-slate-50/15
                    "
                            />
                        )}
                        <button
                            className="
                    border border-blue-500 text-blue-400 p-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all 
                    duration-300 ease-in-out focus:outline-none active:scale-90 shadow-lg shadow-stone-300/30
                "
                            onClick={() => showSearchBox()}
                        >
                            <SearchOutlined fontSize="medium" />
                        </button>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        className="
                flex items-center gap-2 
                px-4 py-3 
                bg-gradient-to-r from-[royalblue] via-[#2d17cf] to-[#1960bc] 
                text-white font-bold rounded-full shadow-lg shadow-slate-200/15 
                hover:scale-105 transition-all duration-300 ease-in-out group active:scale-95
                border hover:border-white/20 transform hover:shadow-white/50
            "
                    >
                        <LoginOutlined className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="tracking-wider">Sign Up</span>
                    </button>
                </div>
            </header>


        </>
    );
};

export default Nav;