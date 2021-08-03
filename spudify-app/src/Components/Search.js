import Track from "./Track"
import SearchBar from "./SearchBar"
import { useEffect } from 'react'
import Artist from './Artist'



function Search({ setOnSearch, setOnDropDown, songs, makePlaylist, onDropDown, setSearchSongs}) {
    function topTracks(id){
         fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
                {method: 'GET',
                headers: {
                 'Content-type': 'application/json',
                  'Authorization': `Bearer BQBaUAyUftAc2Cu4OKXdpLWlnXLqAKLLrWH6V0F22-QpVSDSKcjy501bUZUtMq1DCQKj39hm_E1YRKxsyCLmRtqz967JnhcliOYeh5FPTVys1HzQNv1YClStBDsUmeRZWss9Yxkf_jNzSokdPWc`}})
            .then(r => r.json())
            .then(data => setSearchSongs(data.tracks))
        
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