import React, { Component, Fragment } from 'react';
import './item-details.css';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Field = ({ item, label, prop }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[prop]}</span>
        </li>
    )
};

export {
    Field
};

class ItemDetails extends Component {

    state = {
        item: {},
        loading: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getDataMethod } = this.props;
        if (itemId) {
            this.setState({ loading: true }, () => {
                this.props.service[getDataMethod](itemId)
                    .then((item) => { this.setState({ item, loading: false }) });
            });
        }
    }

    render() {
        if (!this.state.item.id && !this.props.itemId) {
            return <span>Select a person from list</span>
        }

        const { item, loading } = this.state;
        const { id, name } = item;
        const { imagePath } = this.props;

        return (
            <div className="card mb-3">
                {(loading) ? <Spinner /> : (
                    <Fragment>
                        <div className="card-header">{name}</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img className="img-fluid rounded" alt="planet" src={`https://starwars-visualguide.com/assets/img/${imagePath}/${id}.jpg`} />
                                </div>
                                <div className="col-8">
                                    <ul className="list-group list-group-flush">
                                        {
                                            React.Children.map(this.props.children, (child) => {
                                                return React.cloneElement(child, { item });
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="container">
                                    <ErrorButton />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </div>
        )
    }
};

export default ItemDetails;