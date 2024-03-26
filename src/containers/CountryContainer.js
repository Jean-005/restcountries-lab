import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    };

    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <div>
            <h2>Country List</h2>
            <CountryList countries={countries} />
        </div>
    );
};

export default CountryContainer;