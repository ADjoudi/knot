import { useEffect, useRef } from "react";
import "../assets/css/Chat.css";

import Inputs from "./Inputs";
import Message from "./Message";

function Chat({ chat, userID, contactID, token }) {
  const chatFormatted = chat.map((message, index) => {
    const modifiedMessage = {
      ...message,
      isUserMessage: message.from._id === userID,
      isFollowUp: false,
    };

    if (index > 0 && message.from._id === chat[index - 1].from._id) {
      modifiedMessage.isFollowUp = true;
    }

    return <Message key={modifiedMessage._id} message={modifiedMessage} />;
  });

  const containerRef = useRef();

  function sendMessage(contactID, input) {
    fetch("http://localhost:3000/users/chat/" + contactID, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ message: input }),
    })
      .then((response) => {
        if (!response.ok) throw Error("Failed to send message");
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (containerRef.current)
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });
  return (
    <div className="chat-container" ref={containerRef}>
      {chatFormatted}
      <div className="block"></div>
      <Inputs handleSendClick={sendMessage} contactID={contactID} />
    </div>
  );
}

export default Chat;
