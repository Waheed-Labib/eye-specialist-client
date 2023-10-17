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
                    <div style={{ border: '1px solid rgb(113,199,113)', borderRadius: '10px', padding: '5%' }}>
                        {
                            paragraphs.map(paragraph => <p key={paragraphs.indexOf(paragraph)}>{paragraph}</p>)
                        }
                        <p onClick={() => setShowFull(false)} className='green-link link-without-underline'>Show Less</p>
                    </div>
                    :
                    <div style={{ border: '1px solid rgb(113,199,113)', borderRadius: '10px', padding: '5%' }}>
                        <p>{blog.article.substr(0, 200)}...</p>
                        <p onClick={() => setShowFull(true)} className='green-link link-without-underline'>Show Full</p>
                    </div>
            }

        </div>
    );
};

export default Blog;