import axios from 'axios';
import './App.css';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      video: []
     }
  }



  // componentDidMount(){
  //   this.getVideos();
  // }

  // getVideos = async () => {
  //   try {
  //     let response = await axios.get('')
  //   }
  // }

  render() { 
    return ( <div class="app">
      <section id="selectedVideo">
        <VideoPlayer />
      </section>
      <main>
        <article>
          <img src="" alt="" class="thumb"></img>
        </article>
      </main>
      
    </div> );
  }
}
 

export default App;
