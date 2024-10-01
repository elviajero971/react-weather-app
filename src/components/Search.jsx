import React, { useState } from 'react'
import {AsyncPaginate} from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions} from "../api.js";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            label: `${city.name}, ${city.countryCode}`,
                            value: `${city.latitude}, ${city.longitude}`
                        }
                    })
                }
            })
            .catch((error) => console.error(error))
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }



    return (

        <nav className="w-full p-3 flex justify-center items-center">
            <AsyncPaginate
                placeholder="Search for a city"
                debounceTimeout={600}
                value={search}
                defaultValue={"Paris, FR"}
                onChange={handleOnChange}
                loadOptions={loadOptions}
                />

        </nav>
    )
}

export default Search
