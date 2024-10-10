import React, { useContext, useState } from "react";
import { UserData } from "../Store/Userdata";
import "./Groupchat.css";

import { BsThreeDotsVertical } from "react-icons/bs";
import { TiUserAdd } from "react-icons/ti";
import { FaVideo } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const GroupChat = ({ onExit }) => {
  const [message, setMessage] = useState("");
  const { subName, groupMessages, sendMessage } = useContext(UserData);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        content: message,
        sender: subName, // Use the entered username as sender
        recipient: "A", // Adjust this as per your requirements
        timestamp: new Date().toISOString(), // Add timestamp
      };
      sendMessage(newMessage);
      setMessage(""); // Clear the input field after sending the message
    }
  };

  return (
    <>
      <div className="container  mt-4">
        <div
          className="group-chat m-1"
          style={{
            padding: "10px",

            borderRadius: "5px",
            backgroundColor: "#e9dac8",
          }}
        >
          <header className=" c-header d-flex align-items-center p-1 m-2">
          <button
                className=" exit  btn p-0 "
                style={{ width: "40px", height: "40px" }}
                onClick={onExit} >
                X
              </button>
            <img
              src={"src/assets/DSC01174.JPG"}
              alt="Profile"
              className="img-fluid rounded-circle border border-danger ms-3 m-1"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="ms-3">
              <span className="d-block fw-bold">{"Simran"}</span>
            </div>
            <div className="ms-auto">
              <button
                className="btn p-0 me-2"
                style={{ width: "35px", height: "35px" }}
              >
                <FaVideo />
              </button>
              <button
                className="btn p-0 me-2"
                style={{ width: "35px", height: "35px" }}
              >
                <TiUserAdd />
              </button>
              <button
                className="btn p-0"
                style={{ width: "40px", height: "40px" }}
              >
                <BsThreeDotsVertical />
              </button>
            
            </div>
          </header>

          <div
            className="messages m-1 d-flex flex-column"
            style={{
              height: "400px",
              overflowY: "scroll",

              padding: "10px",
            }}
          >
            {groupMessages.map((msg, index) => (
              <div
                key={index}
                className="user d-flex flex-column"
                style={{
                  alignSelf: msg.sender === subName ? "flex-end" : "flex-start",
                }}
              >
                {/* Display the sender's name */}
                <span
                  className="userName"
                  style={{
                    color: "#333",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  {msg.sender}
                </span>

                {/* Display the message */}
                <div
                  className={`message d-flex flex-column rounded ${
                    msg.sender === subName
                      ? "bg-primary text-white"
                      : "bg-light"
                  }`}
                  style={{
                    maxWidth: "80%",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <p className="m-0">{msg.content}</p>

                  {/* Display the timestamp */}
                  <span
                    className="timestamp text-muted"
                    style={{ fontSize: "12px", alignSelf: "flex-end" }}
                  >
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSendMessage}
            style={{ display: "flex", marginBottom: "10px" }}
          >
            <input
              className="ms-5"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              style={{ padding: "5px", fontSize: "14px", width: "80%" }}
            />
            <button
              className="btn p-0 mx-1"
              style={{ width: "35px", height: "35px" }}
            >
              <IoSend size={24} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GroupChat;
