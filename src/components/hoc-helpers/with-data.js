import React, { Component } from 'react';
import Spinner from './../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {

        state = {
            data: [],
            loading: true,
            error: false
        };
    
        componentDidMount() {
            this.update();
        }

        update() {
            this.setState({
                loading: true,
                error: false
            });
            this.props.getData()
                .then((data) => { this.setState({ loading: false, error: false, data }) })
                .catch((err) => {
                    alert(err);
                    this.setState({
                        loading: false,
                        error: true,
                        data: []
                    })
                });
        }

        render() {
            const { data, loading, error } = this.state;

            if (loading) {
                return <Spinner />
            }

            if (error) {
                return <ErrorIndicator />
            }

            return <View {...this.props} data={data} />
        }
    };
}

export default withData;