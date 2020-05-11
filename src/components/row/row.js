import React from 'react';
import './row.css';
import PropTypes from 'prop-types';

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

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row;