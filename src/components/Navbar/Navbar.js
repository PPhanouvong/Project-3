import React from 'react';
import './Navbar.css';
import { Navbar, NavItem, Icon } from 'react-materialize';

const MyNavbar = () => {
    return (
        <div>
            <Navbar className='grey-text black' id='nav' brand='Project 3' right>
                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
            </Navbar>
        </div>
    );
};

export default MyNavbar;