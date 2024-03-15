import "../../assets/css/SettingsWindow/ContactCard.css";

import pfp_placeholder from "../../assets/images/pfp-placeholder.png";

import click_icon from "../../assets/icons/click.svg";
import error_icon from "../../assets/icons/error_icon.svg";
import success_icon from "../../assets/icons/success_icon.svg";
import pending_icon from "../../assets/icons/pending_icon.svg";

import { useEffect, useState } from "react";

export default function ContactCard({ user, token }) {
  const [status, setStatus] = useState("");
  const [cardStyleClass, setCardStyleClass] = useState("");
  const [statusIcon, setStatusIcon] = useState(click_icon);
  const [isClicked, setIsClicked] = useState(false);

  const handleSendInvite = (e) => {
    setIsClicked(true);
    setStatus("pending");
    setStatusIcon(pending_icon);
    fetch(`http://localhost:3000/users/invites/${e.currentTarget.id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          setStatusIcon(success_icon);
        } else throw new Error();
      })
      .catch(() => {
        setStatus("error");
        setStatusIcon(error_icon);
        setIsClicked(false);
      });
  };

  useEffect(() => {
    if (status === "pending") {
      setCardStyleClass("card-pending");
      return;
    }
    if (status === "success") {
      setCardStyleClass("card-success");
      return;
    }
    if (status === "error") {
      setCardStyleClass("card-error");
      return;
    }
  }, [status]);
  return (
    <div
      id={user._id}
      className={`contact-card-container ${cardStyleClass}`}
      onClick={!isClicked ? handleSendInvite : null}
    >
      <img className="hint-icon" src={statusIcon} alt="" />
      <img className="pfp" src={pfp_placeholder} alt="" />
      <p>{user.display_name}</p>
    </div>
  );
}
