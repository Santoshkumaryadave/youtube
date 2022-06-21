import React from 'react'
import ChannelRowPlay from './channelrowplay/ChannelRowPlay'
import CommentRow from './commentrow/CommentRow'
import './playvideo.css'
import PlayRcmVideos from './play_recommenedevideos/PlayRcmVideos'
import VideoPlay from './VideoPlay/VideoPlay'

const PlayVideo = () => {
  return (
    <div className="paly_videos">
      <div className="play_colume">
        <VideoPlay
          img="https://www.animatedvideo.com/blog/wp-content/uploads/2019/07/7-benefits-of-clickworthy-video-thumbnails-in-video-marketing.png"
          title={"UPSC Interview | dr.vijender chauhan sir | IAS IPS Interview"}
          views={"70.0M views"}
        />
        <hr />
        <ChannelRowPlay
          image="https://yt3.ggpht.com/S4Zya0yZ0OYjBG8XZkO_78cieMz9XYQFsTaMgR_dDoaQy1hy_py6yTtt0KK0JpUtOCg7U4Wj8g=s176-c-k-c0x00ffffff-no-rj"
          channel="RSMSA"
          verified
          subs="2.09M subscribers"
          noOfvideos="238 videos"
          discription="Here, you will find (FACT + COMEDY)
      scientific/educational videos on almost every topic that is cool and useful for you. "
        />
        <hr />
        <CommentRow />
      </div>

      <div className="recommended_colume">
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
        <PlayRcmVideos
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO2NlAQTBcwHlDThUTb7Ufav97D9ggLmd4w&usqp=CAU"
          title='Best game play at world , Funny play games'
          views="2.09M views"
          timetap="16 hours ago"
          channel="RSMSA"
          verified
        />
      </div>
    </div>
  )
}

export default PlayVideo