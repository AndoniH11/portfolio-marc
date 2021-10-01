import React from 'react';

//IMPORTACIÓN DE MÓDULOS
import NavBar from '../components/NavBarWhite';
import HeaderProjects from './HeaderProjects';
import Styles from './Styles';
import Contact from './Contact';


//IMPORT IMAGES
import SpaceTravelHeader from '../assets/img/SpaceTravel/SpaceTravelHeader.png';
import ProblemSpace from '../assets/img/SpaceTravel/ProblemSpace.png';
import WireframesSpace from '../assets/img/SpaceTravel/WireframesSpace.png';
import StylesImg from '../assets/img/SpaceTravel/StylesImg.png';
import TypoImg from '../assets/img/SpaceTravel/TypoImg.png';
import ButtonsImg from '../assets/img/SpaceTravel/ButtonsImg.png';
import Solution1 from '../assets/img/SpaceTravel/Solution1.png';
import Solution2 from '../assets/img/SpaceTravel/Solution2.png';
import Solution3 from '../assets/img/SpaceTravel/Solution3.png';
import Conclusion from '../assets/img/SpaceTravel/Conclusion.png';

class SpaceTravel extends React.Component{
    state = {
        header: {
            img: SpaceTravelHeader,
            title: 'SPACE TRAVEL',
            clase: 'space-travel-header project-header'
        },
        styles: {
            coloursImg: StylesImg,
            typoImg: TypoImg,
            buttonsImg: ButtonsImg
        }
    }
    render(){

        return(
            <div className="space-travel proyecto">
                <NavBar/>
                <HeaderProjects key={1} header={this.state.header}/>
                <section className="overview">
                    <div >
                        <h2>OVERVIEW</h2>
                        <p>Space Travel is an innovate company based in California which purpouse is offer an unforgettable experience travelling to Mars at the best price.</p>
                        <p>It was our first mini master project to familiarize ourselves with the design programs and understand the process behind a project.</p>
                    </div>

                    <div className="right-div">
                        <h2>Role & Duration</h2>
                        <p>UX/UI Designer: Product Thinking, Interaction, Visual design & Prototyping</p>
                        <p>3 months 2019/2020</p>
                        <p>Team: Solo</p>
                    </div>
                </section>

                <section className="objective-container">
                    <div className="objective-wrapper">
                        <div>
                            <h2>DEFINE THE OBJECTIVE</h2>
                            <p>The focus of this project was to atract rich people to spend their holidays in space and encourage them to book it with Space Travel.</p>
                        </div>
                        
                    </div>   
                </section>

                <section className="problem-container">
                    <div className="problem-wrapper wrapper">
                        <h2>FIND THE PROBLEM, EXPLORE SOLUTIONS</h2>
                        <p>How to create impact, to explain clearly the benefits of travelling with the company and to invite them to join us? Booking easily through the WebApp creating a good atmosphere with some modern and carefree touches using space images and subtle interactions.</p>

                        <div className="problem-image-container">
                            <img src={ProblemSpace} alt="imagen ipad"/>
                        </div>
                    </div>
                </section>

                <section className="wireframes-container">
                    <div className="wireframes-wrapper wrapper">
                        <h2>WIREFRAMES, FIRST CONTACT</h2>
                        <p>As a first mini-project to familiarize ourselves with the design process we didn’t made any research so we passed to ideation phase directly. </p>
                        <p> This wireframes helped me to start with the guerrilla testing, to validate the functionalities and detect some issues with the interactions.</p>
                        <p>After these testing I iterated the wireframes and added some colors and text style</p>

                        <div className="wireframe-images-container">
                            <img src={WireframesSpace}/>
                        </div>
                    </div>
                </section>

                <Styles key={1} styles={this.state.styles}/>

                <section className="solution-container">
                    <div className="solution-wrapper">
                            <h2>SOLUTION</h2>
                            <div className="solution-content">
                                <p>I created a responsive application webApp (always user centered) explaining the beneffits and advantages of using this company to travel to mars.</p>
                                <p> As for the company necessities, we put “call to action” buttons in each step driving the user to book a travel ticket.</p>
                            </div>
                    </div>
                </section>

                <div className="solution-images-container">
                    <img src={Solution1} alt="solution-image"/>
                    <img src={Solution2} alt="solution-image"/>
                    <img src={Solution3} alt="solution-image"/>
                </div>

                <section className="objective-container conclusion-container">
                    <div className="objective-wrapper">
                        <h2>CONCLUSION, BEING HONEST</h2>
                        <p>This mini-project helped us to understand the design method, starting with some wireframes, if it fits then improve it.</p>
                        <p>Also to understand the design program (FIGMA), playing with the tools and introducing us into prototyping (I think it’s one of my favorite parts). </p>
                        <p>In conclusion I have to say, it´s not a great design but it was a good start to help me become a UX/UI designer.</p>

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

export default SpaceTravel