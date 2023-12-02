import {Avatar, IconButton} from '@material-ui/core';
import { AttachFile,MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState , useEffect } from 'react';
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";


function Chat() {
    const [seed,setSeed]=useState("");
    const [input,setInput]=useState("");

    useEffect(()=> { setSeed(Math.floor(Math.random()*5000))},[]);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>>", input);
        setInput("");
    };

  return( <div className='chat'>

    <div className="chat_header">
    <Avatar src={'https://api.dicebear.com/7.x/bottts/svg?seed=Charlie'}/>
    <div className='chat_headerInfo'>
        <h3 >Room Name</h3>
        <p> Last Seen At.. Apo</p>
    </div>
    <div>
        <div className='chat_headerRight'>
              <IconButton>
            <SearchOutlined/>
            </IconButton>  
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>
    </div>
</div> 

    <div className="chat_body">
    <p className={`chat_message ${true && "chat_reciever"}`}>
    <span className="chat_name">aNIL akgöl</span>
    <span className="chat_timestamp"> 3.52pm</span></p>

</div>
    <div className="chat_footer">
    <InsertEmoticonIcon/>
    <form>
        <input value={input} onChange ={e=> setInput(e.target.value)} placeholder="Mesaj Yaz"/>
        <button onClick={sendMessage} type="Submit">Send a message </button>
    </form>
    <MicIcon/>
     </div>
    </div>

    );
}

export default Chat;
