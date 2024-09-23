import React, { useContext, useState } from "react";
import { UserData } from "../Store/Userdata";
import "./Groupchat.css";
const GroupChat = ({ onExit }) => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState(""); // Track the username
  const [isSubscribed, setIsSubscribed] = useState(false); // Track subscription state
  const { sendPrivateMessage, groupmessages } = useContext(UserData);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        content: message,
        sender: username, // Use the entered username as sender
        recipient:"A"
      //  timestamp: new Date().toISOString(), // Add timestamp
      };
      sendPrivateMessage(newMessage ,username);
      setMessage("");
    }
  };

  // Handle user subscription or entering their username
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsSubscribed(true); // Set subscribed to true after entering username
    }
  };

  return (
    <div
      className="group-chat m-1"
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {!isSubscribed ? (
        // Render subscription or username entry form if not subscribed
        <center  >

       
        <div
          className="subscribe-section d-flex justify-content-center p-2  mt-4 "
        
        >
      
          <form 
            onSubmit={handleSubscribe}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Enter your username</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{
                border: '2px solid white   ',
                borderRadius:'2px',
                padding: "10px",
                margin: "10px 0",
                width: "80%",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Join Chat
            </button>
          </form>
        </div>
        </center>
      ) : (
        // Render the chat interface if the user is subscribed
        <>
          <div
            className="messages m-1 d-flex flex-column"
            style={{
              height: "400px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {groupmessages.map((msg, index) => (
              <div className="user d-flex flex-column">
                <span
                  className="userName d-flex flex-column p-0"
                  style={{
                    color: "#333",
                    marginBottom: "5px",
                    alignSelf:
                      msg.sender === username ? "flex-end" : "flex-start", 
                  }}
                >
                  {msg.sender}
                </span>

                <div
                  key={index}
                  className={`m-1 message d-flex flex-column rounded ${
                    msg.sender === username ? "sent" : "received"
                  }`}
                  style={{
                    maxWidth: "80%",
                    alignSelf:
                      msg.sender === username ? "flex-end" : "flex-start",
                  }}
                >
                  <p className="p-1 m-1 d-flex flex-column">
                    {msg.content}
                    <span className="timestamp ms-auto">{msg.timestamp}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSendMessage}
            style={{ display: "flex", marginBottom: "10px" }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              style={{ flex: 1, padding: "5px", fontSize: "14px" }}
            />
            <button type="submit" style={{ padding: "5px", fontSize: "14px" }}>
              Send
            </button>
          </form>

          {/* Display the username below the message input field */}
          <div
            className="username-display"
            style={{
              textAlign: "center",
              fontSize: "14px",
              marginTop: "10px",
              color: "#555",
            }}
          >
            <strong>Username: {username}</strong>
          </div>

          <button
            onClick={onExit}
            style={{
              width: "100%",
              padding: "5px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Exit
          </button>
        </>
      )}
    </div>
  );
};

export default GroupChat;
