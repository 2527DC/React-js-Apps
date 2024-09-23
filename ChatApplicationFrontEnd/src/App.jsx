
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatApplication from './Component/ChatApplication';
import { DataProvider } from './Store/Userdata';
import React, { useEffect } from 'react';
import Chat from './ChatApp';
import GroupChat from './Component/GroupChat';
import ChatComponent from './Component/Private';


function App() {



  return (
    <>
    
   {/* <DataProvider>
   <ChatApplication></ChatApplication>
   </DataProvider> */}
<ChatComponent/>


    </>
  )
}

export default App
 