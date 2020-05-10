import ItemDetails from '../item-details';
import { Field } from '../item-details/item-details';
import React from 'react';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Field prop="model" label="Model" />
        </ItemDetails>
    )
};

const mapMethodsToProps = () => {
    return {
        getDataMethod: 'getStarship',
        imagePath: 'starships'
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);