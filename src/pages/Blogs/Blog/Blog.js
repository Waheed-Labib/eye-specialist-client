import React, { useState } from 'react';
import './Blog.css'

const Blog = ({ blog }) => {

    const [showFull, setShowFull] = useState(false);

    const paragraphs = blog.article.split('/n/n')

    return (
        <div className='blog'>
            <div>
                <h3>{blog.title}</h3>
            </div>

            {
                showFull ?
                    <div onClick={() => setShowFull(false)}
                        className='blog-article'>
                        {
                            paragraphs.map(paragraph => <p key={paragraphs.indexOf(paragraph)}>{paragraph}</p>)
                        }
                        <p className='blog-link'>Show Less</p>
                    </div>
                    :
                    <div
                        onClick={() => setShowFull(true)}

                        className='blog-article'>
                        <p>{blog.article.substr(0, 200)}...</p>
                        <p className='blog-link'>Show Full</p>
                    </div>
            }

        </div>
    );
};

export default Blog;