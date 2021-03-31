import React from 'react';

const Post = ({post}) => {
    return (
        <div className="card">
            <div className="card-body">
                <a href="#" className="btn btn-primary">HeadTitle № {post.title} </a>
            </div>
        </div>
    )
};

export default Post;