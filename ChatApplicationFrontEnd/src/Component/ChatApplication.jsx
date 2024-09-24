import ChatRoom from "./ChatRoom";
import SideBar from "./SideBar";
import SideBarTool from "./SideBarTool";
import { useState } from "react";
import './ChatApplication.css'; // Import your CSS file
import GroupChat from "./GroupChat";


const ChatApplication = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [groupchat,setGroupchat]=useState(false)

  const handleGroupChatChange = (s) => {
    console.log("Group chat button clicked");
    console.log(s);
    setGroupchat(s);
    
  };
 

  return <>{
    groupchat ?
      <GroupChat onExit={() => setGroupchat(false)} />
    :
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar - visible on all screen sizes unless a user is selected on small screens */}
        <div className={`col-md-4 h-100 d-flex flex-column ${selectedUser ? "d-none d-md-flex" : ""}`}>
          <div className="d-flex flex-row h-100">
            <SideBarTool onGroupToggle={handleGroupChatChange}  />
            <div className="d-flex flex-column" style={{ width: "100%" }}>
              <SideBar onUserSelect={setSelectedUser} />
            </div>
          </div>
        </div>

        {/* ChatRoom - hidden on small screens unless a user is selected */}
        <div className={`Chatroom  col-md-8 h-100 d-flex flex-column ${selectedUser ? "d-block" : "d-none d-md-flex"}`}>
          {selectedUser ? (
            <ChatRoom selectedUser={selectedUser}/>
          ) : (
            <h1 className="no-user-text">No user selected</h1>
          )}
        </div>
      </div>
      {}
 
    </div>}
    </>
  
};

export default ChatApplication;
