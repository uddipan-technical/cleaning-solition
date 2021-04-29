import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
import maya from '../../images/maya.jpg';
import kaya from '../../images/kaya.jpg';
import chaya from '../../images/chaya.jpg';


const blogData = [
    {
        title : 'Four time clean your Bed room in a day',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Maya',
        authorImg : maya,
        date : '23 April 2019'
    },
    {
        title : 'Two time clean your Bath room in a day',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Kaya',
        authorImg : kaya,
        date : '23 April 2019'
    },
    {
        title : 'Two time clean your Ketchen in a day',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Chaya',
        authorImg : chaya,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
        <div className="container">
            <div className="section-header text-center">
                 <h5 className="text-primary text-uppercase">our blog</h5>
                 <h1>From Our Blog News</h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Blogs;