import React from 'react'
import './videorow.css'
import { Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const VideoRow = ({ img, title, views, timetap, channelImg, channel, verified, discription }) => {
    return (
        <div>
            
            <div className='video_row'>
                <img src={img} alt="" className="thamnail_img" />
                <div className="videocard_info">
                    <div className="videorow_text">
                        <h4>{title}</h4>
                        <p>{views} . {timetap}</p>
                        <div className="channel_details">
                            <Avatar className='videorowcard_avtar'
                                alt={channel} src={channelImg} />
                            <p>{channel}</p> {verified && <CheckCircleIcon className='verified_icons' />}
                        </div>
                        <p>{discription}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default VideoRow