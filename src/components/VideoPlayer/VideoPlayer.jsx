import React from 'react';

const VideoPlayer = (props) => {
    return ( 
        <iframe src="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id={propsvideoId}&key=AIzaSyAOyG4Z4cTTK9TQEELOis9CYRdWmDSjq-0" title="YouTube video player" allowfullscreen></iframe>
     );
}
 
export default VideoPlayer;

{propsvideoId}