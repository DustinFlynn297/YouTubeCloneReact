import React from 'react';

const Results = (props) => {
    return (
                <ul>
                    
                    <div onClick={ () => props.setVideo(props.video)}>
                        <li><img src={props.video.snippet.thumbnails.medium.url} /></li>
                    </div>
                </ul>
    );
}

export default Results;