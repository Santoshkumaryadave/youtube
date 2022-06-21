import React from 'react'
import './commentinbox.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { Avatar } from '@mui/material';


const CommentInbox = ({ user, img, comment, time }) => {
   return (
      <div className="comment_inbox">
         <Avatar className='comment_icon'
            alt='profile'
            src={img}
         />
         <div className="comment_details">
            <div className="text">
               <h4>{user}</h4>
               <p> {time}</p>
            </div>
            <div className="comment_text">
               {comment}
            </div>
            <div className="responce_icons">
               <ThumbUpOutlinedIcon />
               <ThumbDownOffAltOutlinedIcon />
               <span>REPLY</span>
            </div>

         </div>
      </div>
   )
}

export default CommentInbox