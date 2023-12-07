import React,{useState,useEffect} from "react";
import { Avatar } from "@material-ui/core"
import './SidebarChat.css';
import './Sidebar'
import db from "./firebase"
import {Link} from "react-router-dom";

function SidebarChat({ addNewChat, rName ,r_id }) {
  const [seed, setSeed] = useState("");
  const[message,setMessages]=useState("")
  useEffect(() => {
    if (r_id) {
      db.collection("rooms")
        .doc(r_id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [r_id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat : : ");
    if (roomName) {
      db.collection('rooms').add({
        name : roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${r_id}`}>
    <div className="sidebarChat">
      <Avatar src="https://api.dicebear.com/7.x/big-smile/svg" />
      <div className="sidebarChat__info">
        <h2>{rName}</h2>
      <p> {message[0]?.message}</p>
      </div>
    </div>
  </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;