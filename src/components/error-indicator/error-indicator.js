import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-container">
            <span className="text-warning text-center">Error</span>
            <span className="text-warning text-center">Shomething has gone wrong</span>
            <span className="text-warning text-center">(but we already sent droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;