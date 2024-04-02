import "../../assets/css/ChatPage/ChatList.css";

import Search from "./Search";
import ChatTuple from "./ChatTuple";

function ChatList({ chatList, handleTupleClick }) {
  return (
    <div className="chat-list-container">
      <h2>messages</h2>
      <Search />
      <div className="chat-tuples-container">
        {chatList.map((contact, index) => (
          <ChatTuple
            key={index}
            contact={contact}
            handleTupleClick={handleTupleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
