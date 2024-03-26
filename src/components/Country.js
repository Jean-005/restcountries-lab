import React, { useState } from 'react';

const Country = ({ country }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <h3 style={{ color: isChecked ? 'yellow' : 'white' }}>{country.name.common} {country.flag}</h3>
            <p style={{ color: isChecked ? 'yellow' : 'white' }}>Capital: {country.capital}</p>
            <div>
                <input type="checkbox" id={country.name.common} name={country.name.common} onChange={handleCheckboxChange} />
                <label htmlFor={country.name.common}>Visited</label>
            </div>
        </>
    );
};

export default Country;