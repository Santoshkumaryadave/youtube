import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import './playrcmvideos.css'

const PlayRcmVideos = ({ img, title, channel, verified, views, timetap }) => {
  return (
    <div className='rcm_video_row'>
      <img src={img} alt="" className="rcm_thamnail_img" />
      <div className="rcm_videocard_info">
        <h4>{title}</h4>
        <div className="rcm_videorow_text">
          <p>{channel}</p> {verified && <CheckCircleIcon className='rcm_verified_icons' />}
        </div>
        <div className="rcm_time_details">
          <p>{views} . {timetap}</p>
        </div>


      </div>
    </div>
  )
}

export default PlayRcmVideos