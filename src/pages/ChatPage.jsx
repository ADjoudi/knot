import "../assets/css/ChatPage.css";

import UserHeader from "../components/UserHeader";
import ChatList from "../components/ChatList";
import Chat from "../components/Chat";

function ChatPage() {
  return (
    <div className="chat-page">
      <div className="chat-nav">
        <UserHeader />
        <ChatList />
      </div>
      <Chat />
    </div>
  );
}

export default ChatPage;
