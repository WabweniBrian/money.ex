import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const MoneyexCard = () => {
  return (
    <div className="mt-10">
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="md:col-span-1 row-start-3 sm:row-start-auto">
          <img src="/images/cards/money.ex.png" alt="" className="w-full" />
        </div>
        <div className="md:col-span-2">
          <div className="flex-center-between">
            <div>
              <h1 className="text-2xl font-semibold">Get your Money.ex card</h1>
              <p>
                Wabweni Brian - Spend at the real exchamge rate with Money.ex
                debit card
              </p>
            </div>
            <FaChevronRight className="text-2xl" />
          </div>
          <Link className="text-xl font-semibold hover:underline text-primary mt-10 block w-fit">
            Get the card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoneyexCard;
