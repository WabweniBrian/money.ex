import { activities } from "../../data/dummyData";
import SingleActivity from "./SingleActivity";

const ActivityList = () => {
  return (
    <div>
      {activities.map((activity) => (
        <SingleActivity {...activity} key={activity.id} />
      ))}
    </div>
  );
};

export default ActivityList;
