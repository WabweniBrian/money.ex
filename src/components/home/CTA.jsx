import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="rounded-lg overflow-hidden relative text-slate-100">
      <img
        src="/images/cta-mobile.png"
        alt=""
        className="h-[250px] w-full object-cover sm:hidden"
      />
      <img
        src="/images/cta.png"
        alt=""
        className="w-full h-full object-cover hidden sm:block"
      />
      <div className="absolute top-1/2 -translate-y-1/2 p-4">
        <h1 className="text-2xl md:text-3xl font-bold capitalize">
          easy to convert your <br /> money with money.ex
        </h1>
        <p className="mt-2">Click the button for your next exchange</p>
        <Link
          to="/money-convert/convert"
          className="btn block w-fit text-center mt-4 bg-white drop-shadow-lg text-dark hover:bg-slate-100 transition-colors"
        >
          convert now
        </Link>
      </div>
    </div>
  );
};

export default CTA;
