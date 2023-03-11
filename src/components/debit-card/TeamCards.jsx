import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";

const TeamCards = () => {
  const { mode } = useSelector(uiStore);
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold">Cards for team members</h1>
      <p>
        Business cards are now available for all admins. The first card on the
        account is free, then team members can order their own for $10
      </p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div>
          <img src="/images/cards/card-green.png" alt="" className="w-full" />
        </div>
        <div>
          <img src="/images/cards/card-black.png" alt="" className="w-full" />
        </div>
        <div className="w-full h-[170px] md:h-full bg-slate-100 dark:bg-dark-light flex-center-center rounded-xl flex-col">
          <img
            src={
              mode === "light"
                ? "/mobile-logo-light.png"
                : "/mobile-logo-dark.png"
            }
            alt=""
            className="w-14"
          />
          <h1 className="font-semibold text-lg mt-2">Add New Card</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
