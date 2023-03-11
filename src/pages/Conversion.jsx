import { FiArrowLeft } from "react-icons/fi";
import { LinearSteps } from "../components/money-convert";
import { Link } from "react-router-dom";

const Conversion = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Conversion</h1>
      <div className="mt-5 card !pb-8">
        <Link
          to="/money-convert"
          className="btn w-fit bg-slate-100 hover:bg-slate-200 dark:bg-dark-light dark:hover:bg-hover-color-dark flex-align-center gap-2"
        >
          <FiArrowLeft /> <span>back</span>
        </Link>
        <div className="mt-8">
          <LinearSteps />
        </div>
      </div>
    </div>
  );
};

export default Conversion;
