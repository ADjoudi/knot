import "../assets/css/ChatTuple.css";

import pfp_placeholder from "../assets/images/pfp-placeholder.png";

function ChatTuple() {
  return (
    <div className="chat-tuple-container">
      <img src={pfp_placeholder} alt="" />
      <div>
        <h3>Rami</h3>
        <p>entum. Tellus sapien curs</p>
      </div>
    </div>
  );
}

export default ChatTuple;
