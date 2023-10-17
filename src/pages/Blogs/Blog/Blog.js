import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {

    const paragraphs = blog.article.split('/n/n')

    return (
        <div className='blog'>
            <div>
                <h3>{blog.title}</h3>
            </div>

            <div>
                {
                    paragraphs.map(paragraph => <p key={paragraphs.indexOf(paragraph)}>{paragraph}</p>)
                }

            </div>
        </div>
    );
};

export default Blog;