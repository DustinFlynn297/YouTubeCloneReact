import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import ResultsTable from './components/ResultsTable/ResultsTable';
import Results from './components/Results/Results';
import SearchBar from './components/SearchBar/SearchBar';


function App(props) {
  const [searchResults, setVideoResults] = useState([]);
  const [searchInput, enterSearch] = useState();


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
      <SearchBar handleSearchSubmit={enterSearch} startSearch={fetchSearchresults}/>
      <ResultsTable mapSearchResults={mapSearchResults}/>
    </div>
  );
}
export default App;