import React, { useState, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

let stompClient = null;

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState(''); // Sender will be entered by the user
  const [privateMessages, setPrivateMessages] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false); // Track if the user has subscribed

  // Handle WebSocket connection and subscription
  const handleConnect = () => {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient = over(socket);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.log('Connected to WebSocket');
    if (sender) {
      // Subscribe to user-specific queue based on the username entered
      stompClient.subscribe(`/user/${sender}/queue/messages`, onMessageReceived);
      setIsSubscribed(true);
      console.log(`Subscribed to /user/${sender}/queue/messages`);
    }
  };

  const onError = (error) => {
    console.error('WebSocket error:', error);
  };

  const onMessageReceived = (payload) => {
    const message = JSON.parse(payload.body);
    console.log('Received message:', message);
    setPrivateMessages(prevMessages => [...prevMessages, message]);
  };

  // Send message to the recipient
  const sendMessage = () => {
    if (stompClient && message && recipient) {
      const chatMessage = {
        content: message,
        recipient: recipient,
        sender: sender, // Use the sender that was entered
      };

      stompClient.send('/app/send-private', {}, JSON.stringify(chatMessage));
      setMessage(''); // Clear input after sending
    }
  };

  // Handle subscription when the sender (username) is provided
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
    </div>
  );
};

export default ChatComponent;
