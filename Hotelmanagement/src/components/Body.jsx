import React from "react";
import "./Body.css";
import NavBar from "./NavBar";
import WelcomeMessage from "./Welcome";

const Body = () => {
  return (
    <>
      <div
        className="first-section "
        style={{ backgroundImage: `url('public/background.webp')` }}
      >
        <div className="navbar">
          <NavBar></NavBar>
        </div>
        <center className="welcome  p-0">
          <WelcomeMessage></WelcomeMessage>
        </center>
      </div>

      <div className="second-session m-5 mt-1 ">
        <div className="row   mt-1">
          <div className="col-md-5  ">
            <h1 style={{ color: "#2f4970" }}>ABOUT US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident suscipit magni quam, et ipsum ex maiores doloremque
              optio a cum consequatur, iusto architecto minima tenetur sunt!
              Natus maxime repellat beatae?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Provident suscipit magni quam, et
              ipsum ex maiores doloremque optio a cum consequatur, iusto
              architecto minima tenetur sunt! Natus maxime repellat beatae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident suscipit magni quam, et ipsum ex maiores doloremque
              optio a cum consequatur, iusto architecto minima tenetur sunt!
              Natus maxime repellat beatae?
            </p>
          </div>
          <div className="col-sm-7 d-sm-block ">
            <div className="row h-50 ">
              <div
                className="col-sm-7 bi "
                style={{ backgroundImage: `url('public/r1.jpg')` }}
              ></div>{" "}
              <div
                className="col-md-5 bg-danger bi "
                style={{ backgroundImage: `url('public/2br4.jpg')` }}
              ></div>
            </div>
            <div
              className="row bg-primary h-50   bi bg-cover bg-center "
              style={{ backgroundImage: `url('public/3br1.jpg')` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="third-section mt-5">

      </div>
    </>
  );
};

export default Body;
