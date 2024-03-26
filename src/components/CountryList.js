import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {

    const mappedCountries =
        countries.map((country, index) => (
            <Country key={index} country={country} />
        ))

    return (

        <ul>
            
            {mappedCountries}

        </ul>

    );

};

export default CountryList;