
import { IoPeopleSharp } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
const SideBarTool=()=>{

    return <div className="tools  d-flex flex-column   h-100" style={{ alignSelf: "flex-start", width: "14%" }}>
                
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
 
}
export default SideBarTool;