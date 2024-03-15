import "../../assets/css/SettingsWindow/InvitesTab.css";

import InviteCard from "./InviteCard";

import { useEffect, useState } from "react";

export default function InvitesTab({ token }) {
  const [allInvites, setAllInvites] = useState(null);
  console.log(allInvites);
  useEffect(() => {
    fetch("http://localhost:3000/users/invites", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((invites) => {
        setAllInvites(invites);
      });
  }, [token]);
  console.log("all fetched invites send to the user: ", allInvites);
  return (
    <div className="invites-tab-container">
      {allInvites &&
        allInvites.map((invite) => (
          <InviteCard key={invite._id} invite={invite} token={token} />
        ))}
    </div>
  );
}
