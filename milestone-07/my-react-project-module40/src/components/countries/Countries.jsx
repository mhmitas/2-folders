import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = country => {
        console.log('add to visited country')
        console.log(country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    console.log(visitedCountries)

    return (
        <div>
            <h3 className="myclass">Countries: {countries.length}</h3>

            <div className="myclass">
                {/* <p>Visited countries {}</p><hr /> */}
                <p>visited countries: {visitedCountries.length} </p>
                <div>
                    {
                        visitedCountries.map(country => <div key={country.cca3} className="box2"><p>✅{country.name.common}</p><img src={country?.flags.png} alt="" /></div>)
                    }
                </div>
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;