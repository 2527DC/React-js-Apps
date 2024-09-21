
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatApplication from './Component/ChatApplication';
import { DataProvider } from './Store/Userdata';
import React, { useEffect } from 'react';
import Chat from './ChatApp';


function App() {



  return (
    <>
    
   <DataProvider>
   <ChatApplication></ChatApplication>
   </DataProvider>
{/* <Chat></Chat> */}
    </>
  )
}

export default App
 