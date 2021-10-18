import React from 'react';

const VideoPlayer = (props) => {
    return ( 
        <iframe src={props.video} title="YouTube video player" allowfullscreen></iframe>
     );
}
 
export default VideoPlayer;