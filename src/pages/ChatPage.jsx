import "../assets/css/ChatPage/ChatPage.css";

import UserHeader from "../components/ChatPage/UserHeader";
import ChatList from "../components/ChatPage/ChatList";
import Chat from "../components/ChatPage/Chat";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SettingsWindow from "../components/SettingsWindow/SettingsWindow";

import io from "socket.io-client";

function ChatPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [chat, setChat] = useState([]);
  const [contact, setContact] = useState(null);
  const [windowToggle, setWindowToggle] = useState(false);

  const token = localStorage.getItem("token");

  const socket = io("http://localhost:3000");
  socket.on("messages", (chatMessages) => {
    setChat(() => chatMessages);
  });
  socket.on("contacts", (contacts) => {
    setContacts(() => contacts);
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
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((messages) => {
        setChat(messages);
      });
    document.querySelectorAll(".contact-container").forEach((tuple) => {
      tuple.classList.remove("active-contact-container");
    });
    e.currentTarget.classList.add("active-contact-container");
  }

  useEffect(() => {
    if (!token) navigate("/login");

    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          navigate("/login");
          return;
        }
        return response.json();
      })
      .then((user) => {
        setUser(user);
        setContacts(user.contacts);
      });
  }, [navigate, token]);

  return user ? (
    <div className="chat-page">
      <div className="chat-nav">
        <>
          <UserHeader
            user={{ name: user.display_name }}
            openSettingsWindow={openSettingsWindow}
          />
          <ChatList chatList={contacts} handleTupleClick={openChat} />{" "}
        </>
      </div>
      <Chat
        chat={chat || []}
        userID={user._id}
        contactID={contact || null}
        token={token}
        socket={socket}
      />
      {windowToggle && (
        <SettingsWindow
          user={user}
          token={token}
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
