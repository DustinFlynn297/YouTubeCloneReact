import React from 'react';
import Results from '../Results/Results';

const ResultsTable = (props) => {
    
    

    return( props.videos.map(video =>
        <Results video={video} setVideo={props.setVideo} />
        ) );
};

export default ResultsTable;