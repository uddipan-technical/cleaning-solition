import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Painter from '../Admins/Admins';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Whychoose from '../Whychoose/Whychoose';
import Admins from '../Admins/Admins';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <AboutUs></AboutUs>
         <Services></Services>
         <Whychoose></Whychoose>
         <Blogs></Blogs>
         <Admins></Admins>
         <Testimonial></Testimonial>
         <Contact></Contact>
         <Footer></Footer>
      </div>
   );
};

export default Home;
