import './warning.css';
import React from 'react';
import img from '../images/warning-icon-hi.png';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Warning() {
    const notify = ()=> {
        toast('HACKING ATTEMPTED')
      }
    
    return (
        <div class='image'>
            <img className='img' src={img} alt=""  />
            <h1>WARNING!!</h1>
            <p>The device you are using has been detected <br></br>
            Location : 83 Carleton St Hamden CT 06517</p>

            <button onClick={notify}>WARNING</button> 
        
            <div className = 'map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.5130454369341!2d-72.91456733208376!3d41.344134334031736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7da1d8e23bd4b%3A0x992795689eda0b9a!2s83%20Carleton%20St%2C%20Hamden%2C%20CT%2006517!5e0!3m2!1sen!2sus!4v1632359294389!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
           
    )
}

export default Warning

