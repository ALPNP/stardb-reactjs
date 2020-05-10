import ItemDetails from '../item-details';
import { Field } from '../item-details/item-details';
import React from 'react';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Field prop="population" label="Population" />
            <Field prop="diameter" label="Diameter" />
        </ItemDetails>
    )
};

const mapMethodsToProps = () => {
    return {
        getDataMethod: 'getPlanet',
        imagePath: 'planets'
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);