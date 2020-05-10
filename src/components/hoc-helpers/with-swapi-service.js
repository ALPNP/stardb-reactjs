import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (View) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        return <View {...props } {...mapMethodsToProps(swapiService)} service={swapiService} />
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;