import { motion } from "framer-motion";
import { BiBell, BiChevronDown, BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeNotifications,
  openSidebar,
  toggleDropdown,
  toggleNotifications,
  uiStore,
} from "../../features/uiSlice";
import Dropdown from "./DropDown";
import Notifications from "./Notifications";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { mode } = useSelector(uiStore);
  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch(closeDropdown());
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch(closeNotifications());
    }
  };
  const dispatch = useDispatch();
  return (
    <div
      className="navbar z-10 px-3 lg:px-6 py-2 fixed bg-main-bg dark:bg-main-dark"
      style={{ width: "calc(100vw - 250px)" }}
      onClick={handleClose}
    >
      <div className="flex-center-between">
        <div className="flex-align-center gap-1 md:gap-3">
          <Link to="/" className="p-2 lg:hidden flex-shrink-0 !opacity-100">
            <img
              src={
                mode === "dark"
                  ? "/mobile-logo-dark.png"
                  : "/mobile-logo-light.png"
              }
              alt="logo"
              className="w-8"
            />
          </Link>
          <div
            className="icon-box lg:hidden"
            onClick={() => dispatch(openSidebar())}
          >
            <BiMenu className="text-lg" />
          </div>
          <SearchBar />
        </div>

        {/*---------------------- Notifications toggle------------------------------------------------ */}
        <div className="flex-align-center gap-x-3 md:gap-x-1">
          <div
            className="icon-box !opacity-100 relative notification-btn"
            onClick={() => dispatch(toggleNotifications())}
          >
            <div className="relative">
              <BiBell className="notification-btn text-muted" />
              <div className="absolute w-2 h-2 bg-primary top-0 right-0 rounded-full notification-btn"></div>
            </div>
            <Notifications />
          </div>
          {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
          <div className=" flex-align-center space-x-1 md:pl-4 flex-shrink-0 relative">
            <div
              className="dropdown-btn absolute w-full h-full top-0 left-0 sm:cursor-pointer"
              onClick={() => dispatch(toggleDropdown())}
            ></div>
            <motion.img
              src="/images/avatar-2.png"
              alt=""
              className="w-8 h-8 rounded-full dropdown-btn"
              whileTap={{ scale: 0.5 }}
            />

            <BiChevronDown className="dropdown-btn" />
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
