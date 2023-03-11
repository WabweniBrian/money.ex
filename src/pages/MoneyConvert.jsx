import React from "react";
import ExchangeRates from "../components/common/ExchangeRates";
import TransactionHistory from "../components/common/TransactionHistory";
import { AccountInfo, Comparison } from "../components/money-convert";
import {
  lineChartData,
  lineChartOptions,
  transactions,
} from "../data/dummyData";

const MoneyConvert = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Money Convert</h1>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:sticky top-0 h-fit">
            <ExchangeRates
              chartOptions={lineChartOptions}
              chartData={lineChartData}
            />
            <AccountInfo />
          </div>
          <div className="md:sticky top-0 h-fit">
            <Comparison />
          </div>
        </div>
        <TransactionHistory data={transactions} />
      </div>
    </div>
  );
};

export default MoneyConvert;
