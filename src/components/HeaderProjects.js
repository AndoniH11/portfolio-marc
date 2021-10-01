import React from 'react';

class HeaderProjects extends React.Component{
    render(){

        const {img, clase, title} = this.props.header
        return(
            <div className={clase}>
                <h1>{title}</h1>

                <div class="header-image-container">
                    <img src={img} alt="imagen-cabecera"/>
                </div>
            </div>
        )
    }
}

export default HeaderProjects