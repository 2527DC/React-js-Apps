import React, { createContext, useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import axios from 'axios'; // Import Axios for fetching users

export const UserData = createContext();
 // Example message store (can be moved out based on your use case)
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
  { id: 33, username: 'Alice Johnson', status: 'working', image: 'src/assets/DSC01174.JPG' },
  { id: 44, username: 'Mike Brown', status: 'online', image: 'src/assets/DSC00927.JPG' },
  { id: 55, username: 'Emily Davis', status: 'offline', image: 'src/assets/DSC00921.JPG' },
];
export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [stompClient, setStompClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false); 

  const [message,setMessage]= useState(messageStore)

  // Fetch users from the backend API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getUsers'); // Backend endpoint to get users
        const combinedUsers = [...initialUsers, ...response.data];
        setUsers(combinedUsers); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
      
    };

    fetchUsers(); // Call the function to fetch users when the component mounts
  }, []);

  // WebSocket connection function
  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws'); // WebSocket endpoint
    const client = Stomp.over(socket);
  
    client.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      setIsConnected(true);
      setStompClient(client);
  
      client.subscribe('/topic/messages', (message) => {
        const newMessage = JSON.parse(message.body);
        setMessage(prevMessages => ({
          ...prevMessages,
          [newMessage.receiverId]: [
            ...(prevMessages[newMessage.receiverId] || []),
            newMessage
          ]
        }));
      });
    }, (error) => {
      console.error('Error connecting: ' + error);
      setIsConnected(false);
    });
  
    return () => {
      if (isConnected && client) {
        client.disconnect(() => {
          console.log('Disconnected');
          setIsConnected(false);
        });
      }
    };
  }, []);
  
 

  // Providing users and message store to child components
  return (
    <UserData.Provider value={{ message, setMessage, users, stompClient }}>
      {children}
    </UserData.Provider>
  );
};
