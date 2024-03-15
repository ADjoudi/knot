import "../../assets/css/ChatPage/Inputs.css";

import send_icon from "../../assets/icons/send.svg";
import file_upload_icon from "../../assets/icons/file_upload.svg";
import image_upload_icon from "../../assets/icons/image_upload.svg";
import { useState } from "react";

function Inputs({ contactID, handleSendClick }) {
  const [input, setInput] = useState("");

  return (
    contactID && (
      <div className="inputs-container">
        <form className="message-input-container">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="type message ...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSendClick(contactID, input);
              setInput("");
            }}
          >
            <img src={send_icon} alt="send" />
          </button>
        </form>
        <div className="uploads-container">
          <img src={file_upload_icon} alt="" />
          <img src={image_upload_icon} alt="" />
        </div>
      </div>
    )
  );
}

export default Inputs;
