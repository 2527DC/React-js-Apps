import { BsThreeDotsVertical } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import './chatroom.css'

const ChatRoom = () => {
  return (
    <div className="chatRoomContainer">
      <header className="d-flex align-items-center  p-1 m-1">
        <img
          src="src/assets/DSC00927.JPG"
          alt="Profile"
          className="img-fluid rounded-circle border border-danger"
          style={{ width: "50px", height: "50px" }} // Set fixed size for the image
        />
        <div className="ms-auto">
          <button className="btn p-0 me-2" style={{ width: "35px", height: "35px" }}>
            <FaVideo />
          </button>
          <button className="btn p-0 me-2" style={{ width: "35px", height: "35px" }}>
            <TiUserAdd />
          </button>
          {/* More Options Button */}
          <button className="btn p-0" style={{ width: "40px", height: "40px" }}>
            <BsThreeDotsVertical />
          </button>
        </div>
      </header>
      <div class="chatContainer m-2 d-flex flex-column ">
  <p class="received p-2 rounded">Hi bro, how are you? n,kdbjhsjkhvkhdsukhkhdsgk hhjdvjvhdjvjdvjhdmjjdvhjhvdhvjvhdjvhkjdvhhvdhvdh</p>
  <p class="sent p-2 rounded">Hi bro, I am fine!</p>
  <p class="received p-2 rounded">Hi bro, how are you? n,kdbjhsjkhvkhdsukhkhdsgk hhjdvjvhdjvjdvjhdmjjdvhjhvdhvjvhdjvhkjdvhhvdhvdh</p>
  <p class="sent p-2 rounded">Hi bro, I am fine!</p>
  <p class="received p-2 rounded">Hi bro, how are you? n,kdbjhsjkhvkhdsukhkhdsgk hhjdvjvhdjvjdvjhdmjjdvhjhvdhvjvhdjvhkjdvhhvdhvdh</p>
  <p class="sent p-2 rounded">Hi bro, I am fine!</p>
  <p class="received p-2 rounded">Hi bro, how are you? n,kdbjhsjkhvkhdsukhkhdsgk hhjdvjvhdjvjdvjhdmjjdvhjhvdhvjvhdjvhkjdvhhvdhvdh</p>
  <p class="sent p-2 rounded">Hi bro, I am fine!</p>
  <p class="received p-2 rounded">Hi bro, how are you? n,kdbjhsjkhvkhdsukhkhdsgk hhjdvjvhdjvjdvjhdmjjdvhjhvdhvjvhdjvhkjdvhhvdhvdh</p>
  <p class="sent p-2 rounded">Hi bro, I am fine!</p>
</div>

      <footer >
      <button className="btn p-0 " style={{ width: "35px", height: "35px" }}>
      <MdEmojiEmotions />
          </button>
        
          <button className="btn p-0 me-2" style={{ width: "35px", height: "35px" }}>
          <IoMdAdd />
          </button>
          <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
           <button className="btn p-0 me-2" style={{ width: "35px", height: "35px" }}>
          <IoSend />
          </button> 

      </footer>
    </div>
  );
};

export default ChatRoom;
