import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faAddressCard,
   faCalendarCheck,
   faColumns,
   faPenNib,
   faPlus,
   faSignOutAlt,
   faUser,
   faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [admin, setAdmin] = useState([]);

   const checkMail = loggedInUser && loggedInUser?.email;
   useEffect(() => {
      fetch('https://polar-castle-67389.herokuapp.com/checkMail', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ checkMail }),
      })
         .then(res => res.json())
         .then(data => setAdmin(data));
   }, []);

   const adminMember = admin[0]?.email === checkMail;
   return (
      <div className="sidebar d-flex justify-content-between col-md-9"
         style={{ height: '100vh' }}
      >
         {adminMember ? (
            <ul className="list-unstyled">
               <li>
                  <Link
                     to="/common"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faColumns} />
                     Dashboard
                  </Link>
               </li>

               <li>
                  <Link to="/order" className="text-white text-decoration-none">
                     <FontAwesomeIcon icon={faAddressCard} /> Client Orders
                  </Link>
               </li>
               <li>
                  <Link
                     to="/services"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faCalendarCheck} /> Services
                  </Link>
               </li>

               <li>
                  <Link
                     to="/addService"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faPlus} /> Add Service
                  </Link>
               </li>

               <li>
                  <Link
                     to="/adminPanel"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faUsers} /> Admin Panel
                  </Link>
               </li>
               <li>
                  <Link
                     to="/addAnAdmin"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faUser} /> Add An Admin
                  </Link>
               </li>

            </ul>
         ) : (
            <ul className="list-unstyled">
               <li>
                  <Link
                     to="/common"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faColumns} />
                     Dashboard
                  </Link>
               </li>
               <li>
                  <Link
                     to="/myOrder"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faAddressCard} /> My Order
                  </Link>
               </li>
               <li>
                  <Link
                     to="/addReview"
                     className="text-white text-decoration-none"
                  >
                     <FontAwesomeIcon icon={faPenNib} /> Review
                  </Link>
               </li>
            </ul>
         )}
         <div>
            <Link to="/" className="text-white text-decoration-none">
               <span>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
               </span>
            </Link>
         </div>
      </div>
   );
};

export default Sidebar;
