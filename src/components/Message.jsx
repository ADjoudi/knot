import "../assets/css/Message.css";

import pfp_placeholder from "../assets/images/pfp-placeholder.png";

function Message(props) {
  const messageStyle = props.isUserMessage
    ? "user-message-container"
    : "message-container";
  return (
    <div className={messageStyle}>
      <img src={pfp_placeholder} alt="" />
      <div>
        <section>
          <h3>Djamel</h3>
          <h4>4 min</h4>
        </section>
        <p>erat fermentum. Tellus sapien cursus interdum amet et donec non</p>
        <p>ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  );
}

export default Message;
