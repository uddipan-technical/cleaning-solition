import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const history = useHistory();
   const handleOrder = e => {
      history.push('/placeOrder', { params: e });
   };

    return (
        <div className="col-md-4 p-2">
           <div className="card shadow-sm all-card">
           <img className="image-sizing" src={service.img} alt=""/>
            <h5 className="my-3 font-color">{service.name}</h5>
            <h4>Price: ${service.price}</h4>
            <h5>Duration: {service.duration}</h5>
            <button onClick={() => handleOrder(service)} className="btn btn-brand">Add to Cart</button>
           </div>
        </div>
    );
};

export default ServiceDetails;