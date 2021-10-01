import React from 'react';
import Logo from '../assets/img/LogoWhite.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <header>
            <nav className="navbar navbar-white">
                <div className="logo-container">
                    <Link to={''}><img src={Logo} alt="Logo" className="logo"/></Link>
                    
                </div>

                <div className="menu-container">
                    <ul className="menu">
                        <li>
                            <a href="../../#featured-cards" className="works-link">Works</a>
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