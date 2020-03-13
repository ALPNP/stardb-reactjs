import React from 'react';
import spinnerSvg from './../../assets/Spinner.svg';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <img alt="spinner" src={spinnerSvg} />
        </div>
    )
}

export default Spinner;