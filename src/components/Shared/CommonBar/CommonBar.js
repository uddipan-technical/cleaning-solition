import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import './CommonBar.css';

const CommonBar = () => {
   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 ">
               <h5 className="my-4 text-center">d</h5>
               <img
                  className="img-fluid "
                  src={
                     ''
                  }
                  alt=""
               />
            </div>
         </div>
      </section>
   );
};

export default CommonBar;
