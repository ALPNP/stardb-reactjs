import React, { Component } from 'react';
import './item-list.css';
import Spinner from './../spinner';

class ItemList extends Component {

    state = {
        itemsList: null
    };

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((list) => { this.setState({ itemsList: list }) })
            .catch((err) => alert(err));
    }

    renderItems() {
        return this.state.itemsList.map((item) => {
            const id = item.id;
            console.log(this.props.children);
            const label = this.props.children(item);
            return (
                <li className="list-group-item item-elem"
                    key={id}
                    onClick={() => this.props.onItemSelected(item.id)}>
                    {label}
                </li>
            )
        });
    }

    render() {
        const {itemsList} = this.state;

        return (
            <div className="card mb-3">
                <div className="card-body">
                    {(!itemsList) ? <Spinner /> : (
                        <ul className="list-group list-group-flush">
                            {this.renderItems()}
                        </ul>
                    )}
                </div>
            </div>
        )
    }
};

export default ItemList;