import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';
import LoadMyOrder from './LoadMyOrder';

const MyOrder = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [myOrder, setMyOrder] = useState([]);
   const checkMail = loggedInUser && loggedInUser?.email;

   useEffect(() => {
      fetch('https://polar-castle-67389.herokuapp.com/myOrders', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ checkMail }),
      })
         .then(res => res.json())
         .then(data => {
            setMyOrder(data);
         });
   }, []);

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>

            <div className="col-md-9">
               <h3 className="mt-3 fw-bold">Order's History</h3>
               <Table bordered>
                  <thead>
                     <tr>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Payment ID</th>
                        <th>Order Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {myOrder?.map(orders => (
                        <LoadMyOrder orders={orders}></LoadMyOrder>
                     ))}
                  </tbody>
               </Table>
               {myOrder?.length > 0 ? (
                  <div className="d-flex justify-content-center">
                     <div className="spinner-border d-none" role="status"></div>
                  </div>
               ) : (
                  <div className="d-flex justify-content-center mt-5 pt-5">
                     <div className="spinner-border" role="status"></div>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

export default MyOrder;
