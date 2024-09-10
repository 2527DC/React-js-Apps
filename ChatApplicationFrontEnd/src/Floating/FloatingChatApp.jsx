import { useState, useRef, useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import "./FloatingChatApp.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const initialLeft = useRef(0);
  const initialTop = useRef(0);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        const newLeft = initialLeft.current + e.clientX - startX.current;
        const newTop = initialTop.current + e.clientY - startY.current;
        chatRef.current.style.left = `${newLeft}px`;
        chatRef.current.style.top = `${newTop}px`;
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    initialLeft.current = chatRef.current.offsetLeft;
    initialTop.current = chatRef.current.offsetTop;
  };

  const MakeConnection = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = Stomp.over(socket);

    client.connect(
      {
        passcode: "your-passcode", // If your server requires this
        host: "your-server-host", // Typically not needed
        "accept-version": "1.1,1.0", // Specify supported STOMP versions
        "heart-beat": "10000,10000", // Heartbeat intervals
      },
      () => {
        console.log("connected");
      }
    );
  };

  return (
    <>
      <button className="fab" onClick={() => setIsChatVisible(!isChatVisible)}>
        💬
      </button>
      {isChatVisible && (
        <div
          className="chat-container"
          ref={chatRef}
          onMouseDown={handleMouseDown}
        >
          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender.toLowerCase()}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button onClick={MakeConnection}>Connect</button>
    </>
  );
};

export default ChatApp;
