import React from 'react';

//IMPORT MODULES
import NavBar from './NavBarWhite';
import Contact from './Contact';
import HeaderProjects from './HeaderProjects';
import Styles from './Styles';

//IMPORT IMAGENES
import CatalunyaHeader from '../assets/img/Catalunya/CatalunyaHome.png';
import ProblemCatalunya from '../assets/img/Catalunya/ProblemCatalunya.png';
import CatalunyaWireframe1 from '../assets/img/Catalunya/CatalunyaWireframe1.png';
import CatalunyaWireframe2 from '../assets/img/Catalunya/CatalunyaWireframe2.png';
import CatalunyaWireframe3 from '../assets/img/Catalunya/CatalunyaWireframe3.png';
import CatalunyaWireframe4 from '../assets/img/Catalunya/CatalunyaWireframe4.png';
import StylesImg from '../assets/img/Catalunya/StylesImg.png';
import TypoImg from '../assets/img/Catalunya/TypoImg.png';
import ButtonsImg from '../assets/img/Catalunya/ButtonsImg.png';
import Solution1 from '../assets/img/Catalunya/Solution1.png';
import Solution2 from '../assets/img/Catalunya/Solution2.png';
import Solution3 from '../assets/img/Catalunya/Solution3.png';
import Solution4 from '../assets/img/Catalunya/Solution4.png';
import Solution5 from '../assets/img/Catalunya/Solution5.png';
import Solution6 from '../assets/img/Catalunya/Solution6.png';
import Conclusion from '../assets/img/Catalunya/Conclusion.png';

class Catalunya extends React.Component{

    state = {
        header: {
            img: CatalunyaHeader,
            title: 'CATALUNYA.COM',
            clase: 'catalunya-header project-header'
        },
        styles: {
            coloursImg: StylesImg,
            typoImg: TypoImg,
            buttonsImg: ButtonsImg
        }
    }

    render(){

        return(
            <div className="proyecto catalunya">
                <NavBar/>
                <HeaderProjects key={1} header={this.state.header}/>

                <section className="overview">
                    <div >
                        <h2>OVERVIEW</h2>
                        <p>Catalunya.com is a website created to attract turism to Catalonia. Offering a lot of activities, events and routes adapting this range of options to all type of people.
                            Also wants to help the user offering the oportunity of buy experience at the moment with the platform “Experience Catalunya”.</p>
                    </div>

                    <div className="right-div">
                        <h2>Role & Duration</h2>
                        <p>UX/UI Designer: Product Thinking, Interaction, Visual design & Prototyping</p>
                        <p>1 week 2020</p>
                        <p>Team: Solo</p>
                    </div>
                </section>

                <section className="objective-container">
                    <div className="objective-wrapper">
                        <div>
                            <h2>DEFINE THE OBJECTIVE</h2>
                            <p>The objective of this projects was:</p>
                            <ul>
                                <li>
                                    Design a new information arquitecture proposal.
                                </li>
                                <li>
                                    Design a new visual propopsal.
                                </li>
                                <li>
                                Responsive design it for Desktop and Mobile.
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </section>

                <section className="problem-container">
                    <div className="problem-wrapper wrapper">
                        <h2>FIND THE PROBLEM, EXPLORE SOLUTIONS</h2>
                        <p>I had 4 points to cover:</p>
                        <ul>
                            <li><span>OVERINFORMATION:</span> Seems like they wanted to show a lot of information to the user, but that is overwhelming and unuseful.</li>
                            <li><span>ORDER:</span> It’s really hard to find what you want. </li>
                            <li><span>THE SEARCHER:</span> is poorly understood.</li>
                            <li>Information repeated.</li>
                        </ul>

                        <div className="problem-image-container">
                            <img src={ProblemCatalunya} alt="imagen ipad"/>
                        </div>
                    </div>
                </section>

                <section className="architecture-container">
                    <div className="architecture-wrapper">
                        <h2>ARCHITECTURE</h2>
                        <p>I changed the architecture to order all the information starting with the menu.</p>
                        <p>I separated the menu by epics:</p>
                        <ul>
                            <li>What to see</li>
                            <li>Where to go </li>
                            <li>Activities</li>
                            <li>Organize your trip</li>
                        </ul>
                    </div>
                </section>

                <section className="wireframes-container">
                    <div className="wireframes-wrapper wrapper">
                        <h2>WIREFRAMES, FIRST CONTACT</h2>
                        <p>This wireframes helped me to start with the guerrilla testing to validate the functionalities and detect some issues with the interactions.</p>
                        <p> After these testings I iterated the wireframes and added some colors and text style.</p>

                        <div className="wireframe-images-container">
                            <img src={CatalunyaWireframe1}/>
                            <img src={CatalunyaWireframe2}/>
                            <img src={CatalunyaWireframe3}/>
                        </div>

                        <div className="wireframe-images-container wireframe-images-container-2">
                            <img src={CatalunyaWireframe4}/>
                        </div>
                    </div>
                </section>

                <Styles key={1} styles={this.state.styles}/>
                
                <section className="solution-container">
                    <div className="solution-wrapper">
                        <h2>SOLUTION</h2>
                        <div className="solution-content">
                            <ul>
                                <li>Cleaning the menu to order the sections and reduce the colors</li>
                                <li>Delete the searcher in the middle of the screen</li>
                                <li>Social media in monochrome</li>
                                <li>Added a new view mode to people with vision problems</li>
                                <li>Change the structure to do more understandable the information</li>
                            </ul>
                            <div className="right-div">
                                <img src={Solution1} alt="solution-image"/>
                                <img src={Solution2} alt="solution-image"/>
                            </div>
                        </div>

                        <div className="solution-images-container">
                                <img src={Solution3} alt="solution-image"/>
                                <img src={Solution4} alt="solution-image"/>
                                <img src={Solution5} alt="solution-image"/>
                                <img src={Solution6} alt="solution-image"/>
                            </div>

                    </div>
                </section>

                <section className="objective-container conclusion-container">
                    <div className="objective-wrapper">
                        <h2>CONCLUSION</h2>
                        <p>Designing this web-app it was a challenge because it’s about to raising a new product from the bottom.With this project we could saw every phase to build a platform. The research, insights, defining the problem, ideation and definition, they were very important and each step generated uncertainties, but at least we could keep going and the result is the reflection of very hard work.</p>

                        <div className="conclusion-image-container">
                            <img src={Conclusion} alt="project-image"/>
                        </div>
                    </div>
                </section>

                <Contact/>
            </div>
        )
    }
}

export default Catalunya