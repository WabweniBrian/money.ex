import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Notifications, Password, Profile } from "../components/settings";

const Settings = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="mt-5">
        {/* Settings Tabs */}
        <TabWrapper>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Password</Tab>
            <Tab>Notifications</Tab>
          </TabList>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <Password />
          </TabPanel>
          <TabPanel>
            <Notifications />
          </TabPanel>
        </TabWrapper>
      </div>
    </div>
  );
};

export default Settings;
