import React, { useState } from 'react';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

let stompClient = null;

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [privateMessages, setPrivateMessages] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]); // Ensure it's an array

  const handleConnect = () => {
    const socket = new SockJS(`http://localhost:8080/ws?username=${sender}`);
    stompClient = over(socket);
    stompClient.connect({}, onConnected, onError);

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  };
  
  const onConnected = () => {
    console.log('Connected to WebSocket');
    if (sender) {
      stompClient.subscribe(`/user/${sender}/queue/messages`, onMessageReceived);
      setIsSubscribed(true);
      console.log(`Subscribed to /user/${sender}/queue/messages`);
      stompClient.send('/app/request-online-users', {}, {});
    }
    stompClient.subscribe('/topic/onlineUsers', onOnlineUsersReceived);
    console.log('Subscribed to /topic/onlineUsers');
    stompClient.send("/app/getOnlineUsers", {}, {});
  };

  const onOnlineUsersReceived = (payload) => {
    const users = JSON.parse(payload.body);

    // Ensure the users are an array
    if (Array.isArray(users)) {
      setOnlineUsers(users);
    } else {
      setOnlineUsers([]); // Reset to empty array if the format is incorrect
    }
  };

  const onError = (error) => {
    console.error('WebSocket error:', error);
  };

  const onMessageReceived = (payload) => {
    const message = JSON.parse(payload.body);
    setPrivateMessages(prevMessages => [...prevMessages, message]);
  };

  const sendMessage = () => {
    if (stompClient && message && recipient) {
      const chatMessage = {
        content: message,
        recipient: recipient,
        sender: sender,
      };
      stompClient.send('/app/send-private', {}, JSON.stringify(chatMessage));
      setMessage('');
    }
  };

  const handleSubscribe = () => {
    if (sender) {
      handleConnect();
    }
  };

  return (
    <div className="chat-container">
      {!isSubscribed ? (
        <div className="subscribe-section">
          <h2>Enter your username to subscribe</h2>
          <input
            type="text"
            placeholder="Username"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      ) : (
        <div className="chat-section">
          <h2>Private Chat</h2>
          <div className="messages">
            {privateMessages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}</strong>: {msg.content}
              </div>
            ))}
          </div>

          <input
            type="text"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />

          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendMessage}>Send Message</button>
        </div>
      )}

      <div className="online">
        <h1>Online Users</h1>
        <ul>
          {Array.isArray(onlineUsers) && onlineUsers.length > 0 ? (
            onlineUsers.map((onl, ind) => <li key={ind}>{onl}</li>)
          ) : (
            <li>No users online</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ChatComponent;
