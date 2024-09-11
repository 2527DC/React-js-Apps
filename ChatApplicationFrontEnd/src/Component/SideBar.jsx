import { IoSearchSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./SideBar.css";

const SideBar = ({onUserSelect}) => {

  const users = [
    { id: 1, name: 'John Doe', status: 'online', img: 'src/assets/DSC00927.JPG' },
    { id: 2, name: 'Jane Smith', status: 'offline', img: 'src/assets/DSC00921.JPG' },
    { id: 3, name: 'Alice Johnson', status: 'working', img: 'src/assets/DSC01174.JPG' },
    { id: 4, name: 'John Doe', status: 'online', img: 'src/assets/DSC00927.JPG' },
    { id: 5, name: 'Jane Smith', status: 'offline', img: 'src/assets/DSC00921.JPG' },
    
  ];

  const handleUserClick = (user) => {
    onUserSelect(user); // Pass selected user to parent component
  };

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

<div className="sideContainer">
      {users.map((u) => (
        <div
          key={u.id}
          className="users d-flex align-items-center m-1 p-1"
          onClick={() => handleUserClick(u)} // Handle user click
        >
          <img
            src={u.img}
            alt="Profile"
            className="img-fluid rounded-circle border border-danger"
            style={{ width: '50px', height: '50px' }}
          />
          <div className="ms-3">
            <span className="d-block fw-bold">{u.name}</span>
            <span className="d-block" style={{ fontSize: '13px' }}>
              {u.status}
            </span>
          </div>
          <span className="ms-auto" style={{ fontSize: '13px' }}>
            {u.status}
          </span>
        </div>
      ))}
    </div>
       

    </>
  );
};

export default SideBar;
