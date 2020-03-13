import React, { Component } from 'react';

class ErrorButton extends Component {

    state = {
        hasError: false
    }

    render() {
        if (this.state.hasError) {
            this.foo.bar = 'err';
        }

        return (
            <button type="button" className="btn btn-danger" onClick={() => this.setState({hasError: true})}>Throw error</button>
        )
    }
}

export default ErrorButton;