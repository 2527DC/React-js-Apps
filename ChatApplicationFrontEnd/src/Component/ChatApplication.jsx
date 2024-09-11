import ChatRoom from "./ChatRoom";
import SideBar from "./SideBar";
import { IoPeopleSharp } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";

const ChatApplication = () => {
   const [selectedUser, setSelectedUser] = useState(null);
 

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-md-4 h-100 d-flex flex-column">
            <div className="d-flex flex-row h-100">
          
              <div className="tools  d-flex flex-column   h-100" style={{ alignSelf: "flex-start", width: "14%" }}>
                
               <button className=" btn "> <IoPeopleSharp></IoPeopleSharp></button>
               <button className=" btn "> <IoChatbox/> </button>
               <button className=" btn "> <IoSettingsSharp/></button>
               <img
               src="src/assets/DSC00927.JPG"
               alt="Profile"
               className="img-fluid rounded-circle  mt-auto mb-3 "
               style={{ width: "45px", height: "45px" }}
             />
              </div>
            
              <div className=" d-flex flex-column" style={{ width: "90%" }}>
                <SideBar onUserSelect={setSelectedUser} />
              
              </div>
            </div>
          </div>

          <div className="col-md-8 h-100 d-flex flex-column ">
            <ChatRoom selectedUser={selectedUser}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatApplication;
