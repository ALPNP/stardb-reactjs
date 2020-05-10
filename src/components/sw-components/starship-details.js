import ItemDetails from '../item-details';
import { Field } from '../item-details/item-details';
import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    return (
                        <ItemDetails
                            imagePath={'starships'}
                            getDataMethod={'getStarship'}
                            service={swapiService}
                            itemId={itemId}
                        >
                            <Field prop="model" label="Model" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

export { StarshipDetails };