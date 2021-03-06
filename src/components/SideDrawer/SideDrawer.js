import React from 'react';
import './SideDrawer.css';

const sideDrawer = props =>{ 
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Contact Us</a></li>
        </ul>
    </nav>
)
}

export default sideDrawer;
