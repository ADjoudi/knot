import "../assets/css/ChatList.css";

import Search from "./Search";
import ChatTuple from "./ChatTuple";

function ChatList() {
  return (
    <div className="chat-list-container">
      <h2>messages</h2>
      <Search />
      <div className="chat-tuples-container">
        <ChatTuple />
        <ChatTuple />
        <ChatTuple />
        <ChatTuple />
        <ChatTuple />
      </div>
    </div>
  );
}

export default ChatList;
