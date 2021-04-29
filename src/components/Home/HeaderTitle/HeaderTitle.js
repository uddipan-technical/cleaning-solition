import React from 'react';
import './HeaderTitle.css';

const HeaderTitle = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#3A4256'}}>Get out & Have Fun We Clean For You</h1>
            <p className="text-secondary">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="btn btn-brand">GET Orders</button>
        </div>
        <div className="col-md-6">
            
        </div>
    </main>
    );
};

export default HeaderTitle;