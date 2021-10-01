import React from 'react';

//IMPORTACIÓN DE MÓDULOS
import NavBar from '../components/NavBarWhite';
import Contact from './Contact';

//IMPORTACIÓN DE IMÁGENES

import Marc from '../assets/img/MarcAboutMe.png';
import Troy from '../assets/img/Troy.png';
import About1 from '../assets/img/AboutMe/About1.jpg';
import About2 from '../assets/img/AboutMe/About2.jpg';
import About3 from '../assets/img/AboutMe/About3.jpg';
import About4 from '../assets/img/AboutMe/About4.jpg';
import About5 from '../assets/img/AboutMe/About5.jpg';
import About6 from '../assets/img/AboutMe/About6.jpg';

class About extends React.Component{
    render(){
        return(
            <div className="proyecto about-me">
                <NavBar/>

                <section className="about-me-intro">
                    <div className="about-me-intro-wrapper">
                        <h1>ABOUT ME</h1>
                        <div className="about-me-intro-content">
                            <div className="about-me-intro-text">
                                <div>
                                    <p>Hi!</p>
                                    <p className="troy-paragraph"> I'm Troy McClure, you may remember me from...</p> <img className="troy" src={Troy} alt="Troy"/>
                                    <p>just kidding.</p>
                                    <p> I'm Marc and I'm a <span>UX/UI and product designer</span> with <span>QA testing experience</span> always looking for new challenges and trying to get the best of myself.</p>
                                </div>

                                <div>
                                    <p>
                                    I was Born in Barcelona in 1993 and I wasn't a great study at school actually, but then I discovered the design world and my mind changed completely. I graduated as a product designer and studied a <span>master</span>  about user experience design at BAU design school, where I learned above all to <span>design for users</span> (people).
                                    </p>
                                </div>
                                <div>
                                    <p>
                                    I’m an active person who love to do some sports like play football, snowboard, surf, fitness, etc. Always rounded of friends and enjoying life as much I can.
                                    Also I like to draw, play the guitar and do some photographies as a hobbie.
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Nowadays I'm working at Capgemini as QA tester but as I said before, I'm <span>always looking for new challenges</span> so if you want we can have a coffee and talk about your project.
                                    </p>
                                </div>
                            </div>

                            <div className="about-me-intro-image">
                                <img src={Marc} alt="picture of Marc"/>
                            </div>

                        </div>

                    </div>

                </section>

                <section>
                   <div className="about-me-pictures">
                        <p>I let you with some of my pictures, hope you enjoy it :)</p>

                        <div className="about-me-pictures-wrapper">
                            <img src={About1} />
                            <img src={About2} />
                            <img src={About3} />
                            <img src={About4} />
                            <img src={About5} />
                            <img src={About6} />
                        </div>
                    </div>
                </section>

                <Contact/>
            </div>
        )
    }
}

export default About