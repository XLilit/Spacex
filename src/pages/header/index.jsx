import React, {useEffect, useRef, useState} from 'react';
import logo from '../../assets/images/logo.gif'
import './style.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    const [burger, setBurger] = useState(false)
    return (
        <div className='P-header G-container'>
            <div className='P-header-wrapper  G-flex G-justify-between G-align-center'>
                <div className="P-header-child G-flex G-align-center">
                    <div
                        className='P-header-logo'
                        style={{backgroundImage: `url('${logo}')`}}
                    />
                    <NavLink to='/'><h3 className='P-header-title'>SPACEX</h3></NavLink>
                </div>
                <div className='P-header-burger' onClick={() => setBurger(!burger)}>
                    <div className={`P-burger-wrapper ${burger ? 'P-burger-wrapper-active ' : ''}`}>
                        <div className={`P-burger-line ${burger ? 'P-burger-line-active' : ''}`}></div>
                        <div className={`P-burger-line ${burger ? 'P-burger-line-active' : ''}`}></div>
                        <div className={`P-burger-line ${burger ? 'P-burger-line-active' : ''}`}></div>
                    </div>
                </div>
                <div className={`P-header-child ${burger ? 'P-header-child-active' : ''}`}>
                    <ul className='P-header-list G-flex'>
                        <NavLink onClick={() => setBurger(false)} to='/trip' className='P-header-link'>Trips</NavLink>
                        <NavLink onClick={() => setBurger(false)} to='/about' className='P-header-link'>About</NavLink>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
