import React, { useState, useRef, useContext } from 'react';

import './chatroom.css';

import { UserData } from '../Store/Userdata';
import { MdEmojiEmotions } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';

const ChatFooter = ({ selectedUser }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);
  const { sendMessage} = useContext(UserData);


  
  const handleInput = (e) => {
    const textarea = textareaRef.current;
    setMessage(e.target.value);

    if (textarea) {
      // this is for handling the size of the textarea box
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSendMessage = () => {
    if (message.trim()&&selectedUser) {
      const chatMessage = {
        content: message,
        sender: "user", // Replace with the actual sender's username if needed
        receiverId: selectedUser.id, // Pass the recipient's ID
        timestamp: new Date().toISOString() // Add timestamp
      };

      // Send the message through WebSockete
    

      sendMessage(chatMessage )

      // Clear the textarea after sending the message
      setMessage("");
    }
  };

  return (
    <footer className="d-flex align-items-center p-2 border-top">
      <button className="btn p-0 mx-1" style={{ width: '35px', height: '35px' }}>
        <MdEmojiEmotions size={24} />
      </button>

      <button className="btn p-0 mx-1" style={{ width: '35px', height: '35px' }}>
        <IoMdAdd size={24} />
      </button>

      <textarea
        ref={textareaRef}
        className="form-control"
        placeholder="Type a message..."
        value={message}
        onChange={handleInput}
        style={{ 
          minHeight: '40px', 
          maxHeight: '150px', 
          overflowY: 'auto', 
        }}
        rows={1}
      ></textarea>

      <button className="btn p-0 mx-1" style={{ width: '35px', height: '35px' }} onClick={handleSendMessage}>
        <IoSend size={24} />
      </button>

       {/*  this is used to scroll hwithout the scroll bar when it overlaps  */}
      <style jsx>{`
        textarea::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </footer>
  );
};

export default ChatFooter;
