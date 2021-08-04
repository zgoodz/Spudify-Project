import Track from "./Track"
import SearchBar from "./SearchBar"
import { useEffect } from 'react'
import Artist from './Artist'



function Search({  setOnSearch, setOnDropDown, songs, makePlaylist, setSubmittedData, setTopTracks}) {
    
   

    function topTracks(id){
         fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
                {method: 'GET',
                headers: {
                 'Content-type': 'application/json',
                  'Authorization': `Bearer X`}})
            .then(r => r.json())
            .then(data => setTopTracks(data.tracks))
    
        
    }
    function lmao(){
    if (songs.length > 1 ){
        return songs[1].type  === "artist" ? songs.map((song)=>{{
            return( <Artist key={song.id} song={song} topTracks={topTracks}/>)
        }}) : songs.map((song)=> {
            return (<Track song = {song} key ={song.id} makePlaylist={makePlaylist}/>)
        })
    } else {
        return songs.map((song)=> {
            return (<Track song = {song} key ={song.id} makePlaylist={makePlaylist}/>)
        })
    }
    }
    
    return (
        <>
        <SearchBar setOnSearch={setOnSearch} setOnDropDown={setOnDropDown} setSubmittedData={setSubmittedData} />
        {lmao()}
        </>
    )
}

export default Search