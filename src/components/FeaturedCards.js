import React from 'react';
import Flip from '../assets/img/flip.png';
import Catalunya from '../assets/img/Catalunya.png';
import SpaceTravel from '../assets/img/SpaceTravel.png';
import Ramen from '../assets/img/Ramen.png';
import RedCloud from '../assets/img/redCloud.png';
import BlueCloud from '../assets/img/blueCloud.png';

import ProjectCard from './ProjectCard';

class FeaturedCards extends React.Component{

    state = {
        cards: [{
            id:"card1",
            title: "FLIP",
            personal: "UX/UI - Master project",
            description: "Flip is an interactive tool to raise awareness about the environment. Informs and makes visible the invisible.",
            img: Flip,
            redCloud: RedCloud,
            blueCloud: BlueCloud,
            slug: 'flip'
        },
        {
            id: "card2",
            title: "CATALUNYA.COM",
            personal: "UX/UI - Personal project",
            description: "Catalunya.com is a website created to attract turism to Catalonia. Offering a lot of activities, events and routes adapting this range of options to all type of people.",
            img: Catalunya,
            redCloud: RedCloud,
            blueCloud: BlueCloud,
            slug: 'catalunya'
        },
        {
            id:"card3",
            title: "SPACE TRAVEL",
            personal: "UX/UI - Master project",
            description: "Space Travel is an innovate company based in California which purpouse is offer an unforgettable experience travelling to Mars at the best price.",
            img: SpaceTravel,
            redCloud: RedCloud,
            blueCloud: BlueCloud,
            slug: 'space-travel'
        },
        {
            id:"card4",
            title: "JUST IN TIME",
            personal: "UX/UI - Personal project",
            description: "Just in Time is the platform that gives the push to the restaurant sector in terms of digitization.",
            img: Ramen,
            redCloud: RedCloud,
            blueCloud: BlueCloud,
            slug: 'just-in-time'
        }
    ]
    }

    render(){
        return(
            <div className="featured-cards" id="featured-cards">
                {this.state.cards.map(item => {
                    return <ProjectCard key={item.id} card={item}/>
                })}
            </div>
        )
    }
}

export default FeaturedCards;
