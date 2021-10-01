import React from 'react';

import Marc  from '../assets/img/Marc.png';
import linkedin from '../assets/img/linkedin.png';
import behance from '../assets/img/behance.png';
import gmail from '../assets/img/gmail.png';
import arrow from '../assets/img/Arrow.png';

import NavBar from './NavBar'
import FeaturedCards from './FeaturedCards';
import Contact from './Contact';

class Home extends React.Component{
    render(){
        return(
            <div className="home-container">
                <NavBar/>
                <div className="intro-container">
                    <div className="intro-text">
                        <h1>Hello! This is Marc, I’m a UX/UI & product designer from Barcelona.</h1>
                        <h2>Good designs for good experiences.</h2>
                        <div >
                            <ul className="social-container">
                                <li>
                                    <a href="https://www.linkedin.com/in/marc-mart%C3%ADn-saumell-76944ab4/"><img src={linkedin} className="linkedin"/></a>
                                </li>

                                <li>
                                    <a href="https://www.behance.net/marcmartin52ba"><img src={behance}/></a>
                                </li>

                                <li>
                                    <a href="mailto:marcmartinsaumell@gmail.com"><img src={gmail} className="gmail"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="intro-foto-container">
                        <img src={Marc} alt="Foto Marc"/>
                    </div>
                </div>
                <div className="arrow-container">
                    <img src={arrow} alt="arrow"/>
                </div>

                <div className="cards-container">
                    <div className="card"></div>
                </div>
                <FeaturedCards/>
                <Contact/>
            </div>
        )
    }
}

export default Home