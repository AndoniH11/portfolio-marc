import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/Logo.png';


const NavBar = () => {
    return(
        <header>
            <nav className="navbar">
                <div className="logo-container">
                    <Link to={''}><img src={Logo} alt="Logo" className="logo"/></Link>
                </div>

                <div className="menu-container">
                    <ul className="menu">
                        <li>
                            <a href="#featured-cards" className="works-link">Works</a>
                        </li>
                        <li>
                            <Link to={'about-me'}><a href="" className="about-link">About</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar