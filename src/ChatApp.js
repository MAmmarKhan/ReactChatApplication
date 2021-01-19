import React from 'react';
import ChatSide from './ChatSide';
import Menu from './Menu';

const ChatApp = () => {
    return (
        <div className="screen">        
            <Menu/>                        
            <ChatSide/>     
        </div>
    )
}

export default ChatApp;
