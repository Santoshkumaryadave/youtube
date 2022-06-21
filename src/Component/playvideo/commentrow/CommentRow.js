import React from 'react'
import ShortTextIcon from '@mui/icons-material/ShortText';
import './commentrow.css'
import { Avatar } from '@mui/material';

import CommentInbox from './comment_inbox/CommentInbox';

const CommentRow = () => {
    return (
        <div className='commentrow'>
            <div className="sortby">
                <h4>10 comments </h4>
                <div className="icon">
                    <ShortTextIcon />
                    <h2>SHORT BY</h2>
                </div>
            </div>
            <div className="comment_input">
                <Avatar className='profile_icon'
                    alt='profile'
                    src='https://yt3.ggpht.com/QZ4bo98jh2KOLkMfH7MT92fTI6FB…TQNUzMseOOaXGJsb3XiyPjH=s88-c-k-c0x00ffffff-no-rj'
                />
                <div className="input_text">
                    <input type="text" placeholder='Add a comment' />
                    <div className="comment_btn">
                        <button className='cancle'>CANCLE</button>
                        <button className='comment'>COMMENT</button>
                    </div>
                </div>
            </div>
            <CommentInbox
                img='https://yt3.ggpht.com/ytc/AKedOLREIJ8YCTbZ0F3aNconrLCYNy4cmWIkNx7dUKAC=s88-c-k-c0x00ffffff-no-rj'
                user="User Name"
                time="5 month ago"
                comment="Great...."
            />
            <CommentInbox
                img='https://yt3.ggpht.com/ytc/AKedOLREIJ8YCTbZ0F3aNconrLCYNy4cmWIkNx7dUKAC=s88-c-k-c0x00ffffff-no-rj'
                user="User Name"
                time="5 month ago"
                comment="Great...."
            />
            <CommentInbox
                img='https://yt3.ggpht.com/ytc/AKedOLREIJ8YCTbZ0F3aNconrLCYNy4cmWIkNx7dUKAC=s88-c-k-c0x00ffffff-no-rj'
                user="User Name"
                time="5 month ago"
                comment="Great...."
            />
            <CommentInbox
                img='https://yt3.ggpht.com/ytc/AKedOLREIJ8YCTbZ0F3aNconrLCYNy4cmWIkNx7dUKAC=s88-c-k-c0x00ffffff-no-rj'
                user="User Name"
                time="5 month ago"
                comment="Great...."
            />
        </div>
    )
}

export default CommentRow