import { IoPeopleSharp } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

const SideBarTool = ({ onGroupToggle }) => {
  const handleGroupChat = () => {
    onGroupToggle(true); // Call the function passed as a prop
  };

  return (
    <div className="tools d-flex flex-column mt-1 h-100" style={{ alignSelf: "flex-start", width: "14%" }}>
      <button className="btn" onClick={handleGroupChat}>
        <IoPeopleSharp />
      </button>
      <button className="btn">
        <IoChatbox />
      </button>
      <button className="btn">
        <IoSettingsSharp />
      </button>
      <img
        src="src/assets/DSC00927.JPG"
        alt="Profile"
        className="img-fluid rounded-circle   mt-auto mb-3"
        style={{ width: "45px", height: "45px", marginLeft:'8px'}}
      />
    </div>
  );
};

export default SideBarTool;
