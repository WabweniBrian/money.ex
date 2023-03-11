import { useState } from "react";
import { accounts } from "../../data/dummyData";
import { BiCheck, BiMap } from "react-icons/bi";
import {
  FiBriefcase,
  FiCalendar,
  FiFlag,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const You = () => {
  const [checked, setChecked] = useState(1);

  const handleCheck = (id) => {
    setChecked(id);
  };

  return (
    <div>
      <h1 className="font-semibold">
        Is this a personal or business transfer?
      </h1>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {accounts.map(({ id, icon, title, text, iconBg, bg, border }) => {
          return (
            <div
              key={id}
              className={`relative h-[100px] rounded-lg overflow-hidden flex-align-center sm:cursor-pointer ${bg} ${
                id === checked && border
              }`}
              onClick={() => handleCheck(id)}
            >
              <div
                className={`flex-shrink-0 w-1/5 h-full grid place-items-center text-4xl text-white rounded-r-full ${iconBg}`}
              >
                {icon}
              </div>
              <div className="p-3">
                <h1 className="font-semibold">{title}</h1>
                <p className="text-sm">{text}</p>
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
      <div className="mt-3">
        <h1 className="font-semibold">Fill in your details</h1>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>
              Full legal first and middle name{" "}
              <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiUser />
              <input type="text" name="name" placeholder="Enter first name" />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>
              Full legal first name(s){" "}
              <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiUser />
              <input type="text" name="name" placeholder="Enter last name" />
            </div>
          </div>
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>
              Country <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiFlag />
              <select className="!py-2">
                <option value="Uganda">Uganda</option>
                <option value="Kenya">Kenya</option>
                <option value="Tanzania">Tanzania</option>
                <option value="United States">United States</option>
              </select>
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>
              Address <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <BiMap />
              <input type="text" name="address" placeholder="Enter address" />
            </div>
          </div>
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>
              City <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiBriefcase />
              <input type="text" name="city" placeholder="Enter city" />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>
              Postal code <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiUser />
              <input type="text" name="postal-code" placeholder="Code here" />
            </div>
          </div>
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>
              Date of birth <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiCalendar />
              <input type="date" name="date" />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>
              Phone <span className="text-secondaryOrange">*</span>
            </p>
            <div className="input-with-icon mt-2">
              <FiPhone />
              <input type="number" name="phone" placeholder="Phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default You;
