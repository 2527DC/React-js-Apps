
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatApplication from './Component/ChatApplication';
import { DataProvider } from './Store/Userdata';
import React, { useEffect, useState } from 'react';
import Subscribe from './Component/Subscribe';



function App() {


  const [isSubscribed, setIsSubscribed] = useState(false); // Track subscription state

  
  return (
    <>
    
   <DataProvider  isSubscribed= {isSubscribed}>

   {
  isSubscribed ?    <ChatApplication></ChatApplication>:<Subscribe  setIsSubscribed={setIsSubscribed}></Subscribe>
  }

{/* <ChatApp></ChatApp> */}

 {/* <GroupChat></GroupChat> */}
   </DataProvider>
   
{/* <ChatComponent/> */}



    </>
  )
}

export default App
 