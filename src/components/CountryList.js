import React from 'react';
import Country from './Country';

const CountryList = ({ countries,  onMarkVisited }) => {

    const mappedCountries =
        countries.map((country, index) => (
            <Country key={index} country={country} onMarkVisited={onMarkVisited} />
        ))

    return (

        <ul>
            
            {mappedCountries}

        </ul>

    );

};

export default CountryList;