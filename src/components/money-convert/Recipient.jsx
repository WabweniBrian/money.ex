import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { FiChevronRight, FiLayers, FiMail, FiUser } from "react-icons/fi";
import { recipients } from "../../data/dummyData";

const Recipient = () => {
  const [checked, setChecked] = useState(2);

  const handleCheck = (id) => {
    setChecked(id);
  };

  return (
    <div>
      <h1 className="font-semibold">Who are you sending money to?</h1>
      <h1 className="font-semibold opacity-60">Your Recipeint</h1>
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        <div className="flex-center-between card !bg-slate-100 dark:!bg-dark-light">
          <div className="flex-align-center gap-2">
            <img
              src="/images/avatar.png"
              alt=""
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div>
              <h1 className="font-semibold">Wabz Braize</h1>
              <p className="text-sm">EUR account ending in 6901</p>
            </div>
          </div>
          <FiChevronRight />
        </div>

        <div className="flex-center-between card !bg-slate-100 dark:!bg-dark-light">
          <div className="flex-align-center gap-2">
            <img
              src="/images/avatar-2.png"
              alt=""
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div>
              <h1 className="font-semibold">Raven Kent</h1>
              <p className="text-sm">GBP account ending in 2345</p>
            </div>
          </div>
          <FiChevronRight />
        </div>
      </div>
      <h1 className="font-semibold opacity-60 mt-7">New Recipient</h1>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {recipients.map(({ id, icon, title, iconBg, bg, border }) => {
          return (
            <div
              key={id}
              className={`relative h-[100px] rounded-lg overflow-hidden flex-center-center sm:cursor-pointer ${bg} ${
                id === checked && border
              }`}
              onClick={() => handleCheck(id)}
            >
              <div className="text-center">
                <div
                  className={`icon w-14 h-14 grid place-items-center text-4xl text-white rounded-full mx-auto ${iconBg}`}
                >
                  {icon}
                </div>

                <h1 className="font-semibold mt-2">{title}</h1>
              </div>
              {id === checked && (
                <div
                  className={`w-7 h-7 absolute -top-1 -right-1 rounded grid place-items-center ${iconBg}`}
                >
                  <BiCheck className="text-white" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <h1 className="font-semibold">Send money to someone else</h1>
        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>
              Their email <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiMail />
              <input
                type="text"
                name="email"
                placeholder="wabwenib66@gmail.com"
              />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit sm:mt-6">
            <div className="input-check">
              <input type="checkbox" name="" id="details" />
              <label htmlFor="details">I know thier bank details</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-semibold">Send money to someone else</h1>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>
              Full name of the account holder{" "}
              <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiUser />
              <input type="text" name="name" placeholder="Enter first name" />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>
              IBAN <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiLayers />
              <input type="text" name="number" placeholder="Enter IBAN " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipient;
