import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Avatar } from '@mui/material'
import React from 'react'
import "./channelrow.css"

const ChannelRow = ({ image, channel, verified, noOfvideos, discription, subs }) => {
    return (
        <div className='channelrow'>
            <Avatar className='avatar_icon' alt='img' src={image} />
            <div className="ditails">
                <div className="channel_name">
                    <h4>{channel}</h4> {verified && <CheckCircleIcon className='verified_icons'/>}
                </div>
                <div className="channel_details">
                <p>{subs} . {noOfvideos}</p>
                <p>{discription}</p>
                </div>
               
            </div>
            <button className='btn'>SUBSCRIBE</button>
        </div>
    )
}

export default ChannelRow