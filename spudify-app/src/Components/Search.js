import SearchBar from "./SearchBar"
import React from "react"

function Results({ setOnSearch, setOnDropDown }) {
    return (
        <>
        <SearchBar setOnSearch={setOnSearch} setOnDropDown={setOnDropDown}/>
        <h1>Search Results</h1>
        
        </>
    )
}

export default Results