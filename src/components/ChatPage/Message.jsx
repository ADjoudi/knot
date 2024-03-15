import "../../assets/css/ChatPage/Message.css";

import pfp_placeholder from "../../assets/images/pfp-placeholder.png";

function Message({ message }) {
  const time = ((messageDate) => {
    const timeDifference = new Date() - new Date(messageDate);
    const seconds = Math.floor(timeDifference / 1000);

    // Convert seconds to minutes, hours, or days
    if (seconds < 60) {
      return `${seconds}sec`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes}min`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours}h`;
    } else {
      const days = Math.floor(seconds / 86400);
      return `${days} days`;
    }
  })(message.date);

  const messageStyle = message.isUserMessage
    ? message.isFollowUp
      ? "user-message-follow-up"
      : "user-message-container"
    : message.isFollowUp
    ? "message-follow-up"
    : "message-container";

  return (
    <div className={messageStyle}>
      <img src={pfp_placeholder} alt="" />
      <div>
        <section>
          <h3>{message.from.display_name}</h3>
          <h4>{time}</h4>
        </section>
        <p>{message.message}</p>
      </div>
    </div>
  );
}

export default Message;
