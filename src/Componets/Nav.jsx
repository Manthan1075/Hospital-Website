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

    return (
        <>
            <header className="flex w-full dark:bg-[#071952] bg-blue-600 text-white p-4 drop-shadow-2xl items-center ">
                <div className="flex items-center space-x-2 ml-20">
                    <h3 className="text-3xl font-bold font-[lora]">
                        Well Care Hospital
                    </h3>
                </div>

                <div className="flex flex-1 justify-end items-center space-x-2 gap-1">
                    <nav className="flex gap-4" >
                        {Links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                className={({ isActive }) => (
                                    `
                                px-4 py-2 rounded-xl text-white shadow-sm shadow-[#ffffff6c]
                                transition-all duration-300 ease-in-out
                                ${!isActive ? 'text-white/50 shadow-md hover:text-white ' : 'hover:text-slate-500/50 font-bold '}
                                `
                                )}
                            >
                                <span className="text-lg">{link.icon}</span>
                                <span>{link.Value}</span>
                            </NavLink>
                        ))}
                    </nav>
                    <div>
                        {visible && (
                            <input type='search' placeholder='Seach Here..'
                                className='border bg-transparent p-2.5 text-lg rounded shadow-lg shadow-slate-50/10 outline-none backdrop-blur-lg font-[times-new-roman] transition-all mr-2
                                focus:shadow-slate-50/15
                                '
                            />
                        )}
                        <button
                            className="border border-blue-500 text-blue-400 p-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out focus:outline-none active:scale-90 shadow-lg shadow-stone-300/30"
                            onClick={() => showSearchBox()}
                        >
                            <SearchOutlined fontSize="medium" />
                        </button>

                    </div>
                    <button
                        className="
                         flex items-center gap-2 
                         px-4 py-3 
                         bg-gradient-to-r from-[royalblue] via-[#2d17cf] to-[#1960bc] 
                         text-white font-bold rounded-full shadow-lg shadow-slate-200/15 hover:scale-105 transition-all duration-300 ease-in-out group active:scale-95 borderborder-[#969696] hover:border-white/20 transform hover:shadow-white/50"
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