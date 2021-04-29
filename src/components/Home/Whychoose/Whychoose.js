import React from 'react';
import './Whychoose.css';
import choose from '../../images/choose.jpg';


const Whychoose = () => {
    return (
        <section className="choose-us mb-5">
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-md-7 d-none d-md-block">
                    <img src={choose} alt=""/>
                </div>
                <div className="col-md-5 text-white py-5">
                    <h5 className="text-primary text-uppercase ">Make an Order</h5>
                    <h1 className="my-4">Make your order <br/> Today</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                    <button className="btn btn-brand">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Whychoose;