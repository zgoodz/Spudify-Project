import Track from "./Track"
import SearchBar from "./SearchBar"
import { useEffect } from 'react'
import { key } from '../secrets/api'


function Search({ setOnSearch, setOnDropDown, songs, makePlaylist, onDropDown }) {

    if (onDropDown === "Artist") {
            fetch(`https://api.spotify.com/v1/artists/`,
                {method: 'GET',
                headers: {
                 'Content-type': 'application/json',
                  'Authorization': `Bearer ${key}`}})
            .then(r => r.json())
            .then(data => console.log(data))
        }
    

    return (
        <>
            <SearchBar setOnSearch={setOnSearch} setOnDropDown={setOnDropDown}/>
            {songs.map((song) => <Track song={song} key={song.id} makePlaylist={makePlaylist} />)}
        </>
    )
}

export default Search