import axios from 'axios';
import './App.css';
import React, { Component } from 'react';

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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uhD0wFiDJfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
