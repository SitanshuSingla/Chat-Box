import { useState } from "react";
import "./ChatBox.css";
import { useDispatch } from "react-redux";
import { addChatData, remove } from "../../reducer";
export default function ChatBox(props) {
  let [message, setMessage] = useState("");

  let disptacher = useDispatch();
  function handleSend() {
    disptacher(
      addChatData({
        message: message,
        index: props.index
      })
    );
  }
  function handleClose() {
    disptacher(remove(props.index));
  }
  return (
    <div className="chat-box">
      <div className="message-wrapper">
        {props.data.map((data) => {
          return (
            <div className={`${data.self ? "left" : "right"} `}>
              <span>{data.text}</span>
            </div>
          );
        })}
      </div>
      <input
        onInput={(e) => setMessage(e.target.value)}
        type="text"
        className="form-control"
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSend} className="btn btn-success">
          Send
        </button>
        <button onClick={handleClose} className="btn btn-danger">
          Close
        </button>
      </div>
    </div>
  );
}
