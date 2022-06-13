import "./App.css";
import Header from "./Component/header/Header";
import RecommendedVideos from "./Component/recommendedvideos/RecommendedVideos";
import SliderBar from "./Component/sliderbar/SliderBar";
import { Routes, Route } from "react-router-dom";
import SearchVideos from "./Component/recommendedvideos/searchvideos/SearchVideos";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="app_page">
              <SliderBar />
              <RecommendedVideos />
            </div>
          }
        />

        <Route
          path="/search/:searchTurm"
          element={
            <div className="app_page">
              <SliderBar />
              <SearchVideos />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
