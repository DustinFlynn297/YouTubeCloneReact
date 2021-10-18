import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import ResultsTable from './components/ResultsTable/ResultsTable';
import Results from './components/Results/Results';
import SearchBar from './components/SearchBar/SearchBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Comment from './components/Comment/Comment'



function App(props) {
  const [searchResults, setVideoResults] = useState([]);
  const [video, setVideo] = useState();


  async function fetchSearchresults(searchInput){
    let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyAOyG4Z4cTTK9TQEELOis9CYRdWmDSjq-0&maxResults=10&part=snippet`);
    console.log(response.data)
    setVideoResults(response.data.items);
  }

  async function listComments(videoId){
    await axios.get('http://127.0.0.1:8000/YouTube_API/' + videoId + '/')
  }

  async function postComment(videoId){
    try {
      await axios.post('http://127.0.0.1:8000/YouTube_API/');
      listComments(videoId);
    }
    catch(ex) {
      console.log('Error in posting comment', ex)
    }
  }

  return (
    <div>
      <SearchBar handleSearchSubmit={fetchSearchresults} />
      <VideoPlayer video={video}/>
      <Comment postComment={postComment}/>
      <ResultsTable videos={searchResults} setVideo={setVideo}/>
          </div>
  );
}
export default App;