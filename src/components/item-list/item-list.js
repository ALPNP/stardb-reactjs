import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';

const ItemList = (props) => {
    const { data, onItemSelected, children } = props;

    const items = data.map(item => {
        const id = item.id;
        const label = children(item);

        return (
            <li className="list-group-item item-elem"
                key={id}
                onClick={() => onItemSelected(item.id)}>
                {label}
            </li>
        )
    });

    return (
        <div className="card mb-3">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {items}
                </ul>
            </div>
        </div>
    )
};

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList;