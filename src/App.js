import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import Components
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';

const App = () => {
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState({});
  const [covidSummary, setCovidSummary] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      await axios.get(`https://api.covid19api.com/summary`)
        .then(res => {
          setLoading(false);
          if (res.status === 200) {
            setTotalConfirmed(res.data.Global.TotalConfirmed);
            setTotalRecovered(res.data.Global.TotalRecovered);
            setTotalDeaths(res.data.Global.TotalDeaths);
            setLastUpdate(res.data.Global.Date);
            setCovidSummary(res.data);
          }
          // console.log(res);
        })
        .catch(error => console.log(error))
    };
    getData();
  }, []);

  if (loading) {
    return (
      <p>Waiting for Api Request......</p>
    )
  }

  return (
    <>
      <h1 className='text-center my-5'>Covid 19 World Wide Latest Report</h1>
      <Cards
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        lastUpdate={lastUpdate}
      />
      <CountryPicker
        covidSummary={covidSummary}
        setTotalConfirmed={setTotalConfirmed}
        setTotalRecovered={setTotalRecovered}
        setTotalDeaths={setTotalDeaths}
      />
    </>
  )
}

export default App;