import React from 'react';
const friendsNames = [
    {name : "Foxy"},
    {name : "Ammar"},
    {name : "John"},
    {name : "Foxy"},
    {name : "Ammar"},
    {name : "Foxy"},
    {name : "Ammar"}
]
const Menu = () =>{
    return(
        <div className="menu-side"> 
                <div className="account-info">
                    <span class="circle"></span>
                    <span className="logo"> Chat-App </span>
                </div>
                <label >
                    <input className="search-bar" placeholder="Search..."></input>
                </label>
                <div className="friend-list">
                    {friendsNames.map((props,index) => (
                        <li className="card">{props.name}</li>
                    ))}                    
                </div>
            </div>
    );
}
export default Menu;