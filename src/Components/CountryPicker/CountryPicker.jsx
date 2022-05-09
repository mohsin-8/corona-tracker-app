import React from 'react';

const CountryPicker = ({ covidSummary }) => {
    const handleCountries = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="container my-5">
                <select className="form-select" onChange={handleCountries}>
                    {
                        covidSummary.Countries && covidSummary.Countries.map(country => {
                            return (
                                <>
                                    <option value="select">Select your country</option>
                                    <option key={country.Slug} value={country.Slug}>{country.Country}</option>
                                </>
                            )
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default CountryPicker;