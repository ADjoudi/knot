import "../assets/css/ChatList.css";

import Search from "./Search";
import ChatTuple from "./ChatTuple";

function ChatList({ chatList, handleTupleClick }) {
  return (
    <div className="chat-list-container">
      <h2>messages</h2>
      <Search />
      <div className="chat-tuples-container">
        {chatList.map((tuple, index) => (
          <ChatTuple
            key={index}
            chatTuple={tuple}
            handleTupleClick={handleTupleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
