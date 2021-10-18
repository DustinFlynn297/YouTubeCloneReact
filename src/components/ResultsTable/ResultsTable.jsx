import React from 'react';

const ResultsTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            {props.mapSearchResults()}
        </table>
    );
}

export default ResultsTable;