import {Avatar, IconButton} from '@material-ui/core';
import { AttachFile,MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState , useEffect } from 'react';
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    const [seed,setSeed]=useState("");
    useEffect(()=> { setSeed(Math.floor(Math.random()*5000))},[]);

    return <div className="chat">
        <div className="chat_header">
    <Avatar src={'https://api.dicebear.com/7.x/bottts/svg?seed=Charlie'}/>
        <div className="chat_headerInfo">
            <h3>ROOM NAME</h3>
            <p>Last seen at...</p>
        </div>
        <div className="header_right">
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
        </div>
        <div className="chat_footer">

        </div>

    </div>;
}

export default Chat;
