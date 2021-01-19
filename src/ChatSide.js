import React from 'react';
import MessageInput from './MessageInput';

const ChatSide = () =>{ 
    return(
        <div className="chat-side">
            <div className="chat-box">
                {messages.map((props) => (
                    Message(props)
                ))}                    
            </div>          
            <MessageInput/>        
        </div>    
    );
}
export default ChatSide;

function Message(props){
    return(
        <div className="all-messages">
            <p className={props.class}>{props.text}</p>
        </div>
    );
}

const messages = [
    {
        text : "Hi",
        class: "left-chat"
    },
    {
        text : "Hy",
        class: "right-chat"
    },
    {
        text : "How are you",
        class: "left-chat"
    },
    {
        text : "Good",
        class: "right-chat"
    },
    {
        text : "Hy",
        class: "right-chat"
    },
    {
        text : "How are you",
        class: "left-chat"
    },
    {
        text : "Good",
        class: "right-chat"
    },
    {
        text : "Hy",
        class: "right-chat"
    },
    {
        text : "How are you",
        class: "left-chat"
    },
    {
        text : "Good",
        class: "right-chat"
    },
    {
        text : "How are you",
        class: "left-chat"
    },
    {
        text : "Good",
        class: "right-chat"
    }
]