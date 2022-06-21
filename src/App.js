import { useState } from 'react';
import './App.css';
import Header from './Component/header/Header';
import RecommendedVideos from './Component/recommendedvideos/RecommendedVideos';
import {
  Routes,
  Route,
} from "react-router-dom";
import SearchVideos from './Component/recommendedvideos/searchvideos/SearchVideos';
import PlayVideo from './Component/playvideo/PlayVideo';
import Signin from './Component/signup/signin/Signin';
import Signup from './Component/signup/signin/Signup';
import SliderBar from "./Component/sliderbar/SliderBar"
import Slidebarfirst from './Component/sliderbarfirst/Slidebarfirst'

function App() {
  const [slide, setSlide] = useState(false);
 
 
  const onClickaHndal = () => {
    if (slide === false) {
      setSlide(true)
    }
    else if (slide === true) {
      setSlide(false)
    }
  }



  return (

    <div className='app'>
      <Header onClickaHndal={onClickaHndal} />
      <Routes>

        <Route path="/" element={<div className="app_page">
          {slide ? <SliderBar /> : <Slidebarfirst />}
          <RecommendedVideos />
        </div>} />

        <Route path="/search/:searchTurm" element={<div className="app_page">

          {slide ? <SliderBar /> :
            <Slidebarfirst />}
          <SearchVideos />
        </div>} />

        <Route path="/playvideo" element={<div className="app_page">

          {slide ? <SliderBar /> :
            <Slidebarfirst />}
          <PlayVideo />
        </div>} />


        <Route path="/signin" element={
          <Signin />
        } />

        <Route path="/signup" element={
          <Signup />
        } />

      </Routes>



    </div>
  );
}

export default App;
