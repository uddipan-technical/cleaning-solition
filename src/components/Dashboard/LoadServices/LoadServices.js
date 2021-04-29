import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const LoadServices = ({ service }) => {
   const deleteAdmin = id => {
      fetch('https://polar-castle-67389.herokuapp.com/deleteService', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ id }),
      });
      window.location.reload();
   };

   return (
      <>
         <tr>
            <td>{service.title}</td>
            <td>{service.summary}</td>
            <td>{service.details}</td>
            <td>
               <button className="btn bg-warning">
                  <FontAwesomeIcon icon={faEdit} />
               </button>
               <button
                  onClick={() => deleteAdmin(service._id)}
                  className="btn bg-danger"
               >
                  <FontAwesomeIcon icon={faTrash} />
               </button>
            </td>
         </tr>
      </>
   );
};

export default LoadServices;
