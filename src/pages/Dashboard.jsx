import React from "react";
import ExchangeRates from "../components/common/ExchangeRates";
import TransactionHistory from "../components/common/TransactionHistory";
import { AccountDetails, CTA, LatestActivity } from "../components/home";
import {
  lineChartData,
  lineChartOptions,
  transactions,
} from "../data/dummyData";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="mt-2">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <CTA />
          </div>
          <div className="md:col-span-1">
            <AccountDetails />
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3 mt-3">
          <div className="md:col-span-2 md:sticky top-0 h-fit">
            <ExchangeRates
              chartOptions={lineChartOptions}
              chartData={lineChartData}
            />
            <TransactionHistory data={transactions.slice(0, 3)} />
          </div>
          <div className="md:col-span-1 md:sticky top-0 h-fit">
            <LatestActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
