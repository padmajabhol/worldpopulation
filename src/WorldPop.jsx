import React from 'react';
import countries from './data/countries';

const worldPopulation = countries
    .map((country) => country.population)
    .reduce((curr, sum) => curr + sum);


const WorldPopulation = () => {
    return (
        <div className="world-container">
            <big>WORLD</big>
            <progress
                value={worldPopulation}
                max={worldPopulation}
                className="graph-bar"
            ></progress>
            <div className="world-population">{worldPopulation}</div>
        </div>
    );
};

export { WorldPopulation, worldPopulation };