import React, { useState } from 'react';
import axios from 'axios';
import Graph from '../Graph/Graph';

const CountryPicker = ({ covidSummary, setTotalConfirmed, setTotalRecovered, setTotalDeaths }) => {
    const [coronaCountArr, setCoronaCountArr] = useState([]);
    const [days] = useState(7);
    const [label, setLabel] = useState([]);


    const handleCountries = (e) => {
        e.preventDefault();

        const d = new Date();
        const to = formatDate(d);
        const from = formatDate(d.setDate(d.getDate() - days));

        // console.log(from, to);
        getCoronaReportbyDateRange(e.target.value, from, to);
    };

    const getCoronaReportbyDateRange = (countrySlug, from, to) => {
        axios.get(`https://api.covid19api.com/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
            .then(res => {
                // console.log(res);
                const yAxisCoronaCount = res.data.map(d => d.Cases);
                const xAxisLabel = res.data.map(d => d.Date);
                // console.log(yAxisCoronaCount);
                const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug);

                setCoronaCountArr(yAxisCoronaCount);
                setTotalConfirmed(covidDetails.TotalConfirmed);
                setTotalRecovered(covidDetails.TotaRecovered);
                setTotalDeaths(covidDetails.TotalDeaths);
                setLabel(xAxisLabel);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const _date = d.getDate();
        return `${year}-${month}-${_date}`;
    };

    return (
        <>
            <div className="container my-5">
                <select className="form-select" onChange={handleCountries}>
                    <option value="">Select Country</option>
                    {
                        covidSummary.Countries && covidSummary.Countries.map((country, ind) => {
                            return (
                                <>
                                    <option key={ind} value={country.Slug}>{country.Country}</option>
                                </>
                            )
                        })
                    }
                </select>
            </div>

            <div className="container text-center m-5">
                <Graph yAxis={coronaCountArr} label={label} />
            </div>
        </>
    )
}

export default CountryPicker;