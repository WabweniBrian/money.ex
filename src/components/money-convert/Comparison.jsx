import { Link } from "react-router-dom";

const Comparison = () => {
  return (
    <div className="card">
      <h1>The cheap, fast way to send money abroad</h1>
      <div className="p-2 mt-2 rounded-lg border dark:border-dark-light flex-center-between">
        <div>
          <p className="opacity-60">You send exactyly</p>
          <h1 className="text-xl font-semibold">1,000</h1>
        </div>
        <div className="flex-align-center gap-3 sm:cursor-pointer">
          <div className="w-10 h-10 rounded-lg p-1 border dark:border-dark-light">
            <img
              src="/images/usa.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <select
            name=""
            id=""
            className="border-none outline-none bg-white dark:bg-card-dark"
          >
            <option value="usa">USA</option>
            <option value="gbp">GBP</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>
      <div className="ml-8 h-[150px] flex-align-center relative before:absolute before:h-full before:w-[3px] before:bg-slate-200 dark:before:bg-[#3c4051] before:top-0 before:-left-3">
        <div>
          <h1 className="heading">
            <span className="ml-2">4.28 GBP</span>
          </h1>
          <h1 className="heading mt-4">
            <span className="opacity-60 ml-2">
              995.75
              <span className="ml-4">Total amount we'll convert</span>
            </span>
          </h1>
          <h1 className="heading mt-4">
            <span className="opacity-60 ml-2">Guaranteed rate (2 hrs)</span>
          </h1>
        </div>
      </div>
      <div className="p-2 rounded-lg border dark:border-dark-light flex-center-between">
        <div>
          <p className="opacity-60">Recipeint gets</p>
          <h1 className="text-xl font-semibold">1,157.95</h1>
        </div>
        <div className="flex-align-center gap-3 sm:cursor-pointer">
          <div className="w-10 h-10 rounded-lg p-1 border dark:border-dark-light">
            <img
              src="/images/belgium.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <select
            name=""
            id=""
            className="border-none outline-none bg-white dark:bg-card-dark"
          >
            <option value="gbp">GBP</option>
            <option value="usa">USA</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>
      <div className="ml-8 h-[120px] flex-align-center relative before:absolute before:h-full before:w-[3px] before:bg-slate-200 dark:before:bg-[#3c4051] before:top-0 before:-left-3">
        <div>
          <h1 className="heading">
            <span className="ml-2">
              <span className="opacity-60">You could save vs banks</span>{" "}
              <span>40.59 GBP</span>
            </span>
          </h1>
          <h1 className="heading mt-4">
            <span className="ml-2">
              <span className="opacity-60">Should arrive in</span>{" "}
              <span>6 hours</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="flex-align-center gap-3 mt-4">
        <button className="btn btn-primary flex-1">Compare price</button>
        <Link
          to="/money-convert/convert"
          className="compare btn btn-primary flex-1 text-center"
        >
          get started
        </Link>
      </div>
    </div>
  );
};

export default Comparison;
