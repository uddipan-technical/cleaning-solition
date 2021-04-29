import React from 'react';

const LoadMyOrder = ({ orders }) => {
   return (
      <>
         <tr>
            <td>{orders.email}</td>
            <td>{orders.title}</td>
            <td>{orders.paymentMethod.id}</td>
            <td>
               <button className={orders.status} disabled="disabled">
                  {orders.status}
               </button>
            </td>
         </tr>
      </>
   );
};

export default LoadMyOrder;
