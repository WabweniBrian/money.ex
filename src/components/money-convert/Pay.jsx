import TransferDetails from "./TransferDetails";

const Pay = () => {
  return (
    <div>
      <h1 className="font-semibold">Choose your transfer type</h1>
      <h1 className="mt-2">
        Fast and easy transfer{" "}
        <span className="opacity-60"> - 10.32 GBP in total fees</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:sticky h-fit top-0">
          <div>
            <div className="input-radio">
              <input type="radio" name="card" id="card-1" />
              <label htmlFor="card-1" className="font-semibold">
                Debit card
              </label>
            </div>
            <p className="opacity-60 mt-2">
              Send from your Visa or Mastercard. <br /> Should arrive by July
              3rd
            </p>
            <div className="mt-2">
              <img src="/images/cards/card-red.png" alt="" />
            </div>
          </div>
          <div>
            <div className="input-radio">
              <input type="radio" name="card" id="card-2" />
              <label htmlFor="card-2" className="font-semibold">
                Debit card
              </label>
            </div>
            <p className="opacity-60 mt-2">
              Send from your Visa or Mastercard. <br /> Should arrive by July
              3rd
            </p>
            <div className="mt-2">
              <img src="/images/cards/card-blue.png" alt="" />
            </div>
          </div>
          <div className="mt-8">
            <h1>
              Low cost transfer{" "}
              <span className="opacity-60"> - 10.32 GBP in total fees</span>
            </h1>
            <div>
              <div className="input-radio">
                <input type="radio" name="card" id="card-3" />
                <label htmlFor="card-3" className="font-semibold">
                  Transfer the money from your bank account
                </label>
              </div>
              <p className="opacity-60 mt-2">
                Send from your Visa or Mastercard. <br /> Should arrive by July
                3rd
              </p>
              <div className="mt-2">
                <img src="/images/cards/card-green.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 md:sticky h-fit top-0">
          <TransferDetails />
        </div>
      </div>
    </div>
  );
};

export default Pay;
