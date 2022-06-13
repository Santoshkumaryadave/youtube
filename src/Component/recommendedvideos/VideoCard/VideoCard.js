import { Avatar } from '@mui/material'
import React from 'react'
import "./videocard.css"

const VideoCard = ({img,title,views,timetap,channelImg,channel}) => {
    
  return (
    <div className='videocard'>
        <img src={img} alt="" className="thamnailimg" />
        <div className="videocard_info">
            <Avatar className='card_avtar' 
            alt={channel} src={channelImg}/>
           <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timetap}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard