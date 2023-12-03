import React,{useState,useEffect} from "react";
import { Avatar } from "@material-ui/core"
import './SidebarChat.css';
import './Sidebar'
import db from "./firebase"
function SidebarChat({ addNewChat, rName }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat : : ");
    if (roomName) {
      db.collection('rooms').add({
        rName : roomName,

      });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src="https://api.dicebear.com/7.x/big-smile/svg" />
      <div className="sidebarChat__info">
        <h2>{rName}</h2>
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