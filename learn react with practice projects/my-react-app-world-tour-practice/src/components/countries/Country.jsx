import { useState } from "react"

export default function Country({ country, handleVisitedCountry }) {
    // console.log(country)
    const { name, flags } = country

    const [visited, setVisited] = useState(false)
    const handleAddToVisited = (paramCountry) => {
        setVisited(!visited)
        handleVisitedCountry(paramCountry)
    }

    return (
        <div className={`box ${visited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <h3>{name.common} (<small><i>{name?.official}</i></small>)</h3>
            <p>Capital: {country?.capital[0]}</p>
            <p>Continents: {country?.continents[0]}</p>
            <p>Population: {country?.population}</p><hr />

            <div>
                <button onClick={() => handleAddToVisited(country)}>{visited ? '✅Visited' : 'Add to visited'}</button>
                <span>{visited && ' I have visited this country'}</span>
            </div>
        </div>
    )
}