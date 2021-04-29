import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddReview = () => {
   const [images, setImages] = useState(null);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = e => {
      const data = { ...e, image: images };

      fetch('https://polar-castle-67389.herokuapp.com/addReviews', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ data }),
      });
      window.location.reload();
   };

   const imageUpload = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.set('key', '2ec56aece175fb9d216740177df0a0c1');
      formData.append('image', e.target.files[0]);
      axios
         .post('https://api.imgbb.com/1/upload', formData)
         .then(res => {
            console.log(res.data.data.display_url);
            setImages(res.data.data.display_url);
         })
         .catch(error => {
            console.log(error);
         });
   };

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar />
            </div>

            <div className="col-md-9 mt-2">
               <h5>GET FREE QUOTE </h5>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="form-label">Author:</label>
                  {errors.author && <span>This field is required</span>}
                  <input
                     {...register('author', { required: true })}
                     id="name"
                     className="form-control"
                  />
                  <label className="form-label">Position:</label>
                  {errors.position && <span>This field is required</span>}
                  <input
                     {...register('position', { required: true })}
                     id="name"
                     className="form-control"
                  />
                  <label className="form-label">Description:</label>
                  <textarea
                     {...register('description', { required: true })}
                     className="form-control"
                     rows="4"
                     id="comments"
                  ></textarea>{' '}
                  {errors.review && <span>This field is required</span>}
                  <br />
                  <input type="file" onChange={imageUpload} className="mb-1" />
                  <br />
                  <input type="submit" />
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddReview;
