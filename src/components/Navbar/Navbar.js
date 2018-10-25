import React from 'react';
import './Navbar.css';
import { Navbar, NavItem } from 'react-materialize';

const MyNavbar = () => {
    return (
        <div>
            <Navbar className='grey-text black text-lighten-3' brand='Project 3' right>
                <NavItem href='#!'>LOGIN</NavItem>
                <NavItem href='#!'>SIGNUP</NavItem>
            </Navbar>
        </div>
    );
};

export default MyNavbar;