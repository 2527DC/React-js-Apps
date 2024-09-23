import React, { createContext, useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import axios from 'axios'; // Import Axios for fetching users

export const UserData = createContext();
const messageStore = {
  11: [
    { text: 'Hello, John!', timestamp: '2024-09-11T10:00:30Z', sender: 'user' },
    { text: 'Hi', timestamp: '2024-09-11T10:01:00Z', sender: 'received' },
  ],
  22: [
    { text: 'Hi, Jane!', timestamp: '2024-09-11T10:05:30Z', sender: 'user' },
    { text: 'Hello!', timestamp: '2024-09-11T10:06:00Z', sender: 'received' },
  ],
};
const initialUsers = [
  { id: 11, username: 'John Doe', status: 'online', image: 'src/assets/DSC00927.JPG' },
  { id: 22, username: 'Jane Smith', status: 'offline', image: 'src/assets/DSC00921.JPG' },
 
];

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [stompClient, setStompClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false); 
  const [message, setMessage] = useState(messageStore);
  const [groupmessages, setGroupMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);
  let currentUser =null;
  // Fetch users from the backend API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getUsers');
        const combinedUsers = [...initialUsers, ...response.data];
        setUsers(combinedUsers); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // WebSocket connection function
  useEffect(() => {
    const connect =()=>{
      
     
      const socket = new SockJS('http://localhost:8080/ws');
      const client = Stomp.over(socket);
      client.connect({}, (frame) => {
        console.log('Connected: ' + frame);
        setIsConnected(true);
        setStompClient(client);
    
        // Subscribe to messages
        const subscription = client.subscribe('/topic/messages', (message) => {
          const newMessage = JSON.parse(message.body);
         
         setGroupMessages((prevMessages) => [...prevMessages, newMessage]);
          // Update message state
          // setMessage((prevMessages) => ({
          //   ...prevMessages,
          //   [newMessage.receiverId]: [
          //     ...(prevMessages[newMessage.receiverId]||[] ),
          //     newMessage,
          //   ],
          // }));
          
        });

        client.subscribe(`/user/${currentUser}/queue/messages`, (message) => {
          const newMessage = JSON.parse(message.body);
          setPrivateMessages((prevMessages) => [...prevMessages, newMessage]);
        })
       
        
        // Cleanup function to unsubscribe
        return () => {
          subscription.unsubscribe();
        };
      }, (error) => {
        console.error('Error connecting: ' + error);
        setIsConnected(false);
      });
    
    }
   
    connect()
  
    return () => {
      if (isConnected && client) {
        client.disconnect(() => {
          console.log('Disconnected');
          setIsConnected(false);
        });
      }
    };

  }, []);

  // Send message function
  const sendMessage = (chatMessage) => {
    if (stompClient && isConnected) {
      stompClient.send('/app/send', {}, JSON.stringify(chatMessage));
      
      // Optimistically update message store for the sender if needed
    }
  };
  const sendPrivateMessage = (chatMessage ,user) => {

    currentUser=user
    if (stompClient && isConnected) {
      stompClient.send('/app/send-private', {}, JSON.stringify(chatMessage));
      
      // Optimistically update message store for the sender if needed
    }
  };

  return (
    <UserData.Provider value={{ message, users, groupmessages,sendMessage ,privateMessages ,sendPrivateMessage}}>
      {children}
    </UserData.Provider>
  );
};
