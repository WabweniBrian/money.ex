import React from "react";
import NotFoundImg from "../404.png";

const PageNotFound = () => {
  return (
    <div className="min-h-[70vh] flex-center-center text-center flex-col">
      <img src={NotFoundImg} alt="" className="w-[400px] -mt-20" />
      <h1 className="text-6xl font-bold opacity-50">Page Not Found!!</h1>
    </div>
  );
};

export default PageNotFound;
