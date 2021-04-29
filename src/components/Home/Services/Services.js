import React, { useEffect, useState } from 'react';
import './Service.css';
import '../Blogs/Blogs.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://polar-castle-67389.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="services-container bg-color mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row pt-5 blogs">
                {
                    services.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;