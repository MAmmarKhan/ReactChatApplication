import React from 'react';

const MessageInput = () =>{ 
    return(
        <form action="hello" method="" id="textMessage" className="display-flex">
            <input type="text" placeholder="Message..."></input>       
            <button type="submit" form="textMessage" value="Submit" className="send">Submit</button>
        </form>   
    );
}
export default MessageInput;
