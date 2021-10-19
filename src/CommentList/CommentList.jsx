import React from 'react';

const CommentList = (props) => {

    console.log(props.videoComments)

    return ( 
        <div>
                <ul>
                    
                    {props.videoComments.map((comment) =>
                    <div>
                        
                        <li> {comment.comment_body} Likes:{comment.like} Dislikes:{comment.dislike} </li>
                        <li> <button onClick={ () => props.updateLike(comment)}>Like</button>  </li>
                        <li> <button onClick={ () => props.updateDislike(comment)}>Dislike</button> </li>
                    </div>
                    )}
                
                </ul>
        </div>
    );
}

export default CommentList;