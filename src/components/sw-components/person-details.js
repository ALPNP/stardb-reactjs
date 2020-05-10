import ItemDetails from '../item-details';
import { Field } from '../item-details/item-details';
import React from 'react';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, swapiService }) => {
    return (
        <ItemDetails
            imagePath={'characters'}
            getDataMethod={'getPerson'}
            service={swapiService}
            itemId={itemId}
        >
            <Field prop="gender" label="Gender" />
            <Field prop="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
};

export default withSwapiService(PersonDetails);