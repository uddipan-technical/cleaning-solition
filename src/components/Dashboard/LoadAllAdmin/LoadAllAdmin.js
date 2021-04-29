import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const LoadAllAdmin = ({ admin }) => {
   const [email, setEmail] = useState();

   const history = useHistory();
   const deleteAdmin = anAdmin => {
      const { email } = anAdmin;
      setEmail(email);
      window.location.reload();
   };

   useEffect(() => {
      fetch('https://polar-castle-67389.herokuapp.com/deleteAdmin', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email }),
      });
   }, [email]);
   history.push('/adminPanel');

   return (
      <>
         <tr>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
               <button className="btn bg-warning">
                  <FontAwesomeIcon icon={faEdit} />
               </button>
               <button
                  onClick={() => deleteAdmin(admin)}
                  className="btn bg-danger"
               >
                  <FontAwesomeIcon icon={faTrash} />
               </button>
            </td>
         </tr>
      </>
   );
};

export default LoadAllAdmin;
