import React, { useState } from 'react';

// Sample Users and Chats
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' }
];

const chatData = {
  1: [{ sender: 'John Doe', message: 'Hey there!' }, { sender: 'Me', message: 'Hello John!' }],
  2: [{ sender: 'Jane Smith', message: 'How are you?' }, { sender: 'Me', message: 'I am good!' }],
  3: [{ sender: 'Alice Johnson', message: 'Let’s catch up!' }, { sender: 'Me', message: 'Sure, Alice!' }]
};

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="chat-app" style={{ display: 'flex', height: '100vh' }}>
      {/* User List (Sidebar) */}
      <div className="user-list" style={{ width: '200px', borderRight: '1px solid gray', padding: '10px' }}>
        <h3>Users</h3>
        <ul>
          {users.map(user => (
            <li key={user.id} style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => handleUserClick(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="chat-area" style={{ flex: 1, padding: '20px' }}>
        {selectedUser ? (
          <>
            <h3>Chat with {selectedUser.name}</h3>
            <div className="messages">
              {chatData[selectedUser.id].map((chat, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <strong>{chat.sender}: </strong>{chat.message}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>Please select a user to chat with.</div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
