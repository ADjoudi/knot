import "../assets/css/Inputs.css";

import send_icon from "../assets/icons/send.svg";
import file_upload_icon from "../assets/icons/file_upload.svg";
import image_upload_icon from "../assets/icons/image_upload.svg";

function Inputs() {
  return (
    <div className="inputs-container">
      <form>
        <input type="text" name="message" id="message" />
        <img src={send_icon} alt="send" />
      </form>
      <div className="uploads-container">
        <img src={file_upload_icon} alt="" />
        <img src={image_upload_icon} alt="" />
      </div>
    </div>
  );
}

export default Inputs;
