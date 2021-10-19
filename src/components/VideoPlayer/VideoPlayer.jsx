import React from 'react';
import Comment from '../Comment/Comment';
import CommentList from '../../CommentList/CommentList';

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
    console.log(props.videoComments)


    return ( 
        <div>
            <iframe title={videoTitle} src={videoLink} />
            <h3>{videoTitle}</h3>
            <h3>{videoDescription}</h3>
            <Comment postComment={props.postComment} video={props.video}/>
            <CommentList videoComments={props.videoComments}  updateDislike={props.updateDislike} updateLike={props.updateLike}/>
        </div>
    )
}
 
export default VideoPlayer;

