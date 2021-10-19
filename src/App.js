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
  const [comments, setComments] = useState([]);
  const [videoComments, setVideoComments] = useState([]);


  async function fetchSearchresults(searchInput){
    let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyAOyG4Z4cTTK9TQEELOis9CYRdWmDSjq-0&maxResults=10&part=snippet`);
    setVideoResults(response.data.items);
  }

  async function listComments(video){
    setVideo(video)
    let response = await axios.get('http://127.0.0.1:8000/YouTube_API/' + video.id.videoId + '/');
    await setVideoComments(response.data);
  }
  
  async function postComment(comment, video){
    try {
      comment.videoid = video.id.videoId;
      let response = await axios.post('http://127.0.0.1:8000/YouTube_API/', comment);
      await setComments(response.data);
      listComments(video);
    }
    catch(ex) {
      console.log('Error in posting comment', ex)
    }
  }

  function updateLike (comment){
      comment.like++
  

  }

  function updateDislike (comment){
    comment.dislike++
    
  }



  return (
    <div>
      <SearchBar handleSearchSubmit={fetchSearchresults} />
      <VideoPlayer video={video} postComment={postComment} listComments={listComments} videoComments={videoComments} updateDislike={updateDislike} updateLike={updateLike}/>
      <ResultsTable videos={searchResults} setVideo={listComments}/>
      
          </div>
  );
}
export default App;