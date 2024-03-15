import "../../assets/css/SettingsWindow/InviteCard.css";

import pfp_placeholder from "../../assets/images/pfp-placeholder.png";

import { useState } from "react";

export default function InviteCard({ invite, token }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const handleInvite = (e) => {
    if (e.target.id !== "accept" && e.target.id !== "reject") return;

    let url = `http://localhost:3000/users/invites/${e.currentTarget.id}/`;
    if (e.target.id === "accept") url = url + "accept";
    if (e.target.id === "reject") url = url + "reject";

    setIsClicked(true);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error();
        setIsPending(false);
      })
      .catch(() => {
        setIsClicked(false);
      });
  };

  return (
    isPending && (
      <div
        id={invite._id}
        className="invite-card-container"
        onClick={!isClicked ? handleInvite : null}
      >
        <img className="pfp" src={pfp_placeholder} alt="" />
        <p>{invite.from.display_name}</p>
        <section className="actions-container">
          <h3 id="reject">Reject</h3>
          <h3 id="accept">Accept</h3>
        </section>
      </div>
    )
  );
}
