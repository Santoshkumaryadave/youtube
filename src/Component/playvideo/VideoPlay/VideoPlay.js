import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import React from 'react'
import './videoplay.css'
import ShareOutlined from '@mui/icons-material/ShareOutlined';


const VideoPlay = ({ img, title, views, }) => {

    return (
        <div className='videoplay'>
            <img src={img} alt="" className="play_thamnailimg" />
            <div className="playvideo_info">
                <div className="playvideo_text">
                    <h3>{title}</h3>
                </div>
                <div className='video_info' >
                    <p>{views}</p>
                    <div className='info_dtl'> <ThumbUpOutlinedIcon /> <h4>222</h4></div>
                    <div className='info_dtl'> <ThumbDownOffAltOutlinedIcon /><h4>DISLIKE</h4></div>
                    <div className='info_dtl'> <ShareOutlined /><h4>SHARE</h4></div>
                    <div className='info_dtl'> <FavoriteBorderOutlinedIcon /><h4>THANKS</h4></div>
                </div>
            </div>


        </div>

    )
}

export default VideoPlay