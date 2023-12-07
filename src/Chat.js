import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase/compat/app';
import { useStateValue } from './StateProvider';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                // setRoomName fonksiyonunu çağırmadan önce değeri kontrol et
                const roomData = snapshot.data();
                if (roomData) {
                    setRoomName(roomData.name);
                }
            })
            db.collection('rooms').doc(roomId).
                collection('messages').
                orderBy('timestamp', 'asc').
                onSnapshot(snapshot => (
                    setMessages(snapshot.docs
                        .map(doc => doc.data()))
                ));
        }
    }, [roomId])


    useEffect(() => { setSeed(Math.floor(Math.random() * 5000)) }, []);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed>>>>>>>", input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message : input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            
        });



        setInput("");
    }


    return <div className="chat">
        <div className="chat_header">
            <Avatar src={'https://api.dicebear.com/7.x/bottts/svg?seed=Charlie'} />
            <div className="chat_headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at...</p>
            </div>
            <div className="header_right">
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
        </div>
        <div className="chat_body">
            {messages.map((message, index) => (
                <p key={index} className={`chat_message ${true && 'chat_reciever'}`}>
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    <span className="chat_timestamp">
                        {new Date(message.timestamp?.toDate()).toLocaleString('en-US', { timeZone: 'Europe/Istanbul' })}
                    </span>

                </p>
            ))}
        </div>

        <div className="chat_footer">
            <InsertEmoticonIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                <button onClick={sendMessage} type="submit">Send a Message</button>
            </form>
            <MicIcon />
        </div>
    </div>;
}

export default Chat;
