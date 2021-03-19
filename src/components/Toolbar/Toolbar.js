import React from 'react';
import {Link} from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = props => (
<header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar__logo"><a href="/">Logo</a></div>
        <div className="spacer"></div>
        <div className="toolbar_navigation_items">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            
            </ul>
        </div>
    </nav>
</header>
) 

export default Toolbar;

