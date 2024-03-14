import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country
    // console.log(country)

    const [visited, setVisited] = useState(false)

    function handleVisited() {
        setVisited(!visited)
    }

    return (
        <div className={`box ${visited && 'green'}`}>
            <h3>Name:{name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p>code:{cca3}</p>

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Add to visited'}</button>
            {visited && ' I have visited this country 😊'} <br /><br />

            <button onClick={() => handleVisitedCountry(country)}>Mark as visited</button>
        </div>
    );
};

export default Country;