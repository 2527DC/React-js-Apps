import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

let stompClient = null;

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState(''); // The current user's username
  const [privateMessages, setPrivateMessages] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false); // Subscription status
  const [onlineUsers, setOnlineUsers] = useState([]); // Stores the list of online users

  // Connect to WebSocket with username as part of query parameters
  const handleConnect = () => {
    const socket = new SockJS(`http://localhost:8080/ws?username=${sender}`);
    stompClient = over(socket);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.log('Connected to WebSocket');
    
    // Subscribe to receive private messages for this user
    stompClient.subscribe('/user/queue/messages', onMessageReceived);

    // Subscribe to global topic to receive updates about online users
    stompClient.subscribe('/topic/onlineUsers', onOnlineUsersReceived);

    setIsSubscribed(true); // Mark as subscribed
    console.log(`Subscribed to /user/${sender}/queue/messages and /topic/onlineUsers`);
  };

  const onError = (error) => {
    console.error('WebSocket error:', error);
  };

  // Handle receiving a private message
  const onMessageReceived = (payload) => {
    const message = JSON.parse(payload.body);
    setPrivateMessages((prevMessages) => [...prevMessages, message]);
  };

  // Handle receiving the list of online users
  const onOnlineUsersReceived = (payload) => {
    const users = JSON.parse(payload.body);

    console.log(users);
    
    setOnlineUsers(users);
  };

  // Send a private message to a recipient
  const sendMessage = () => {
    if (stompClient && message && recipient) {
      const chatMessage = {
        content: message,
        recipient: recipient,
        sender: sender, // Include the sender's username
      };

      stompClient.send('/app/send-private', {}, JSON.stringify(chatMessage));
      setMessage(''); // Clear the input field after sending the message
    }
  };

  // Subscribe to WebSocket when the user enters a username
  const handleSubscribe = () => {
    if (sender) {
      handleConnect();
    }
  };

  return (
    <div className="chat-container">
      {/* If user is not subscribed, show subscription form */}
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

          {/* Display list of online users */}
          <div className="online-users">
            <h3>Online Users:</h3>
            <ul>
              {onlineUsers.length > 0 ? (
                onlineUsers.map((user, index) => (
                  <li key={index}>{user}</li>
                ))
              ) : (
                <li>No users online</li>
              )}
            </ul>
          </div>

          {/* Display received private messages */}
          <div className="messages">
            {privateMessages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}</strong> to <strong>{msg.recipient}</strong>: {msg.content}
              </div>
            ))}
          </div>

          {/* Input fields for sending a message */}
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
    </div>
  );
};

export default ChatComponent;
