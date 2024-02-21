import "../assets/css/Chat.css";

import Inputs from "./Inputs";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat-container">
      <Message />
      <Message isUserMessage={true} />
      <Message />
      <Message />
      <Inputs />
    </div>
  );
}

export default Chat;
