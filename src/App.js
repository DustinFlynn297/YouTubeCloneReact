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

  componentDidMount(){
    this.getVideos();
  }

  getVideos = async () => {
    try {
      let response = await axios.get('')
    }
  }

  render() { 
    return ( <div className="App">
      
    </div> );
  }
}
 

export default App;
