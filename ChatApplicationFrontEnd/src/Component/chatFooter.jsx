import React, { useState, useRef } from 'react';
import { MdEmojiEmotions } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';


const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    setMessage(e.target.value);

    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
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

      <button className="btn p-0 mx-1" style={{ width: '35px', height: '35px' }}>
        <IoSend size={24} />
      </button>
      <br />
   
      {/* CSS to hide scrollbar */}
      <style jsx>{`
        textarea::-webkit-scrollbar {
          display: none;
        }`}</style>
    </footer>
  );
};

export default ChatFooter;
