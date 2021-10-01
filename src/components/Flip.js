import React from 'react';

//IMPORTACIÓN DE MÓDULOS
import NavBar from '../components/NavBarWhite';
import Contact from './Contact';

//IMPORTACIÓN DE IMÁGENES
import FlipBackground from '../assets/img/Flip/FLIP.gif';
import FlipSticker from '../assets/img/Flip/Flip-Sticker.png';
import FlipImg from '../assets/img/flip.png'
import Card1 from '../assets/img/Flip/FlipCard1.png'
import Card2 from '../assets/img/Flip/FlipCard2.png'
import Card3 from '../assets/img/Flip/FlipCard3.png';
import Card4 from '../assets/img/Flip/FlipCard4.png'
import Card5 from '../assets/img/Flip/FlipCard5.png'
import Card6 from '../assets/img/Flip/FlipCard6.png';
import RightArrow from '../assets/img/RightArrow.png'
import Paula from '../assets/img/Flip/paula.png';
import CustomerJourney from '../assets/img/Flip/customer.png';
import VolcadoInsights from '../assets/img/Flip/volcado-insights.png';
import IteracionMobile from '../assets/img/Flip/iteracion_mobile.png';
import FlipColours from '../assets/img/Flip/flipColours.png';
import FlipTypo from '../assets/img/Flip/flipTypo.png';
import FlipButtons from '../assets/img/Flip/flipButtons.png';
import SolutionGIF1 from '../assets/img/Flip/SolutionGif1.png';
import SolutionGIF2 from '../assets/img/Flip/SolutionGIF2.png'; 
import SolutionGIF3 from '../assets/img/Flip/SolutionGIF3.png';
import SolutionGIF4 from '../assets/img/Flip/SolutionGIF4.png';
import SolutionGIF5 from '../assets/img/Flip/SolutionGIF5.png';
import SolutionGIF6 from '../assets/img/Flip/SolutionGIF6.png';
import MacbookAir from '../assets/img/Flip/Macbook Air.png';
import MacScreen from '../assets/img/Flip/MacScreen.png';
import MacScreen2 from '../assets/img/Flip/MacScreen2.png';
import FlipBusiness1 from '../assets/img/Flip/FlipBusiness1.png';
import FlipBusiness2 from '../assets/img/Flip/FlipBusiness2.png';
import FlipBusiness3 from '../assets/img/Flip/FlipBusiness3.png';
import GifPubli from '../assets/img/Flip/BusinessGIF.png';



