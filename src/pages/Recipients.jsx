import React from "react";
import { Recipientinfo } from "../components/recipients";

const Recipients = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Recipients</h1>
      <div className="mt-5">
        <div className="flex-align-center gap-3 mt-3 flex-col sm:flex-row">
          <button className="btn btn-primary w-full sm:w-fit">
            add your bank account
          </button>
          <button className="btn border border-secondaryOrange text-secondaryOrange w-full sm:w-fit">
            add recipient
          </button>
        </div>
        <Recipientinfo />
      </div>
    </div>
  );
};

export default Recipients;
