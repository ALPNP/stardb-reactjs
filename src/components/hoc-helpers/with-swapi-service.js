import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (View, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        return <View {...props } {...mapMethodsToProps()} service={swapiService} />
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;