import { activities } from "../../data/dummyData";

/* eslint-disable jsx-a11y/anchor-is-valid */
const LatestActivity = () => {
  return (
    <div className="card">
      <div className="flex-center-between">
        <h1 className="font-semibold text-lg">Last Activity</h1>
        <a href="#" className="text-primary hover:underline">
          See all activity
        </a>
      </div>
      <div className="mt-4">
        {activities.map(
          ({ id, name, amount_in_euros, amount_in_pounds, status, avatar }) => (
            <div
              key={id}
              className="p-3 border rounded-lg dark:border-dark-light bg-slate-100 dark:bg-hover-color-dark mb-3"
            >
              <div className="flex-center-between">
                <div className="flex-align-center gap-3">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div>
                    <h1 className="font-semibold capitalize">{name}</h1>
                    <p
                      className={`text-sm ${
                        status === "Completed"
                          ? "text-secondaryGreen"
                          : "text-secondaryOrange"
                      }`}
                    >
                      {status}
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    {amount_in_euros} EUR
                  </h1>
                  <p className="text-sm">{amount_in_pounds} GBP</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LatestActivity;
