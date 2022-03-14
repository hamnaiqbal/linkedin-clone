import React from 'react';
import Avatar from '@mui/material/Avatar';
import "./post.css";
import InputOptions from '../Feed/InputOptions';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';


import SendIcon from '@mui/icons-material/Send';

function Posts({ name, description, message, photoURL }) {
   
    return (
        <div className='post'>
            <div className="POST_HEADER">
                <Avatar>H</Avatar>
                <div className="post_info">
                    <h2> {name}</h2>
                    <p>{description}</p>

                </div>

            </div>

            <div className="post_body">
                <p>{message}</p>

            </div>

            <div className="post_button">
                <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
                <InputOptions Icon={CommentIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareIcon} title="Share" color="gray" />
                <InputOptions Icon={SendIcon} title="Send" color="gray" />

            </div>
        </div>
    )
}

export default Posts
