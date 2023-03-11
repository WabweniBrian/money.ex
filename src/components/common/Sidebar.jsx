/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BiCloud } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data/links";
import {
  closeSidebar,
  turnOnDarkMode,
  turnOnLightMode,
  uiStore,
} from "../../features/uiSlice";

const Sidebar = () => {
  const rootDoc = document.querySelector(":root");
  const { mode, isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("modal")) dispatch(closeSidebar());
  };

  const setDarkMode = () => {
    dispatch(turnOnDarkMode());
    rootDoc.classList.add("dark");
  };

  const setLightMode = () => {
    dispatch(turnOnLightMode());
    rootDoc.classList.remove("dark");
  };

  // Store mode value to localStorage;
  useEffect(() => {
    rootDoc.classList.add(`${mode}`);
    localStorage.setItem("Moneyexe-theme-mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <div
      className={`modal ${isSidebarOpen && "open"}`}
      onClick={handleCloseSidebar}
    >
      <div className={`dialog ${isSidebarOpen && "open"}`}>
        <div className="flex-center-between border-b pt-3 pb-2 dark:border-dark lg:hidden">
          <p className="uppercase">menu</p>
          <div
            className="icon-box lg:hidden"
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </div>
        </div>
        {/* Logo */}
        <Link to="/" className="p-2 hidden lg:block !opacity-100">
          <img
            src={mode === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt="logo"
            className="w-32"
          />
        </Link>
        <div className="mt-5">
          {links.map(({ id, title, icon, url }) => (
            <NavLink
              to={url}
              key={id}
              end={url === "/"}
              className="flex-align-center gap-x-3 px-2 py-2 my-3"
              onClick={() => dispatch(closeSidebar())}
            >
              {icon}
              <span>{title}</span>
            </NavLink>
          ))}
        </div>

        {/* ---------------------------------Theme toggle------------------------------ */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-primary dark:bg-dark-light rounded-xl w-4/5 h-[120px] flex-center-center">
          <div className="flex-align-center gap-3 select-none bg-slate-100 px-4 py-1 dark:bg-main-dark rounded-lg w-fit">
            <div
              className={`flex-align-center gap-2 sm:cursor-pointer ${
                mode === "light" &&
                "bg-slate-300 dark:bg-dark-light rounded-lg px-3 py-1 "
              }`}
              onClick={setLightMode}
            >
              <FiSun /> <span className="text-sm text-muted">Light</span>
            </div>
            <div
              className={`flex-align-center gap-2 sm:cursor-pointer ${
                mode === "dark" &&
                "bg-slate-300 dark:bg-dark-light rounded-lg px-3 py-1 "
              }`}
              onClick={setDarkMode}
            >
              <FiMoon /> <span className="text-sm text-muted">dark</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 -z-10">
            <BiCloud className="text-slate-300 opacity-30 dark:opacity-10 text-6xl" />
          </div>
          <div className="absolute bottom-0 left-0 -z-10">
            <BiCloud className="text-slate-300 opacity-30 dark:opacity-10 text-6xl" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-5xl">
            <div className="finger"> 👇</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
