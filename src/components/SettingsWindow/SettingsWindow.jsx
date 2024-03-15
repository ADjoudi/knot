import { useState } from "react";
import "../../assets/css/SettingsWindow/SettingsWindow.css";

import Tabs from "./Tabs";
import PeopleTab from "./PeopleTab";
import SettingsTab from "./SettingsTab";
import InvitesTab from "./InvitesTab";

function SettingsWindow({ user, token, closeSettingsWindow }) {
  const tabs = {
    peopleTab: <PeopleTab token={token} />,
    settingsTab: <SettingsTab />,
    invitesTab: <InvitesTab token={token} />,
  };

  const [selectedTab, setSelectedTab] = useState("settingsTab");

  function handleTabSelectClick(e) {
    setSelectedTab(e.currentTarget.id);
  }

  return (
    <div
      id="windowContainer"
      className="window-container"
      onClick={closeSettingsWindow}
    >
      <div className="settings-container">
        <Tabs
          user={user}
          selectedTab={selectedTab}
          handleTabSelectClick={handleTabSelectClick}
        />
        {tabs[selectedTab]}
      </div>
    </div>
  );
}

export default SettingsWindow;
