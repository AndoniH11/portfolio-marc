import React from 'react';
import { Link } from 'react-router-dom';

class ProjectCard extends React.Component {
    render() {
        const { id, title, personal, description, img, blueCloud, redCloud, slug } = this.props.card

        if (slug != 'just-in-time') {
            return (
                <Link to={`${slug}`}>
                    <div className={`project-card ${id}`}>
                        <div className="text-container">
                            <h2>{title}</h2>
                            <h3>{personal}</h3>
                            <p className="description">
                                {description}
                            </p>
                            <button className="card-button"><a>+ info</a></button>
                        </div>
                        <div className="image-container">
                            <img className="proyecto-img" src={img} alt="phone-image" />
                            <img className="blue-cloud" src={blueCloud} alt="blue-cloud" />
                            <img className="red-cloud" src={redCloud} alt="blue-cloud" />
                            <p>IN PROGRESS</p>
                        </div>
                    </div>
                </Link>

            )
        } else {
            return (
                    <div className={`project-card ${id}`}>
                        <div className="text-container">
                            <h2>{title}</h2>
                            <h3>{personal}</h3>
                            <p className="description">
                                {description}
                            </p>
                            <button className="card-button"><a>+ info</a></button>
                        </div>
                        <div className="image-container">
                            <img className="proyecto-img" src={img} alt="phone-image" />
                            <img className="blue-cloud" src={blueCloud} alt="blue-cloud" />
                            <img className="red-cloud" src={redCloud} alt="blue-cloud" />
                            <p>IN PROGRESS</p>
                        </div>
                    </div>
            )
        }
    }
}

export default ProjectCard;