import ChatRoom from "./ChatRoom";
import SideBar from "./SideBar";
import SideBarTool from "./SideBarTool";
import { useState } from "react";
import './ChatApplication.css'; // Import your CSS file

const ChatApplication = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar - visible on all screen sizes unless a user is selected on small screens */}
        <div className={`col-md-4 h-100 d-flex flex-column ${selectedUser ? "d-none d-md-flex" : ""}`}>
          <div className="d-flex flex-row h-100">
            <SideBarTool />
            <div className="d-flex flex-column" style={{ width: "100%" }}>
              <SideBar onUserSelect={setSelectedUser} />
            </div>
          </div>
        </div>

        {/* ChatRoom - hidden on small screens unless a user is selected */}
        <div className={`Chatroom  col-md-8 h-100 d-flex flex-column ${selectedUser ? "d-block" : "d-none d-md-flex"}`}>
          {selectedUser ? (
            <ChatRoom selectedUser={selectedUser} />
          ) : (
            <h1 className="no-user-text">No user selected</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApplication;
