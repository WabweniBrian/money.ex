import { useState } from "react";
import { BiLockAlt, BiLockOpen } from "react-icons/bi";
import { FiLock } from "react-icons/fi";

const Password = () => {
  const [password, setPassword] = useState({
    old: "1234567",
    new: "1234567",
    confirm: "123456",
  });

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: [e.target.value] });
  };
  return (
    <div className="mt-8">
      <div className="pb-3 border-b dark:border-b-dark">
        <h1 className="font-semibold">Password</h1>
        <p>Reset your password from here </p>
      </div>
      <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1 w-full sm:w-fit">
          <p>Old Password</p>
          <div className="input-with-icon mt-2">
            <FiLock />
            <input
              type="password"
              value={password.old}
              name="old"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-1 w-full sm:w-fit">
          <p>New Password</p>
          <div className="input-with-icon mt-2">
            <BiLockAlt />
            <input
              type="password"
              value={password.new}
              name="new"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Confirm Password</p>
        <div className="input-with-icon mt-2">
          <BiLockOpen />
          <input
            type="password"
            value={password.confirm}
            name="confirm"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex-center-center mt-4">
        <button className="btn btn-primary">update</button>
      </div>
    </div>
  );
};

export default Password;
