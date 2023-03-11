const Notifications = () => {
  return (
    <div className="mt-8">
      <div className="pb-3 border-b dark:border-b-dark">
        <h1 className="font-semibold">Notifications</h1>
        <p>Manage how you recieve your notifications from here</p>
      </div>
      <div className="mt-4">
        <div className="flex-center-between gap-4">
          <p>Turn off on all your notifications</p>
          <div className="input-check">
            <input type="checkbox" name="" id="notify" />
            <label htmlFor="notify"></label>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex-center-between gap-4">
          <p>Receive notifications to your email address</p>
          <div className="input-check">
            <input type="checkbox" name="" id="ea" />
            <label htmlFor="ea"></label>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex-center-between gap-4">
          <p>Auto delete notifications after 30 days</p>
          <div className="input-check">
            <input type="checkbox" name="" id="auto" />
            <label htmlFor="auto"></label>
          </div>
        </div>
      </div>

      <div className="flex-center-center mt-4">
        <button className="btn btn-primary">update</button>
      </div>
    </div>
  );
};

export default Notifications;
