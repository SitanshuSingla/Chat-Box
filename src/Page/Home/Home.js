import { useState } from "react";
import { addChatBox, selector } from "../../reducer";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import ChatBox from "../../Component/ChatBox/ChatBox";
export default function Home() {
  let data = useSelector(selector);
  let dispatch = useDispatch();

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Chat Box Application
          </a>
        </div>
      </nav>

      <div style={{ marginTop: "50px" }}>
        <span>Add New Chat Box</span>
        <button
          onClick={() => dispatch(addChatBox([]))}
          className="btn btn-primary"
        >
          {" "}
          Add
        </button>
      </div>
      {data.map((data, index) => {
        return <ChatBox data={data} index={index} />;
      })}
    </div>
  );
}
