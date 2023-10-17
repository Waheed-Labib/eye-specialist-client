import React from 'react';
import './Blogs.css';

import Blog from './Blog/Blog';
import { blogsData } from '../../data/blogsData';

const Blogs = () => {

    const blogs = blogsData;

    return (
        <div className='section'>
            <h1 className='section-heading'>Blogs</h1>

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;