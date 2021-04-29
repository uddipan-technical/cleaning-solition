import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {
   const [image, setImage] = useState(null);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
 
   const onSubmit = data => {
      const service = {...data, image:image}
      fetch('https://polar-castle-67389.herokuapp.com/addServices', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(service),
      });
      // window.location.reload();
   };

   const imageUpload = e => {
      console.log(e)
      const formData = new FormData();
      formData.set('key', '2ec56aece175fb9d216740177df0a0c1');
      formData.append('image', e.target.files[0]);
      axios
         .post('https://api.imgbb.com/1/upload', formData)
         .then(res => {
            console.log(res.data.data.display_url)
            setImage(res.data.data.display_url);
         })
         .catch(error => {
            console.log(error);
         });
   };

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>

            <div className="col-md-9 ">
               <div className="mx-2 p-2">
                  <h4>Add Services </h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <label className="form-label">Title:</label>
                     {errors.title && <span>This field is required</span>}
                     <input
                        {...register('name', { required: true })}
                        className="form-control"
                     />
                    <label className="form-label">Price</label>
                     <input
                        {...register('price', { required: true })}
                        className="form-control"
                        rows="4"
                     ></input>{' '}
                     {errors.review && <span>This field is required</span>}
                     <label className="form-label">Duration:</label>
                     <input
                        {...register('duration', { required: true })}
                        className="form-control"
                        rows="4"
                     ></input>{' '}
                     {errors.review && <span>This field is required</span>}
                     <label className="form-label">Image:</label>
                     {errors.image && <span>This field is required</span>}

                     <input className="form-control" type='file' onChange={imageUpload}/>
                     <br />
                     <button type='submit'>Button</button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AddService;
