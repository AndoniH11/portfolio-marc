import React from 'react';

import Logo from '../assets/img/Logo.png';
import linkedin from '../assets/img/linkedin.png';
import behance from '../assets/img/behance.png';
import gmail from '../assets/img/gmail.png';

const Contact = () => {
    return(
        <div className="contact-container">
            <div className="topline"></div>
            <img className="contact-logo" src={Logo} alt="logo"/>
            <p className="connect">Let´s connect!</p>
            <p>Feel free to reach out for collaborations or just a friendly hello :)</p>
            <a href="mailto:marcmartinsaumell@gmail.com">marcmartinsaumell@gmail.com</a>

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
    )
}

export default Contact