import Track from "./Track"
import SearchBar from "./SearchBar"
import { useEffect } from 'react'
import Artist from './Artist'



function Search({ setOnSearch, setOnDropDown, songs, makePlaylist, onDropDown, setTopTracksData }) {

    function topTracks(id){
         fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
                {method: 'GET',
                headers: {
                 'Content-type': 'application/json',
                  'Authorization': `Bearer ${key}`}})
            .then(r => r.json())
            .then(data => setTopTracksData(data.tracks))
    }


    if (onDropDown === "Artist") {
           
            return(
                <>
                <SearchBar setOnSearch={setOnSearch} setOnDropDown={setOnDropDown}/>
                {songs.map((song)=>{
                    return <Artist key = {song.id}
                    song = {song} setOnDropDown ={setOnDropDown}
                    setOnSearch={setOnSearch}
                    topTracks={topTracks}/>
                })}
                </>
            )

        }
    

    else return (
        <>
            <SearchBar setOnSearch={setOnSearch} setOnDropDown={setOnDropDown}/>
            {songs.map((song) => <Track song={song} key={song.id} makePlaylist={makePlaylist} />)}
        </>
    )
}

export default Search