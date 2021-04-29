import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Emergency cleaning service" , link: "/emergency"},
        {name: "Bath Room" , link: "/"},
        {name: "Cleaning of personal Equipment" , link: "/"},
        {name: "Bathroom Cleaning" , link: "/"},
    ]
    const ourAddress = [
        {
         name: "New York.US - 101010 Hudson" ,
         link: "//google.com/map"},
        {name: "Yards" , email: "info.homeclean@gmail.com"},
       
    ]
    const booking = [
        {name: "Call Us : 500-666-9990"},
        {name: "Contact us now for a quote about consultain"}
    ]
    const services = [
        {name: "Emergency cleaning service" , link: "/"},
        {name: "Kitchen" , link: "/"},
        {name: "Cleaned your Kitchen" , link: "/"},
    ]
    return (
        <footer className="footer-area clear-both">
        <h2 className="text-center">Join Our Newsletter Now to Get 20% OFF</h2>
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Book Appointment" menuItems={booking}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;