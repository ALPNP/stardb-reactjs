import React, { Component } from 'react';
import './item-list.css';

class ItemList extends Component {

    renderItems() {
        return this.props.data.map((item) => {
            const id = item.id;
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
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {this.renderItems()}
                    </ul>
                </div>
            </div>
        )
    }
};

export default ItemList;