import React from 'react';

const Results = (props) => {
    return (
                <tr>
                    <td>{props.result.snippet.title}</td>
                    <td><iframe> src="{props.result.snippet.thumbnails.medium.url}" </iframe></td>
                </tr>
    );
}

export default Results;