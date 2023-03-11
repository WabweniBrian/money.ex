import { ActivityList } from "../components/activity";

const Activity = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">All Activity</h1>
      <div className="mt-5 card">
        <ActivityList />
      </div>
    </div>
  );
};

export default Activity;
