import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import ResultsTable from './components/ResultsTable/ResultsTable';
import Results from './components/Results/Results';
import SearchBar from './components/SearchBar/SearchBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';



function App(props) {
  const [searchResults, setVideoResults] = useState([]);
  const [video, setVideo] = useState();


  async function fetchSearchresults(searchInput){
    let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyAOyG4Z4cTTK9TQEELOis9CYRdWmDSjq-0&maxResults=10&part=snippet`);
    console.log(response.data)
    setVideoResults(response.data.items);
  }

  return (
    <div>
      <SearchBar handleSearchSubmit={fetchSearchresults} />
      <ResultsTable videos={searchResults} setVideo={setVideo}/>
      <VideoPlayer video={video}/>
      
    </div>
  );
}
export default App;