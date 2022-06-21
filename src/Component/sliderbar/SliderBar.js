
import { ExpandMoreOutlined, FeedbackOutlined, HelpOutline, History, Home, LibraryAddCheckOutlined, Settings } from '@mui/icons-material'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import "./sliderbar.css"
import SliderRow from './sliderrow/SliderRow'



const SliderBar = () => {


  return (
    <div className='sliderbar '>
<div className="show_row">
     
      <SliderRow
        selected
        Icon={Home}
        title={"Home"}

      />
      <SliderRow
        Icon={ExploreOutlinedIcon}
        title={"Explore"}

      />

      <SliderRow
        Icon={SubscriptionsOutlinedIcon}
        title={"Subscriptions"}
      />

      <hr />

      <SliderRow
        Icon={LibraryAddCheckOutlined}
        title={"Library"}
      />
      <SliderRow
        Icon={History}
        title={"Histroy"}
      />

      <hr />
      <SliderRow
        Icon={Settings}
        title={"Settings"}
      />
      <SliderRow
        Icon={OutlinedFlagSharpIcon}
        title={"Report histroy"}
      />
      <SliderRow
        Icon={HelpOutline}
        title={"Help"}

      />
      <SliderRow
        Icon={FeedbackOutlined}
        title={"Send feedBack"}
      />
      <SliderRow
        Icon={ExpandMoreOutlined}
        title={"More"}
      />
      </div>
      <div className='shaidow'></div>
    </div>


  )
}

export default SliderBar