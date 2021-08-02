import { useState } from 'react'

function SearchBar({ setOnSearch, setOnDropDown }) {
    const [ searchValue, setOnSearchValue ] = useState('')
    const [ dropDown, setDropDown ] = useState('Title')

    function handleSubmit(e) {
        e.preventDefault();
        setOnSearch(searchValue)
        setOnDropDown(dropDown)
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search by Category</label>
                <select name="search" onChange={(e) => setDropDown(e.target.value)}>
                    <option value="Title">Title</option>
                    <option value ="Artist">Artist</option>
                </select>
                <input type="text" placeholder="Search Here" onChange={(e) => setOnSearchValue(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </>

    )
}

export default SearchBar