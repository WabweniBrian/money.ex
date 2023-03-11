import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";

const MyCards = () => {
  const { mode } = useSelector(uiStore);
  return (
    <div>
      <h1 className="text-xl font-semibold">Your cards</h1>
      <p>
        Wabweni Brian - Spend at the real exchamge rate with Money.ex debit card
      </p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div>
          <img src="/images/cards/card-red.png" alt="" className="w-full" />
        </div>
        <div>
          <img src="/images/cards/card-blue.png" alt="" className="w-full" />
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

export default MyCards;
