import "../../assets/css/ChatPage/ChatTuple.css";

import pfp_placeholder from "../../assets/images/pfp-placeholder.png";

function ChatTuple({ contact, handleTupleClick }) {
  const { _id, display_name, last_message, is_user_message } = contact;
  console.log(is_user_message);
  return (
    <div className="contact-container" onClick={handleTupleClick} id={_id}>
      <div className="indicator"></div>
      <img src={pfp_placeholder} alt="" />
      <div>
        <h3>{display_name}</h3>
        {is_user_message ? (
          <div className="user-message">
            <p>You: </p>
            <p>{last_message}</p>
          </div>
        ) : (
          <p>{last_message}</p>
        )}
      </div>
    </div>
  );
}

export default ChatTuple;
