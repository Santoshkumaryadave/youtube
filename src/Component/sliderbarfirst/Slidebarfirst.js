import React from 'react'
import "./slidebarfirst.css"
import SliderRowfirst from './sliderrowfirst/SliderRowfirst';
import { Home, LibraryAddCheckOutlined } from '@mui/icons-material'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';


const Slidebarfirst = () => {
  return (
    <div className='sliderbarfirst'>

      <SliderRowfirst
        selected
        Icon={Home}
        title={"Home"}

      />
      <SliderRowfirst
        Icon={ExploreOutlinedIcon}
        title={"Explore"}

      />

      <SliderRowfirst
        Icon={SubscriptionsOutlinedIcon}
        title={"Subscriptions"}
      />



      <SliderRowfirst
        Icon={LibraryAddCheckOutlined}
        title={"Library"}
      />



    </div>
  )
}

export default Slidebarfirst