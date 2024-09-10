import ChatRoom from "./ChatRoom";
import SideBar from "./SideBar";

const ChatApplication = () => {
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-md-4 h-100 d-flex flex-column">
            <div className="d-flex flex-row h-100">
              {/* Left-aligned tools div */}
              <div className="tools border border-primary  h-100" style={{ alignSelf: "flex-start", width: "16%" }}>
                {/* Tool content goes here */}
              </div>
              {/* Sidebar next to tools */}
              <div className=" d-flex flex-column border border-primary" style={{ width: "90%" }}>
                <SideBar />
              </div>
            </div>
          </div>

          <div className="col-md-8 h-100 d-flex flex-column border border-primary">
            <ChatRoom />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatApplication;
