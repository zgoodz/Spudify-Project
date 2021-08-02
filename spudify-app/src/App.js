import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  // const [searchData, setSearchData] = useState([])
  const [ onSearch, setOnSearch ] = useState('')
  // const [ onClick, setOnClick ] = useState('')
 
  useEffect(() => {
    fetch((`https://api.spotify.com/v1/search?q=${onSearch}&type=track%2Cartist&market=US&limit=10&offset=5`), {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer BQDpcoZZeDtdN4-wolagffKZAhVuFObUQUgg8dPMT11a0ubPk3h2zXCy6uiHZA5evydSW1LqL_bEpmajpq0sTXCyU2BQFFjBirCs8Rj8AEUeGCPLfyjxe3oTjXPnxGKA6jhVnWc5q_bFZA"
      }}) .then(resp=> resp.json()) .then(data => console.log(data))
  }, [onSearch])

  function handleSubmit(e) {
    e.preventDefault();
    setOnSearch(e.target.value)
  }

console.log(onSearch)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search by Category</label>
        <select name="search" >
          <option value="Title">Title</option>
          <option value ="Artist">Artist</option>
        </select>
          <input type="text" />
      </form>
    </>
  );
}

export default App;
