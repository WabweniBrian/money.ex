const TransactionHistory = ({ data }) => {
  return (
    <div className="card mt-4">
      <div className="flex-center-between  flex-col sm:flex-row gap-4">
        <h1 className="text-xl font-semibold">Transaction History</h1>
        <div className="flex-align-center gap-2">
          <select
            name=""
            id=""
            className="py-2 px-4 w-full sm:w-fit  border dark:border-hover-color-dark outline-none bg-white rounded-md dark:bg-card-dark drop-shadow-md"
          >
            <option value="Expense">Expense</option>
            <option value="Subscriptions">Subscriptions</option>
            <option value="Payments">Payments</option>
            <option value="Recieved">Recieved</option>
          </select>
          <select
            name=""
            id=""
            className="py-2 px-4 w-full sm:w-fit  border dark:border-hover-color-dark outline-none bg-white rounded-md dark:bg-card-dark drop-shadow-md"
          >
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 1 Month">Last 1 Month</option>
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="Last 1 Year">Last 1 Year</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper w-full p-4 rounded-lg overflow-auto mt-4">
        <table className="w-full border dark:border-dark">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left font-extrabold">ID</th>
              <th className="py-2 px-4 text-left font-extrabold">Recipient</th>
              <th className="py-2 px-4 text-left font-extrabold">Date</th>
              <th className="py-2 px-4 text-left font-extrabold">Category</th>
              <th className="py-2 px-4 text-left font-extrabold">Amount</th>
              <th className="py-2 px-4 text-left font-extrabold">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, recipient, date, category, amount, status }) => (
              <tr key={id}>
                <td className="p-3">{id}</td>
                <td className="p-3">
                  <div className="icon-box !w-10 !h-10 bg-slate-100 !opacity-100 dark:bg-dark-light">
                    <img
                      src={recipient.logo}
                      alt=""
                      className="w-8 object-contain"
                    />
                  </div>
                  <p className="capitalize">{recipient.name}</p>
                </td>
                <td className="p-3">{date}</td>
                <td className="p-3">{category}</td>
                <td className="p-3">{amount}</td>
                <td className="p-3">
                  <div
                    className={`px-2 py-[2px] w-fit text-sm rounded-full flex-align-center gap-x-1 ${status}`}
                  >
                    <span
                      className={`dot w-2 h-2 rounded-full ${status}`}
                    ></span>{" "}
                    <span>{status}</span>{" "}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
