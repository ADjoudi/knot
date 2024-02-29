import "../assets/css/ChatPage.css";

import UserHeader from "../components/UserHeader";
import ChatList from "../components/ChatList";
import Chat from "../components/Chat";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SettingsWindow from "../components/SettingsWindow";

function ChatPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = useRef(location.state.token);

  const [user, setUser] = useState(null);
  const [chat, setChat] = useState([]);
  const [contact, setContact] = useState(null);
  const [windowToggle, setWindowToggle] = useState(false);

  function openSettingsWindow() {
    setWindowToggle(true);
  }

  function closeSettingsWindow(e) {
    console.log(e.target, e.currentTarget);
    if (e.target.id === "windowContainer") setWindowToggle(false);
  }

  function openChat(e) {
    const contactID = e.currentTarget.id;
    setContact(contactID);

    fetch("http://localhost:3000/users/chat/" + contactID, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token.current,
      },
    })
      .then((response) => response.json())
      .then((messages) => {
        setChat(messages);
      });
  }

  useEffect(() => {
    if (!token.current) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token.current,
      },
    })
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  return user ? (
    <div className="chat-page">
      <div className="chat-nav">
        <>
          <UserHeader
            user={{ name: user.display_name }}
            openSettingsWindow={openSettingsWindow}
          />
          <ChatList chatList={user.contacts} handleTupleClick={openChat} />{" "}
        </>
      </div>
      <Chat
        chat={chat || []}
        userID={user._id}
        contactID={contact || null}
        token={token.current}
      />
      {windowToggle && (
        <SettingsWindow closeSettingsWindow={closeSettingsWindow} />
      )}
    </div>
  ) : (
    <div className="chat-page">
      <h4 style={{ color: "white" }}>Loading...</h4>
    </div>
  );
}

export default ChatPage;
