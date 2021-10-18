import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import ResultsTable from './components/ResultsTable/ResultsTable';
import Results from './components/Results/Results';


function App(props) {
  const [searchResults, setVideoResults] = useState([]);
  const [searchInput, enterSearch] = useState('castles');


  async function fetchSearchresults(){
    let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyAOyG4Z4cTTK9TQEELOis9CYRdWmDSjq-0&maxResults=10&part=snippet`);
    console.log(response.data)
    setVideoResults(response.data.items);
  }

  function mapSearchResults(){
    console.log(searchResults)
    return searchResults.map(result =>
      <Results
        result={result}
      />
      )
  }

  useEffect(() => {
    let mounted = true;
    if(mounted){
      fetchSearchresults();
    }
    return () => mounted = false;
  }, [])

  return (
    <div>
      <ResultsTable mapSearchResults={mapSearchResults}/>
    </div>
  );
}
export default App;