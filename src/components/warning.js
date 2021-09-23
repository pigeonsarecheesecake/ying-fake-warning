import './warning.css';
import React from 'react';
import img from '../images/warning-icon-hi.png';


function Warning() {
    return (
        <div class='image'>
            <img className='img' src={img} alt=""  />
            <h1>Warning!!</h1>
            <p>The device you are using has been detected <br></br>
            Location : 83 Carleton St Hamden CT 06517</p>

            <div className = 'map'>
                <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.4114862746146!2d-72.90085877485357!3d41.39965071801181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7da9f8aa36c1f%3A0x268debc522ae9148!2s83%20Charlton%20Hill%20Rd%2C%20Hamden%2C%20CT%2006518!5e0!3m2!1sen!2sus!4v1632355047329!5m2!1sen!2sus" width="600" height="450" style={{border:0}}  allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
           
    )
}

export default Warning

