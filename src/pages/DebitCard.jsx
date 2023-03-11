import React from "react";
import { MoneyexCard, MyCards, TeamCards } from "../components/debit-card";

const DebitCard = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Debit Card</h1>
      <div className="mt-5 card">
        <MyCards />
        <TeamCards />
        <MoneyexCard />
      </div>
    </div>
  );
};

export default DebitCard;
