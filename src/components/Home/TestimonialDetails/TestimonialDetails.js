import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className="col-md-4 ">
           <div className="test-card card shadow-sm">
            <div className="d-flex text-center p-3">
                    <div className="">
                        <img style={{width: "70%"}} src={testimonial.image} alt=""/>
                    </div>
                    <div className="text-center lh-1">
                        <h5 className="font-color">{testimonial.author}</h5>
                        <p>{testimonial.position}</p>
                    </div>
                </div>
            <div className="text-left p-2">
                <p className="text-secondary">{testimonial.description}</p>
            </div>
           </div>
        </div>
    );
};

export default TestimonialDetails;