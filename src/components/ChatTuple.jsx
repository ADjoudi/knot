import "../assets/css/ChatTuple.css";

import pfp_placeholder from "../assets/images/pfp-placeholder.png";

function ChatTuple({ chatTuple, handleTupleClick }) {
  return (
    <div
      className="chat-tuple-container"
      onClick={handleTupleClick}
      id={chatTuple._id}
    >
      <img src={pfp_placeholder} alt="" />
      <div>
        <h3>{chatTuple.display_name}</h3>
        <p>entum. Tellus sapien curs</p>
      </div>
    </div>
  );
}

export default ChatTuple;
