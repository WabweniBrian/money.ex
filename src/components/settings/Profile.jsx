import { useRef, useState } from "react";
import { BiEnvelope, BiStreetView, BiUser } from "react-icons/bi";
import { FiCalendar, FiHome } from "react-icons/fi";

const Profile = () => {
  const [user, setUser] = useState({
    location: "Kampala, Uganda",
    address: "24673 Luwumu Street",
    email: "wabwenib66@gmail.com",
    dob: "01.01.1990",
    gender: "Male",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const imageInput = useRef(null);
  const [profileImage, setProfileImage] = useState("");

  return (
    <div className="mt-8">
      <div className="pb-3 border-b dark:border-b-dark">
        <h1 className="font-semibold">Profile</h1>
        <p>Update your photo and personal details here </p>
      </div>
      <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1 w-full sm:w-fit">
          <p>Live in</p>
          <div className="input-with-icon mt-2">
            <FiHome />
            <input
              type="text"
              value={user.location}
              name="location"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-1 w-full sm:w-fit">
          <p>Street Address</p>
          <div className="input-with-icon mt-2">
            <BiStreetView />
            <input
              type="text"
              value={user.address}
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Email Address</p>
        <div className="input-with-icon mt-2">
          <BiEnvelope />
          <input
            type="text"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>Live in</p>
            <div className="input-with-icon mt-2">
              <FiCalendar />
              <input
                type="text"
                value={user.dob}
                name="dob"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>Street Address</p>
            <div className="input-with-icon mt-2 !py-2 ">
              <BiUser />
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="!py-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex-align-center gap-6 pt-3 border-t dark:border-t-dark">
        <div>
          <h1 className="font-semibold">Profile Photo</h1>
          <p>Upload your profile photo</p>
        </div>
        <div className="flex-shrink-0">
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <img
            src={`${
              profileImage
                ? URL.createObjectURL(profileImage)
                : "/images/placeholder.png"
            }`}
            alt=""
            className="w-12 h-12 rounded-full object-cover sm:cursor-pointer"
            onClick={() => imageInput.current.click()}
          />
        </div>
        <div className="flex-align-center gap-x-4">
          <p
            className="text-red-500 sm:cursor-pointer"
            onClick={() => setProfileImage("")}
          >
            Delete
          </p>
          <p className="text-green-500 sm:cursor-pointer">Update</p>
        </div>
      </div>
      <div className="flex-center-center mt-4">
        <button className="btn btn-primary">update</button>
      </div>
    </div>
  );
};

export default Profile;
