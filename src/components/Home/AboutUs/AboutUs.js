import React from 'react';
import './AboutUs.css';
import featured from '../../images/feuture.jpg';


const AboutUs = () => {
    return (
        <section className="features-service">
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 align-self-center">
                    <h1>About Us</h1>
                    <p className="text-secondary my-5">
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    </p>
                    <span>
                    <li className="aboutUs-title">Easy Online Scheduling</li>
                    <li className="aboutUs-title">Eco - Friendly Products</li>
                    <li className="aboutUs-title">Easy Online Services to Provide</li>
                    </span>
                    <button className="btn btn-brand">About Us</button>
                </div>
                <div className="col-md-7 mb-4 m-md-0">
                    <img className="img-fluid" src={featured} alt=""/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutUs;