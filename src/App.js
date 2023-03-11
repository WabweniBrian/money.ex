import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import { closeDropdown, closeNotifications } from "./features/uiSlice";

import {
  Activity,
  Conversion,
  Dashboard,
  DebitCard,
  MoneyConvert,
  PageNotFound,
  Recipients,
  Settings,
} from "./pages";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
    dispatch(closeNotifications());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <>
      {showLoader && <Loader />}
      <div className="grid grid-cols-1 lg:grid-cols-16-auto">
        <div onClick={handleCloseDropdown}>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <div
            className="min-h-screen px-4 pt-20 pb-6 lg:px-6"
            onClick={handleCloseDropdown}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/debit-card" element={<DebitCard />} />
              <Route path="/money-convert" element={<MoneyConvert />} />
              <Route path="/money-convert/convert" element={<Conversion />} />
              <Route path="/recipients" element={<Recipients />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </>
  );
}

export default App;
