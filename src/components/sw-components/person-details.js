import ItemDetails from '../item-details';
import { Field } from '../item-details/item-details';
import React from 'react';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Field prop="gender" label="Gender" />
            <Field prop="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
};

const mapMethodsToProps = () => {
    return {
        getDataMethod: 'getPerson',
        imagePath: 'characters'
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);