import React,{useState,useEffect} from "react";
import { Avatar } from "@material-ui/core"
import './SidebarChat.css';
<<<<<<< HEAD
import './Sidebar'
function SidebarChat({ addNewChat, rName }) {
  const [seed, setSeed] = useState("");

=======
import db from "./firebase"



function SidebarChat({addNewChat}) {
  const [seed,setSeed] = useState("");
>>>>>>> 7e968ede18a9881f3861e6106926651adfe0e2f9
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat : : ");
<<<<<<< HEAD
    if (roomName) {
      
=======
    if(roomName){
      db.collection('rooms').add({name : roomName})
>>>>>>> 7e968ede18a9881f3861e6106926651adfe0e2f9
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src="https://api.dicebear.com/7.x/big-smile/svg" />
<<<<<<< HEAD
      <div className="sidebarChat__info">
        <h2>{rName}</h2>
=======
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
>>>>>>> 7e968ede18a9881f3861e6106926651adfe0e2f9
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;