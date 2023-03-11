import { useState } from "react";
import { FiChevronDown, FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";
const SingleActivity = ({
  name,
  amount_in_euros,
  amount_in_pounds,
  status,
  avatar,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-3 border rounded-lg dark:border-dark-light bg-slate-100 dark:bg-hover-color-dark mb-3 hover:bg-slate-200/50 dark:hover:bg-dark-light">
      <div
        className="flex-center-between sm:cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className="flex-align-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
          <div>
            <h1 className="font-semibold capitalize">{name}</h1>
            <p
              className={`text-sm ${
                status === "Completed"
                  ? "text-secondaryGreen"
                  : "text-secondaryOrange"
              }`}
            >
              {status}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <h1 className="text-lg font-semibold">{amount_in_euros} EUR</h1>
            <p className="text-sm">{amount_in_pounds} GBP</p>
          </div>
          <div>
            <FiChevronDown
              className={`text-2xl transition-a ${show && "rotate-180"}`}
            />
          </div>
        </div>
      </div>
      <div
        className={`px-2 md:px-8 mt-2 max-h-0 overflow-hidden transition-a ${
          show && "!max-h-screen"
        }`}
      >
        <div className="py-4">
          <div className="border-t dark:border-t-dark-light pt-3">
            <div className="flex-center-between">
              <div className="flex-align-center gap-2">
                <Link className="text-primary">Update</Link>
                <Link>Details</Link>
              </div>
              <button className="btn bg-white dark:bg-[#494d61] flex-align-center gap-x-2">
                <FiGrid />
                <span>General</span>
              </button>
            </div>
            <h1 className="mt-2 font-semibold">Ready to pay?</h1>
            <p className="mt-2 text-sm">
              Next, send your money to our GBP account. We'll get started on
              your transfer the moment we recive your money. It won't take long,
              Just a couple of minutes and boom! It will be done.
            </p>
          </div>
          <div className="flex-align-center gap-3 mt-3 flex-col sm:flex-row">
            <button className="btn btn-primary w-full sm:w-fit">
              Continue verification
            </button>
            <button className="btn border border-secondaryOrange text-secondaryOrange w-full sm:w-fit">
              cancel this transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;
