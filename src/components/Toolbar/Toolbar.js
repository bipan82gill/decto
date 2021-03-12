import React from 'react';
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
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Contact Us</a></li>
            </ul>
        </div>
    </nav>
</header>
) 

export default Toolbar;

