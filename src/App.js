import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';


// sample videos
// https://archive.org/download/WildlifeSampleVideo/Wildlife.mp4
// blob:https://www.youtube.com/8704954a-195f-4fae-80ef-3f77a7998c52
// <source src={this.state.url} type="video/mp4" />

class App extends Component {
  state = {
    input: '',
    url: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_20mb.mp4',
  };

  handleSourceInput = (e) => {
    console.log(e.target);
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ url: this.state.input });
  };

  render() {
    return (
      <div>
        <Video src={this.state.url} />

        <br />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSourceInput} />
          <input type="submit" value="go" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default App;
