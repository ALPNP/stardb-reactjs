import ItemDetails from '../item-details';
import { Field } from '../item-details/item-details';
import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    return (
                        <ItemDetails
                            imagePath={'planets'}
                            getDataMethod={'getPlanet'}
                            service={swapiService}
                            itemId={itemId}
                        >
                            <Field prop="population" label="Population" />
                            <Field prop="diameter" label="Diameter" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

export { PlanetDetails };