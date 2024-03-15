import "../../assets/css/SettingsWindow/Tabs.css";

import pfp_placeholder from "../../assets/images/pfp-placeholder.png";
import settings_icon from "../../assets/icons/settings.svg";
import list_icon from "../../assets/icons/list.svg";
import people_icon from "../../assets/icons/people_icon.svg";

export default function Tabs({ user, selectedTab, handleTabSelectClick }) {
  const getTabClass = (tabID) => {
    return tabID === selectedTab ? "tab-item tab-item-active" : "tab-item";
  };

  return (
    <div className="tabs-section">
      <section className="user-info-settings">
        <img src={pfp_placeholder} alt="" />
        <section>
          <h2>{user.display_name}</h2>
          <p>@dev</p>
        </section>
      </section>
      <section className="tabs-category">
        <h3>Account</h3>
        <div
          id="settingsTab"
          className={getTabClass("settingsTab")}
          onClick={handleTabSelectClick}
        >
          <img src={settings_icon} alt="" />
          <h3>Settings</h3>
        </div>
      </section>
      <section className="tabs-category">
        <h3>Relations</h3>
        <div
          id="peopleTab"
          className={getTabClass("peopleTab")}
          onClick={handleTabSelectClick}
        >
          <img src={people_icon} alt="" />
          <h3>Connect with Others</h3>
        </div>
        <div
          id="invitesTab"
          className={getTabClass("invitesTab")}
          onClick={handleTabSelectClick}
        >
          <img src={list_icon} alt="" />
          <h3>Received Invitations</h3>
        </div>
      </section>
    </div>
  );
}
