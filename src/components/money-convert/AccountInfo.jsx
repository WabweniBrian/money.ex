const AccountInfo = () => {
  return (
    <div className="card mt-3 !p-6">
      <div className="flex-align-center gap-4 flex-wrap">
        <div className="flex-1">
          <h1 className="font-semibold">Account Balance</h1>
          <p className="opacity-60 uppercase mt-4 text-sm">total balance</p>
          <h1 className="text-2xl font-bold">$80,428.00</h1>
        </div>
        <div className="w-[2px] h-20 bg-slate-200 dark:bg-hover-color-dark" />
        <div className="flex-1">
          <p className="opacity-60 uppercase mt-10 text-sm">investments</p>
          <h1 className="text-2xl font-bold">$40,324.00</h1>
        </div>
        <div className="w-[2px] h-20 bg-slate-200 dark:bg-hover-color-dark" />
        <div className="flex-1">
          <p className="opacity-60 uppercase mt-10 text-sm">savings</p>
          <h1 className="text-2xl font-bold">$33,564.00</h1>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
