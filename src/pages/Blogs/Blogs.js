import React from 'react';
import './Blogs.css';

import Blog from './Blog/Blog';
import { blogsData } from '../../data/blogsData';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {

    useTitle('Blogs')

    const blogs = blogsData;

    return (
        <div className='section'>

            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>


            <Link style={{ marginTop: '10%' }} className='show-all-services-link' to='/services'>
                <p>Show All Services</p>
                <FaArrowRight></FaArrowRight>
            </Link>
        </div>
    );
};

export default Blogs;