import React, { useState , useEffect } from 'react';
import { Avatar } from "@material-ui/core"
import './SidebarChat.css';
import { MoreVert, SearchOutlined } from '@material-ui/icons';
import db from "./firebase"
import {Link} from "react-router-dom";


function SidebarChat({addNewChat}) {
  const [seed,setSeed]=useState("");

useEffect(() => { 
  setSeed(Math.floor(Math.random()*5000));
},[]);

const createChat = () => {
  const roomName = prompt ("Please enter for chat room  :: ");
  
  if (roomName){
db.collection("rooms").add({name: roomName,});
 }
};

  return !addNewChat ?(
    <Link to ={`/rooms/${id}`}>
    <div className='sidebarChat'>
      <Avatar src="https://api.dicebear.com/7.x/big-smile/svg" />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
    </Link>
  ) : (
      <div onClick={createChat} 
      className="sidebarChat">
        <h2>Add New Chat</h2> 
      </div>
  );
  }
export default SidebarChat;
