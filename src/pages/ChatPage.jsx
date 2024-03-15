import "../assets/css/ChatPage/ChatPage.css";

import UserHeader from "../components/ChatPage/UserHeader";
import ChatList from "../components/ChatPage/ChatList";
import Chat from "../components/ChatPage/Chat";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SettingsWindow from "../components/SettingsWindow/SettingsWindow";

import io from "socket.io-client";

function ChatPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [chat, setChat] = useState([]);
  const [contact, setContact] = useState(null);
  const [windowToggle, setWindowToggle] = useState(false);

  //optional chaining
  const token = useRef(location.state?.token);

  const socket = io("http://localhost:3000");
  socket.on("messages", (arg) => {
    setChat(() => [...arg]);
  });

  function openSettingsWindow() {
    setWindowToggle(true);
  }

  function closeSettingsWindow(e) {
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
      .then((response) => {
        if (!response.ok) navigate("/login");
        return response.json();
      })
      .then((user) => {
        setUser(user);
      });
  }, [navigate]);

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
        socket={socket}
      />
      {windowToggle && (
        <SettingsWindow
          user={user}
          token={token.current}
          closeSettingsWindow={closeSettingsWindow}
        />
      )}
    </div>
  ) : (
    <div className="chat-page">
      <h4 style={{ color: "white" }}>Loading...</h4>
    </div>
  );
}

export default ChatPage;
