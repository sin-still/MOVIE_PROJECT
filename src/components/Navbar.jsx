import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import "./Navbar.scss";
import logo from "../img/logo.svg";


const Navbar = () => {
    return (
        <nav>
            <h2 className='logo '><Link to="/"><img src={logo} alt="" /></Link></h2>
            <ul>
                <li className='nav-item'><NavLink to='./'>HOME</NavLink></li>
                <li className='nav-item'><NavLink to='./movies'>MOVEIS</NavLink></li>
                <li className='nav-item'><NavLink to='./user'>USER</NavLink></li>
            </ul>
            <div className="snsBox">
                <CgFacebook  className="snsIcon"/><AiOutlineInstagram  className="snsIcon"/><AiOutlineTwitter className="snsIcon" />
            </div>
        </nav>
    );
};

export default Navbar;