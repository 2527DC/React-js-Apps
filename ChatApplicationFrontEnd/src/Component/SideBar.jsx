import { IoSearchSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import SideContainer from "./sideContainer";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="container">
      
        <header className="d-flex align-items-center">
          <strong>CHAT</strong>
          <div className="d-flex ms-auto">
            <button
              className="btn p-0 me-2"
              style={{ width: "35px", height: "30px" }}
            >
              <TiUserAdd />
            </button>
            <button
              className="btn p-0"
              style={{ width: "40px", height: "40px" }}
            >
              <BsThreeDotsVertical />
            </button>
          </div>
        </header>

        <div className="search m-1">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <IoSearchSharp />
            </button>
          </form>
        </div>

       

</div>


<SideContainer></SideContainer>
       

    </>
  );
};

export default SideBar;
