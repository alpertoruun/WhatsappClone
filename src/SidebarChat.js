import React from 'react';
import { Avatar } from "@material-ui/core"
import './SidebarChat.css';
function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar src="https://api.dicebear.com/7.x/big-smile/svg" />
      <div className='sidebarChat__info'>
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  )
}

export default SidebarChat
