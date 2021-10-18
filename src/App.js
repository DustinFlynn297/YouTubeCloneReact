import axios from 'axios';
import './App.css';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
const KEY = 'AIzaSyB80yPVV-_qG__S5Ei-FfcSk61yBZ12cwI' 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      video: []
     }
  }

  

  componentDidMount(){
    this.getVideos();
  }

  getVideos = async () => {
    try {
      let response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=As1bpICMhzs&key=AIzaSyAOyG4Z4cTTK9TQEELOis9CYRdWmDSjq-0')
      this.setState({
        video: response.data
      })
    }
    catch (ex) {
      console.log('Error in get Videos API call', ex)
    }
  }

  render() { 
    return ( <div class="app">
      
        <VideoPlayer video={this.state.video}/>        
      
      
      
    </div> );
  }
}
 

export default App;
