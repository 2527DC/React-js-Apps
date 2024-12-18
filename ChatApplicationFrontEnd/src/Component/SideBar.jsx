import { IoSearchSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./SideBar.css";
import { useContext } from "react";
import {UserData } from "../Store/Userdata";

const SideBar = ({onUserSelect}) => {

 const {users} = useContext(UserData);


  const handleUserClick = (user) => { 
    onUserSelect(user); // Pass selected user to parent component
  };

  return (
    <>
  
    <div className="container">
      
      <header className=" sidebar-header d-flex align-items-center ">
        <strong>Chats</strong>
        <div className="d-flex ms-auto">
          <button
            className="btn p-0 "
            style={{ width: "40px", height: "40px" }}
          >
            <TiUserAdd  className="me-5" style={{ width: "20px", height: "20px" }}/>
          </button>
          <button
            className="btn p-0"
            style={{ width: "40px", height: "40px" }}
          >
            <BsThreeDotsVertical  className="me-5" style={{ width: "20px", height: "20px" }}/>
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
          <button className="btn  btn-outline-success" type="submit">
            <IoSearchSharp  />
          </button>
        </form>
      </div>

     

</div>

<div className="sideContainer">
    {users.map((u) => (
      <div
        key={u.id}
        className="users d-flex align-items-center m-2 p-1"
        onClick={() => handleUserClick(u)} // Handle user click
      >
        <img
          src={u.image}
          alt="Profile"
          className="img-fluid rounded-circle border border-danger"
          style={{ width: '50px', height: '50px' }}
        />
        <div className="ms-3">
          <span className="d-block fw-bold">{u.username}</span>
          <span className="d-block" style={{ fontSize: '11px' }}>
            {u.status}
          </span>
        </div>
        <span className="ms-auto me-3" style={{ fontSize: '13px' }}>
          {u.status}
        </span>
      </div>
    ))}
  </div>
     

      

    </>
  );
};

export default SideBar;
