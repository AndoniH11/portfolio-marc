import React from 'react';

class Styles extends React.Component{
    render(){
        const {coloursImg, typoImg, buttonsImg} = this.props.styles;
        return(
            <div class="style-guide">
                <h2>STYLE GUIDE</h2>
                <div className="colours-container">
                    <p>Colours:</p>
                    <img src={coloursImg}/>
                </div>
                
                <div className="typo-container">
                    <p>Typography:</p>
                    <img src={typoImg}/>
                </div>

                <div className="buttons-container">
                    <p>Buttons:</p>
                    <img src={buttonsImg}/>
                </div>

            </div>
        )
    }
}

export default Styles