class Flip extends React.Component{
    render(){
        return(
            <div className="proyecto flip">
                <NavBar/>
                <section className="flip-intro-image">
                    <img src={FlipBackground} class="flip-background"/>
                    {/* <img src={FlipSticker} alt="Flip Logo"/> */}
                    {/* <ul>
                        <li>María Eugenia Pienovi</li>
                        <li>Laura Mañes</li>
                        <li>Javier Martinez</li>
                        <li>Marc Martinez</li>
                    </ul> */}
                </section>
                <section className="overview">
                    <div >
                        <h2>OVERVIEW</h2>
                        <p>Flip is an interactive tool to raise awareness about the environment. Informs and makes visible the invisible.
                            We fight for a better world changing the way of acting.
                            This stems from the need to encourage anyone who wants to change their way of life.</p>
                        <p>Discover the process that an animal or product for consumption goes through. And learn through our challenges how you can contribute with small actions.</p>
                    </div>

                    <div className="right-div">
                        <h2>Role & Duration</h2>
                        <p>UX/UI Designer: Product Thinking, Interaction, Visual design & Prototyping</p>
                        <p>7 months  2019/2020</p>
                        <p>Team: </p>
                        <ul className="overview-team">
                            <li>Laura Manyes</li>
                            <li>Javier Rodriguez</li>
                            <li>Maria Eugenia</li>
                            <li>Marc Martin</li>
                        </ul>
                    </div>
                </section>

                <section className="objective-container">
                    <div className="objective-wrapper">
                        <div>
                            <h2>DEFINE THE OBJECTIVE</h2>
                            <p>The objectives of this projects were:</p>
                            <ul>
                                <li>
                                    Raise awareness about the veggie movement.
                                </li>
                                <li>
                                    Engage the user through an interactive tool.
                                </li>
                                <li>
                                    Disclose the movement.
                                </li>
                            </ul>
                        </div>
                        
                        <img src={FlipImg}/>
                    </div>
                    
                </section>

                <section className="problem-container">
                    <div className="problem-wrapper wrapper">
                        <h2>FIND THE PROBLEM, EXPLORE SOLUTIONS</h2>

                        <ul>
                            <li>How can we spread the word about the vegetarian movement so that people know the benefits of this lifestyle? </li>
                            <li>How can we create an interactive infographic understable?</li>
                            <li>How to create the engagement?</li>
                            <li>Which type of images should we display?</li>
                            <li>Which stories we should show?</li>
                        </ul>
                    </div>

                    <div className="investigation-wrapper wrapper">
                        <div className="investigation">
                            <h2>INVESTIGATION</h2>
                            <p>We made a form from which we obtained around 100 responses and of these, 30% had a common concern, animal abuse. It was then that we decided to specifically investigate this group of people. Continuing with the search for this concern, we sat down to chat with vegans and vegetarians, waiting for them to tell us how difficult it was to go out to eat with friends or find a variety of products that adapt to their diet.</p>
                        </div>
                        <div className="investigation-cards">
                            <img src={Card1}/>
                            <img src={RightArrow}/>
                            <img src={Card2}/>
                            <img src={RightArrow}/>
                            <img src={Card3}/>
                        </div>
                    </div>
                </section>

                <section className="archetype-container">
                    <div className="archetype-wrapper wrapper">
                        <h2>ARCHETYPE</h2>
                        <p>From those interviews came Paula, our archetype. Paula is 25 years old, she is vegetarian and is committed to the environment. Need to disclose that there are various types of healthy eating.</p>
                        <div className="quote-container">
                            <div className="quote-image-container">
                                <img src={Paula} alt="foto de perfil de Paula"/> 
                                <h2>PAULA, 25</h2>
                            </div>
                            <div className="quote">
                                <p>“Ser vegetariano o vegano es una decisión que tiene que tomar uno mismo, por mucho que alguien te intente convencer, si uno no está seguro de eso lo vas a hacer dos semanas y luego lo dejarás. Yo solo puedo predicar con mi ejemplo.”</p>
                                <p>Promover modelos alternativos de consumo a partir de las redes sociales u otros medios para la diversidad de opciones. Concienciar y educar a la sociedad para normalizar otros modelos de dietas.</p>
                            </div>
                        </div>
                        <p>The decision to become a vegetarian was raised as a situation and 4 major phases were found in that process: restlessness, decision, adaptation and finally being a vegetarian. Two points of frustration were identified, in the first stage and in the last. We noted that the most critical moment was that of dissemination and awareness</p>
                        <img src={CustomerJourney} alt="Customer Journey Graph" className="grafico-imagen"/>
                        <p>Taking these 2 points of frustration We decided to make a dump of the insights of the problems that had come out in the interviews we had carried out, and we realized that the great problem was in raising awareness and normalizing the vegetarian / vegan movement. At that time, we decided to focus on this problem.</p>
                        <img src={VolcadoInsights} alt="Volcado de insights" className="grafico-imagen"/>
                    </div>
                </section>

                <section className="wireframes-container">
                    <div className="wireframes-wrapper wrapper">
                        <h2>WIREFRAMES, PROTOTYPING & TESTS</h2>
                        <p>We created some wireframes helping us to start with the guerrilla testing to validate the functionalities and detect some issues with the interactions. After these testings we iterated the wireframes and added some colors and text style.</p>
                        <img src={IteracionMobile} alt="Volcado de insights" className="grafico-imagen border-image"/>
                        <p>32 user tests were done. 2 types of tests: depth and guerrilla. In addition, we had to do several remotely. They took a total of 13 hours and 5 iterations. These have helped us a lot to identify the problems that the user had when they faced the different tasks that we were asking them throughout the test.</p>
                        
                        <div className="investigation-cards">
                            <img src={Card4}/>
                            <img src={RightArrow}/>
                            <img src={Card5}/>
                            <img src={RightArrow}/>
                            <img src={Card6}/>
                        </div>
                    </div>
                </section>
                
                <section className="architecture">
                    <div className="architecture-wrapper">
                        <h2>ARCHITECTURE</h2>
                        <p>We used a Branched/Parallel architecture for this web-app</p>
                        <p>Separating the menu by different epics:</p>
                        <ul>
                            <li>Animals</li>
                            <li>Products</li>
                            <li>Aditional information</li>
                        </ul>
                    </div>
                </section>

                <section className="style-guide">
                    <h2>STYLE GUIDE</h2>
                    <div className="colours-container">
                        <p>Colours:</p>
                        <img src={FlipColours}/>
                    </div>
                    
                    <div className="typo-container">
                        <p>Typography:</p>
                        <img src={FlipTypo}/>
                    </div>

                    <div className="buttons-container">
                        <p>Buttons:</p>
                        <img src={FlipButtons}/>
                    </div>
                </section>

                <section className="solution-container">
                    <div className="solution-wrapper">
                        <h2>SOLUTION</h2>
                        <ul>
                            <li>Testing the prototype a lot</li>
                            <li>Adding new functionallities iteratively incremental</li>
                            <li>Showing all the phases of the animal/product until consumtion</li>
                            <li>Creating new interactions to involve the user</li>
                            <li>Adding beneffits and helping the people to change their habits</li>
                        </ul>

                        <div className="solution-images-container">
                            <p>Choose the story that you want to see:</p>
                            <div className="ios-container">
                                <img className="iphone" src={SolutionGIF1}/>
                                <div className="mac-container">
                                    <img className="mac" src={MacbookAir} />
                                    <img className="mac-screen" src={MacScreen} />
                                </div>
                                
                            </div>


                            <p>Scroll down to see our challenges:</p>
                            <div className="ios-container">
                                <img className="iphone" src={SolutionGIF2}/>
                                <div className="mac-container">
                                    <img className="mac" src={MacbookAir} />
                                    <img className="mac-screen" src={MacScreen2} />
                                </div>
                            </div>

                            <div className="iphone-text-container">
                                <div className="lines-paragraph">
                                    <p>Start a Story</p>
                                    <p>Browse through the web on consequence of your own decisions and choices</p>
                                    <p>Or open the menu and select another story</p>
                                </div>
                                <div className="iphone-container">
                                    <img src={SolutionGIF3} />
                                </div>
                            </div>

                            <div className="iphone-text-container">
                                <div className="lines-paragraph">
                                    <p>Interact with the different screens</p>
                                    <p>Learn about the different fabrication process of products or animals</p>
                                    <p>Or open the menu and select another story</p>
                                </div>
                                <div className="iphone-container">
                                    <img class="solutionGIF4" src={SolutionGIF4} />
                                </div>
                            </div>
                        </div>

                        <div className="engagement-container">
                            <h2>ENGAGEMENT</h2>
                            <div className="engamenten-wrapper">
                            <div className="iphone-text-container">
                                <div className="one-paragraph">
                                    <p>In this screen we explain to the user the possibility of taking on some challenges and thus testing oneself.</p>
                                    <p>Using inbound marketing and gamification techniques, a Newsletter has been created. If the user signs up we offer a discount with our partners, in addition to notifying them in case new stories, new challenges or good practices are added.</p>
                                </div>
                                <div className="iphone-container">
                                    <img src={SolutionGIF5} />
                                </div>
                            </div>

                            <div className="iphone-text-container">
                                <div className="one-paragraph">
                                    <p>From there we come to the challenges section with its respective list, such as recycling your jeans, reducing meat consumption for a week, only buying organic eggs, or in this case being able to weave with plastic.</p>
                                    <p> In the end what we do is: With stories we make visible and with challenges we act.</p>
                                </div>
                                <div className="iphone-container">
                                    <img src={SolutionGIF6} />
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="business-model-container">
                            <div className="business-model-wrapper">
                                <h2>BUSINESS MODEL</h2>
                                <p>As a business model, we place advertising of the partners we have throughout the stories, both for animals and products. We did it in a way that perfectly adapted to the design of our web / app, without altering our aesthetics. Challenges are also sponsored.</p>

                                <div className="business-images-container">
                                    <div className="left-div">
                                        <img src={FlipBusiness1} />
                                        <img src={FlipBusiness2} />
                                        <img src={FlipBusiness3} />
                                    </div>
                                    <div className="right-div">
                                        <img src={GifPubli} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </section>

                <section className="objective-container conclusion-container">
                    <div className="objective-wrapper">
                        <h2>CONCLUSION</h2>
                        <p>Designing this web-app it was a challenge because it’s about to raising a new product from the bottom.With this project we could saw every phase to build a platform. The research, insights, defining the problem, ideation and definition, they were very important and each step generated uncertainties, but at least we could keep going and the result is the reflection of very hard work.</p>
                    </div>
                </section>

                <Contact/>
            </div>
        )
    }
}

export default Flip