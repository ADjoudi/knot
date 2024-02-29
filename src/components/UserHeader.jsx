import "../assets/css/UserHeader.css";

import pfp_placeholder from "../assets/images/pfp-placeholder.png";
import settings_icon from "../assets/icons/settings.svg";

function UserHeader({ user, openSettingsWindow }) {
  return (
    <div className="user-header">
      <img src={pfp_placeholder} alt="" />
      <div>
        <h2>{user.name}</h2>
        <p>@dev</p>
      </div>
      <img
        className="button-settings"
        src={settings_icon}
        alt=""
        onClick={openSettingsWindow}
      />
    </div>
  );
}

export default UserHeader;
