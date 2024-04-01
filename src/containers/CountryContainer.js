import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    };

    useEffect(() => {
        loadCountries();
    }, []);

    const markVisited = (country, isVisited) => {
        if (isVisited) {
            setVisitedCountries([...visitedCountries, country]);
        } else {
            setVisitedCountries(visitedCountries.filter((visitedCountry) => visitedCountry !== country));
        }
    };

    return (
        <div className="country-container">
            <div className="country-list">
            <h2>Country List</h2>
            <CountryList countries={countries} onMarkVisited={markVisited} />
            </div>
            <div className="visited-countries">
            <h2>Visited Countries</h2>
            <ul>
                {visitedCountries.map((visitedCountry, index) => (
                    <li key={index}>{visitedCountry.name.common}</li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default CountryContainer;