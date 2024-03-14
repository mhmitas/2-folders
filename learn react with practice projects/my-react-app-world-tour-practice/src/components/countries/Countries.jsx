import { useEffect } from "react"
import { useState } from "react"
import './country.css'
import Country from "./Country"

export default function Countries() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(res => res.json())
            .then((data) => {
                // console.log(data)
                setCountries(data)
            })
    }, [])

    const [visitedCountry, setvisitedCountry] = useState([])

    const handleVisitedCountry = (paramCountry) => {
        const newVisitedCountryList = [...visitedCountry, paramCountry]
        setvisitedCountry(newVisitedCountryList)
    }
    console.log(visitedCountry)

    return (
        <div>
            <h3>Enjoy Your Tour</h3>
            <h4 className="border">Total Countries: {countries.length}</h4><hr />

            <p>Visited countries: {visitedCountry.length}</p>
            <div className="selected-country-container border">
                {
                    visitedCountry.map(
                        (country, index)=> <div key={index}><img src={country.flags.png} alt="" /></div>
                    )
                }
            </div><hr />

            <h3>All Countries</h3>
            <div className="country-container">
                {
                    countries.map(
                        country => <Country country={country} handleVisitedCountry={handleVisitedCountry} key={country.cca3} />
                    )
                }

            </div>
        </div>
    )
}