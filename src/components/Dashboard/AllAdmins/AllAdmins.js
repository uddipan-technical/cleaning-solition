import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import LoadAllAdmin from '../LoadAllAdmin/LoadAllAdmin';

const AllAdmins = () => {
   const [allAdmin, setAllAdmin] = useState([]);

   useEffect(() => {
      fetch('https://polar-castle-67389.herokuapp.com/allAdmins')
         .then(res => res.json())
         .then(data => setAllAdmin(data));
   }, []);

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 ">
               <div id="deleteTable">
                  <h3 className="mt-3 fw-bold">Manage Admin Panel</h3>
                  <Table bordered>
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {allAdmin.map(admin => (
                           <LoadAllAdmin admin={admin}></LoadAllAdmin>
                        ))}
                     </tbody>
                  </Table>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AllAdmins;
