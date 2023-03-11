import React from "react";
import { BiBriefcase, BiLogOut, BiUser, BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";
import { motion } from "framer-motion";

const Dropdown = () => {
  const { isDropdownOpen } = useSelector(uiStore);
  return (
    <>
      {isDropdownOpen && (
        <motion.div
          className="dropdown absolute right-0 top-full mt-1 p-2 !rounded-xl w-52 card card-shadow dark:shadow-none"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          <div className="flex-align-center space-x-3 p-2  sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark rounded-lg">
            <BiUserCircle className="text-muted" />
            <span className="text-muted">My Profile</span>
          </div>
          <div className="flex-align-center space-x-3 p-2 sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark rounded-lg">
            <BiUser className="text-muted" />
            <span className="text-muted">Manage Account</span>
          </div>
          <div className="flex-align-center space-x-3 p-2 sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark rounded-lg">
            <BiBriefcase className="text-muted" />
            <span className="text-muted">My Cards</span>
          </div>
          <div className="flex-align-center space-x-3 p-2 sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark rounded-lg">
            <BiLogOut className="text-muted" />
            <span className="text-muted">Sign out</span>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
