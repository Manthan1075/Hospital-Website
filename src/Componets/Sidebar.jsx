import React, { useState } from "react";
import {
  Menu,
  MenuOpen,
  EditCalendarOutlined,
  HelpOutline,
  HomeOutlined,
  MedicalInformationOutlined,
  MedicationOutlined,
  PersonAddOutlined,
  AccountBalanceWalletOutlined,
  History,
  AccountCircleOutlined,
  PowerSettingsNewOutlined,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/", value: "Home", icon: <HomeOutlined /> },
    { to: "/appoinment", value: "Appoinment", icon: <EditCalendarOutlined /> },
    { to: "/help", value: "Help", icon: <HelpOutline /> },
    { to: "/services", value: "Services", icon: <MedicalInformationOutlined /> },
    { to: "/medicine", value: "Medicine", icon: <MedicationOutlined /> },
    { to: "/doctors", value: "Doctors", icon: <PersonAddOutlined /> },
    { to: "/billing", value: "Billing", icon: <AccountBalanceWalletOutlined /> },
    { to: "/history", value: "History", icon: <History /> },
  ];

  return (
    <>
      <button
        className="fixed top-2 left-3 z-10 p-3 bg-white rounded-full shadow-md hover:bg-blue-100 text-blue-600 transition-all"
        onClick={toggleSidebar}
      >
        {isOpen ? <MenuOpen /> : <Menu />}
      </button>


      <div
        className={`fixed top-0 left-0 h-screen bg-[whitesmoke] shadow-lg border-r-2 transition-all duration-300 ${isOpen ? "w-[16rem]" : "w-20"
          }`}
      >
        <div className={`flex items-center justify-center w-full  gap-4 p-4 border-b  shadow-md ${isOpen ? "block" : "opacity-0"}`}>
          <h3 className={`text-2xl font-bold text-blue-600 ml-8 ${isOpen ? "block" : "hidden"}`}>Well Care</h3>

          <button className="border p-2 text-yellow-400 font-bold ml-1 rounded-full"
            onClick={() => { setDarkMode(!darkMode) }}
          >
            {darkMode ? (<DarkMode className="hover:text-yellow-200" />) : (
              <LightMode className="hover:text-black" />)}
          </button>
        </div>


        <nav className="flex flex-col mt-6">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              title={link.value}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 mx-2 my-1 rounded-lg transition-colors ${isActive
                  ? "bg-[#3D3BF3] text-white hover:bg-blue-800"
                  : "text-gray-800 hover:border hover:shadow-lg"
                }`
              }
            >
              <div className={({ isActive }) => `text-xl ${isActive ? "text-white" : ""}`}>{link.icon || "🔷"}</div>
              <span className={`text-md font-medium ${isOpen ? "block" : "hidden"}`}>
                {link.value}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-4 left-0 w-fit flex items-center gap-4 p-4 bg-white shadow-lg border rounded-lg m-2">
          <AccountCircleOutlined className="text-blue-600 text-3xl" />
          {isOpen && (
            <div className="flex gap-3 align-middle">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-700">Username</h3>
                <span className="text-sm text-gray-500">user@email.com</span>
              </div>
              <button className=" text-red-500 p-2 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ">
                <PowerSettingsNewOutlined />
              </button>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default Sidebar;
