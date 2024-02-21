import "../assets/css/UserHeader.css";

import pfp_placeholder from "../assets/images/pfp-placeholder.png";
import settings_icon from "../assets/icons/settings.svg";

function UserHeader() {
  return (
    <div className="user-header">
      <img src={pfp_placeholder} alt="" />
      <div>
        <h2>Abdelouahab</h2>
        <p>@dev</p>
      </div>
      <img src={settings_icon} alt="" />
    </div>
  );
}

export default UserHeader;
