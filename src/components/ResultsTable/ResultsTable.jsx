import React from 'react';

const ResultsTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Video ID</th>
                </tr>
            </thead>
            {props.mapSearchResults()}
        </table>
    );
}

export default ResultsTable;