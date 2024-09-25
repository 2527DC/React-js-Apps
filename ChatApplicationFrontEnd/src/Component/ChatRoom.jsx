import { useContext } from "react";
import { UserData } from "../Store/Userdata";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiUserAdd } from "react-icons/ti";
import { FaVideo } from "react-icons/fa";
import ChatFooter from './chatFooter';

const ChatRoom = ({ selectedUser }) => {
  const { privateMessages, subName } = useContext(UserData);

  if (!selectedUser) {
    return <p>No user selected</p>;
  }

  // Filter messages where the selected user is either the sender or recipient
  const selectedUserMessages = privateMessages.filter(
    (msg) =>
      (msg.sender === selectedUser.username && msg.recipient === subName) ||
      (msg.sender === subName && msg.recipient === selectedUser.username)
  );

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chatRoomContainer container">
      <header className=" c-header d-flex align-items-center p-1 m-2">
        <img
          src={selectedUser.image}
          alt="Profile"
          className="img-fluid rounded-circle border border-danger ms-3 m-1"
          style={{ width: '50px', height: '50px' }}
        />
        <div className="ms-3">
          <span className="d-block fw-bold">{selectedUser.username}</span>
          <span className="d-block" style={{ fontSize: '13px' }}>
            {selectedUser.status}
          </span>
        </div>
        <div className="ms-auto">
          <button className="btn p-0 me-2" style={{ width: '35px', height: '35px' }}>
            <FaVideo />
          </button>
          <button className="btn p-0 me-2" style={{ width: '35px', height: '35px' }}>
            <TiUserAdd />
          </button>
          <button className="btn p-0" style={{ width: '40px', height: '40px' }}>
            <BsThreeDotsVertical />
          </button>
        </div>
      </header>

      <div className="chatContainer d-flex flex-column">
        {selectedUserMessages.map((msg, index) => (
          <div
            key={index}
            className={`m-1 rounded ${msg.sender !== selectedUser.username ? 'sent' : 'received'}`}
            style={{ maxWidth: '80%', alignSelf: msg.sender !== selectedUser.username ? 'flex-end' : 'flex-start' }}
          >
            <p className="message p-1 m-1 d-flex flex-column">
              {msg.content}
              <span className="timestamp ms-auto">{formatTimestamp(msg.timestamp)}</span>
            </p>
          </div>
        ))}
      </div>

      <ChatFooter selectedUser={selectedUser} />
    </div>
  );
};

export default ChatRoom;
