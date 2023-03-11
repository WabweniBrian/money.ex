const TransferDetails = () => {
  return (
    <div className="card">
      <h1 className="text-lg font-semibold">Transfer Details</h1>
      <div className="mt-4 pb-3 border-b dark:border-b-dark-light">
        <div className="flex-center-between">
          <p>You send exacty</p>
          <h1>1,000 GBP</h1>
        </div>
        <div className="flex-center-between mt-2">
          <p>Total fees (included)</p>
          <h1>7.34 GBP</h1>
        </div>
        <div className="flex-center-between mt-2">
          <p>Total amount we'll convert</p>
          <h1>992.66 GBP</h1>
        </div>
        <div className="flex-center-between mt-2">
          <p>Guaranteed rate (3 hrs)</p>
          <h1>1.16077</h1>
        </div>
        <div className="flex-center-between mt-2">
          <p>You get</p>
          <h1>1,152.25 EUR</h1>
        </div>
        <div className="flex-center-between mt-2">
          <p>Should arrive</p>
          <h1>by july 3rd</h1>
        </div>
      </div>
      <div className="pt-3">
        <h1 className="text-lg font-semibold">Recipient Details</h1>
        <div className="pb-3">
          <div className="flex-center-between">
            <p>Name</p>
            <h1>Wabz Braize</h1>
          </div>
          <div className="flex-center-between mt-2">
            <p>Email</p>
            <h1>wabzbraize66@gmail.com</h1>
          </div>
          <div className="flex-center-between mt-2">
            <p>SWIFT/BIC code</p>
            <h1>DBBLBDDH107</h1>
          </div>
          <div className="flex-center-between mt-2">
            <p>IBAN/Account Number</p>
            <h1>01267783322</h1>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary w-full">Continue payment</button>
        <button className="mt-2 btn border border-secondaryOrange text-secondaryOrange w-full">
          cancel this transfer
        </button>
      </div>
    </div>
  );
};

export default TransferDetails;
