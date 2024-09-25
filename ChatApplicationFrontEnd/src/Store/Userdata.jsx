import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export const UserData = createContext();
const messageStore = {
  11: [
    { text: "Hello, John!", timestamp: "2024-09-11T10:00:30Z", sender: "user" },
    { text: "Hi", timestamp: "2024-09-11T10:01:00Z", sender: "received" },
  ],
  22: [
    { text: "Hi, Jane!", timestamp: "2024-09-11T10:05:30Z", sender: "user" },
    { text: "Hello!", timestamp: "2024-09-11T10:06:00Z", sender: "received" },
  ],
};
export const DataProvider = ({ children, isSubscribed }) => {
  const [users, setUsers] = useState([]);
  
  
  const [groupMessages, setGroupMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [subName, setSubName] = useState("");

  const stompClientRef = useRef(null); // WebSocket client reference
  
  // WebSocket connection function
  useEffect(() => {
    const connect = () => {
      const socket = new SockJS("http://localhost:8080/ws");
      const client = Stomp.over(socket);

      client.connect(
        { username: subName },
        (frame) => {
          console.log("Connected: " + frame);
          setIsConnected(true);
          stompClientRef.current = client;

          // Subscribe to online users topic
          client.subscribe("/topic/onlineUsers", (message) => {
            const onlineUsers = JSON.parse(message.body);
            console.log("Online Users:", onlineUsers);
            setUsers(onlineUsers);
          });
 
          

          // Send request to get initial online users
          client.send("/app/getOnlineUsers", {}, {});

          // Subscribe to group messages
          const groupSubscription = client.subscribe("/topic/messages", (message) => {
            const newMessage = JSON.parse(message.body);
            setGroupMessages((prevMessages) => [...prevMessages, newMessage]);
          });

          // Subscribe to private messages for current user
          const privateSubscription = client.subscribe( `/user/${subName}/queue/messages`,
         
             
            (message) => {
              const newMessage = JSON.parse(message.body);
              console.log(`user ${subName} got subscribed `);
              setPrivateMessages((prevMessages) => [...prevMessages, newMessage]);
            }
          );

          // Cleanup function
          return () => {
            groupSubscription.unsubscribe();
            privateSubscription.unsubscribe();
          };
        },
        (error) => {
          console.error("Error connecting: " + error);
          setIsConnected(false);
        }
      );
    };

    if (isSubscribed && subName && !isConnected) {
      connect(); // Only connect when subscribed and subName is set
    }

    return () => {
      if (stompClientRef.current && isConnected) {
        stompClientRef.current.disconnect(() => {
          console.log("Disconnected");
          setIsConnected(false);
        });
      }
    };
  }, [isSubscribed, subName, isConnected]);

  // Send message function
  const sendMessage = useCallback(
    (chatMessage) => {
      if (stompClientRef.current && isConnected) {
        stompClientRef.current.send("/app/send", {}, JSON.stringify(chatMessage));
      }
    },
    [isConnected]
  );

  // Send private message function
  const sendPrivateMessage = useCallback(
    (chatMessage) => {
    console.log(" private messah=ge method invoked");
      
    setPrivateMessages((prevMessages) => [...prevMessages, chatMessage])
      if (stompClientRef.current && isConnected) {
        console.log(" private message inside the condition");
        stompClientRef.current.send("/app/private-message", {}, JSON.stringify(chatMessage));
      }
    },
    [isConnected]
  );

  return (
    <UserData.Provider
      value={{
        
        users,
        groupMessages,
        sendMessage,
        privateMessages,
        sendPrivateMessage,
        setSubName,subName
      }}
    >
      {children}
    </UserData.Provider>
  );
};
