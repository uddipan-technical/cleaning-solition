import React from 'react';
import admin2 from '../../images/admin2.jpg';
import mainadmin from '../../images/mainadmin.jpg';
import admin3 from '../../images/admin3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Admin = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4 text-center">
               <div className="admin">
               <img className="mb-3" src={admin2} alt="" height="300" width="300"/>
                <h4>Admin: Shukla</h4>
                <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
               </div>
           </div>
           <div className="col-md-4 text-center">
                <div className="admin">
                <img className="mb-3" src={mainadmin} alt="" height="300" width="300"/>
                <h4>Main Admin: Rumba Molhuttra</h4>
                <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
                </div>
           </div>
           <div className="col-md-4 text-center">
                <div className="admin">
                <img className="mb-3" src={admin3} alt="" height="300" width="300"/>
                <h4>Admin: Sahara Cambrina</h4>
                <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
                </div>
           </div>
        </div>
    </div>

    );
};

export default Admin;