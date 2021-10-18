import React from 'react';

const VideoPlayer = (props) => {
    if (!props.video) {
        return <div>
           
           <p>
           No Video Selected yet
           </p>
        </div>;
      }

    const videoLink = `https://www.youtube.com/embed/${props.video.id.videoId}`
    const videoTitle = `${props.video.snippet.title}`
    const videoDescription = `${props.video.snippet.description}`

    return ( 
        <div>
            <iframe title={videoTitle} src={videoLink} />
            <h3>{videoTitle}</h3>
            <h3>{videoDescription}</h3>
        </div>
    )
}
 
export default VideoPlayer;

