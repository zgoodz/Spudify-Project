import { useState } from 'react'

function SearchBar({ setSearchInput }) {
    const [ searchValue, setOnSearchValue ] = useState('')
    const [ dropDown, setDropDown ] = useState('Title')

    function handleSubmit(e) {
        e.preventDefault();
        if (searchValue.length > 0) {
            setSearchInput({
                onSearch: searchValue,
                onDropDown: dropDown
            })
        }
    }

    return (
        <div className ='searchBar'>
            <form  onSubmit={handleSubmit} >
                <label htmlFor="search">Search by Category: </label>
                <select className = 'dropDownMenu' style={{ padding: '5px 10px 5px 10px' }}name="search" onChange={(e) => setDropDown(e.target.value)}>
                    <option value="Title">Title</option>
                    <option value ="Artist">Artist</option>
                </select>
                <input style={{marginLeft: '5px'}} className='searchTab' type="text" placeholder="Search Here" onChange={(e) => setOnSearchValue(e.target.value)}/>
                <button style={{marginLeft: '5px', padding: '5px 10px 5px 10px', fontSize: '16px'}} className="btn submit-btn" type="submit">Search</button>
            </form>
        </div>

    )
}

export default SearchBar