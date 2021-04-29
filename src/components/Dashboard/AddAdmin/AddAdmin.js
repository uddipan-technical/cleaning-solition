import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddAdmin = () => {
   const history = useHistory();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = data => {
      fetch('https://polar-castle-67389.herokuapp.com/addAAdmin', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      history.push('/adminPanel');
   };

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <table>
                     <h3 className="mt-3 fw-bold">Manage Admin</h3>
                     <tr>
                        <td>
                           <label htmlFor="name">Name:</label>
                        </td>
                        <td>
                           <input
                              className="px-5"
                              type="text"
                              name="name"
                              {...register('name')}
                           />
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <label htmlFor="name">Email:</label>
                        </td>
                        <td>
                           <input
                              className="px-5"
                              type="email"
                              name="email"
                              {...register('email', { required: true })}
                           />
                           {errors.email && <span>This field is required</span>}
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <button
                              //   onClick={refreshPage}
                              className="btn btn-success mt-2"
                              type="submit"
                           >
                              Add to Admin
                           </button>
                        </td>
                     </tr>
                  </table>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddAdmin;
