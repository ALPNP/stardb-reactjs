import React from 'react';
import './row.css';

const Row = ({leftElem, rightElem}) => {
    return (
        <div className="row">
            <div className="col">
                {leftElem}
            </div>
            <div className="col">
                {rightElem}
            </div>
        </div>
    )
};

export default Row;