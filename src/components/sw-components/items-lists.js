import ItemList from '../item-list';
import { withData, withSwapiService, compose, withChildFunction } from '../hoc-helpers';
import React from 'react';

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>

const PersonList = compose(
    withSwapiService((ss) => ({ getData: ss.getAllPeople })),
    withData,
    withChildFunction(renderName)
)(ItemList);


const PlanetList = compose(
    withSwapiService((ss) => ({ getData: ss.getAllPlanets })),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService((ss) => ({ getData: ss.getAllStarships })),
    withData,
    withChildFunction(renderModelAndName)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}