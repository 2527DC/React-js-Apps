
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatApplication from './Component/ChatApplication';
import { DataProvider } from './Store/Userdata';
import React, { useEffect, useState } from 'react';
import Chat from './ChatApp';
import GroupChat from './Component/GroupChat';
import ChatComponent from './Component/Private';
import Subscribe from './Component/Subscribe';


function App() {


  const [isSubscribed, setIsSubscribed] = useState(false); // Track subscription state

  
  return (
    <>
    
   <DataProvider  isSubscribed= {isSubscribed}>
   {
  isSubscribed ?    <ChatApplication></ChatApplication>:<Subscribe  setIsSubscribed={setIsSubscribed}></Subscribe>
}
 
   </DataProvider>
{/* <ChatComponent/> */}



    </>
  )
}

export default App
 