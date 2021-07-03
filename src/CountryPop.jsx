import React from 'react';
import countries from './data/countries'
import { WorldPopulation, worldPopulation } from './WorldPop'


countries.sort((a, b) => b.population - a.population).splice(10);


const CountryName = ({ country: { name } }) => {
    return (
        <div className="country-name">
            <strong>{name}</strong>
        </div>
    );
};


const CountryPopulation = ({ country: { population } }) => {
    return (
        <div className="country-population">
            <strong>{population}</strong>
        </div>
    );
};


const Top10Population = ({ countries }) => {
    const countriesList = countries.map((country) => (
        <div className="graph-container">
            <CountryName country={country} />
            <progress
                value={country.population}
                max={worldPopulation}
                className="graph-bar"
            ></progress>
            <CountryPopulation country={country} />
        </div>
    ));

    return (
        <div>
            <WorldPopulation />
            {countriesList}
        </div>
    );
};

export default Top10Population;