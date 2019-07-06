import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  Run: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  Slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  Aww: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  Eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { src: VIDEOS.fast };
    this.chooseVideo=this.chooseVideo.bind(this);
   
  }
  

  
  chooseVideo(newVideo){
    this.setState({
      src　:　VIDEOS[newVideo]
    });
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}　/>
        <Video src={this.state.src}　/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);