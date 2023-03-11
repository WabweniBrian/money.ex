import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
const RecipientInfo = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="mt-4 p-3 border rounded-lg dark:border-dark-light bg-slate-100 dark:bg-hover-color-dark mb-3">
      <div
        className="flex-center-between sm:cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className="flex-align-center gap-3">
          <img
            src="/images/avatar.png"
            alt=""
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
          <div>
            <h1 className="font-semibold capitalize">Wabweni Brian</h1>
            <p className="text-sm">
              EUR account ending in 6901 Mark as primary account to recieve EUR
            </p>
          </div>
        </div>
        <div className="icon-box !h-7 !w-7 border dark:border-dark-light">
          {show ? (
            <FiMinus className="text-lg" />
          ) : (
            <FiPlus className="text-lg" />
          )}
        </div>
      </div>
      <div
        className={`px-2 sm:px-8 mt-2 max-h-0 overflow-hidden transition-a ${
          show && "!max-h-screen"
        }`}
      >
        <div className="py-4">
          <div className="border-t dark:border-t-dark-light pt-3">
            <div className="flex-center-between">
              <div>
                <p className="text-sm opacity-60">Summary</p>
                <h1 className="font-semibold">EUR account ending in 6901</h1>
              </div>
              <div>
                <p className="text-sm opacity-60">Account holder name</p>
                <h1 className="font-semibold">Wabweni Brian</h1>
              </div>
            </div>
            <div className="flex-center-between mt-3">
              <div>
                <p className="text-sm opacity-60">Nickname</p>
                <Link className="text-primary">Add a nickname</Link>
              </div>
              <div>
                <p className="text-sm opacity-60">SWIFT/BIC code</p>
                <h1 className="font-semibold">DBBLBDDH107</h1>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm opacity-60">IBN/Account Number</p>
              <h1 className="font-semibold">0123076901</h1>
            </div>
          </div>
          <div className="flex-align-center gap-3 mt-3 flex-col sm:flex-row">
            <button className="btn btn-primary w-full sm:w-fit">
              send money
            </button>
            <button className="btn border border-secondaryOrange text-secondaryOrange w-full sm:w-fit">
              delete recipient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientInfo;
