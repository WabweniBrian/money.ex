import { FiChevronDown } from "react-icons/fi";
const AccountDetails = () => {
  return (
    <div className="relative h-[250px] overflow-hidden rounded-lg p-8 text-slate-300 mt-6 md:h-4/5 flex justify-center flex-col bg-gradient-to-tl from-[#2b2c46] to-[#5F6186]">
      <img
        src="/images/3d.png"
        alt=""
        className="absolute w-52 -bottom-16 -right-14"
      />
      <h1>My Balance</h1>
      <h1 className="my-3 text-3xl md:text-4xl font-bold">$12, 356.27</h1>
      <div className="mt-4 flex-align-center gap-x-2">
        <FiChevronDown className="text-secondaryGreen" />
        <p>USD Account</p>
      </div>
    </div>
  );
};

export default AccountDetails;
