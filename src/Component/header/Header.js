import React ,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./header.css"
import { Link } from 'react-router-dom';



const Header = () => {
  const [searchVideos, setSearchVideos] = useState("");
  const onChange = (e)=>{
  setSearchVideos(e.target.value);
  
  }
 
  return (
    <div className='header'>
      <div className="left">
        <MenuIcon className='manu_icons' />
        <Link to="/">
        <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="img" />
        </Link>
      </div>

      <div className="middile">
        <input 
        name='search'
        placeholder='Search' 
        type="text" 
        onChange={onChange}
        value={searchVideos}
        />
       <Link className='search_icon' to={`/search/${searchVideos}`}> <SearchIcon  /></Link>
      </div>

      <div className="right">
        <NotificationsIcon className='icons' />
        <KeyboardVoiceIcon className='icons' />
        <AppsIcon className='icons' />
        <AccountCircleIcon  className='icons' />
      </div>
    </div>
  )
}

export default Header