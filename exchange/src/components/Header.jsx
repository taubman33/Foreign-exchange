import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(props) {
    return (
        <div className="Header">

            <div className= "title">
            <h1> Foreign Exchange</h1>
            </div>



            <div className='links'>
    
    <NavLink exact to="/" >
        <button className='header-buttons1'>Main Currencies</button>
    </NavLink>


    <NavLink exact to="/calculator" >
        <button className='header-buttons2'>Calculator</button>
    </NavLink>       
    </div>




        </div>
    )

}

export default Header