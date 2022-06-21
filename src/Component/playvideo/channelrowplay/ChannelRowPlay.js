
import { Avatar } from '@mui/material'
import React from 'react'
import "./channelrowplay.css"

const ChannelRow = ({ image, channel, discription, subs }) => {
    return (
        <div className='channelrowplay'>
            <div className="top_row">

                <div className="channelplayditails">
                    <Avatar className='avatar_iconplay' alt='img' src={image} />
                    <div className="channelplay_text">
                        <h4>{channel}</h4>
                        <p>{subs} </p>
                    </div>
                </div>
                <button className='btnplay'>SUBSCRIBE</button>
            </div>
            <div className="bottom_row">
                <p>{discription}</p>
            </div>
        </div>
    )
}

export default ChannelRow