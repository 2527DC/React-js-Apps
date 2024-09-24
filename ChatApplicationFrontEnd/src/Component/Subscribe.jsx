import { useContext, useRef, useState } from "react";
import { UserData } from "../Store/Userdata";

const Subscribe = ({setIsSubscribed}) => {
    
    const usernameRef = useRef(""); // Use a more descriptive name for clarity

     const {setSubName }=useContext(UserData)
    const handleSubscribe = (e) => {
        e.preventDefault();
        
        // Check if username is valid (not an empty string)
        if (usernameRef.current.value.trim() !== "") {
            setIsSubscribed(true); // Set subscribed to true after entering username
            setSubName(usernameRef.current.value)
            console.log("Subscribed with username:", usernameRef.current.value); // Optional: Log the username
        } else {
            alert("Please enter a valid username."); // Optional: Alert for empty username
        }
    };

    return (
        <>
            <center>
                <div className="subscribe-section d-flex justify-content-center p-2 mt-4">
                    <form 
                        onSubmit={handleSubscribe}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <h1>Enter your username</h1>
                        <input
                            type="text"
                            ref={usernameRef}
                            placeholder="Enter your username"
                            style={{
                                border: '2px solid white',
                                borderRadius: '2px',
                                padding: "10px",
                                margin: "10px 0",
                                width: "80%",
                                fontSize: "16px",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: "10px",
                                backgroundColor: "blue",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "16px",
                            }}
                        >
                            Join Chat
                        </button>
                    </form>
                </div>
            </center>
        </>
    );
};

export default Subscribe;
