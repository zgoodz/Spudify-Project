import Track from "./Track"
import SearchBar from "./SearchBar"
import Artist from './Artist'



function Search({  songs, makePlaylist, setSubmittedData, setTopTracks}) {
    console.log(songs)
    
   

    function topTracks(id){
         fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
                {method: 'GET',
                headers: {
                 'Content-type': 'application/json',
                  'Authorization': `Bearer BQAhQ7srlwH2epieOUNxaRgZE2UWPyB7jajmTEZUIk2bhMLbmsOqdvuq-CjcE7y2Q0j6u0Oes7Cd4c-6-xuHjtRt2ugaoPKYmLj2X4ONk2F1SUy73uW0imdmDimpAYN5wHc0QXLKUaL5CifrD2o`}})
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
        <SearchBar setSubmittedData={setSubmittedData} />
        {lmao()}
        </>
    )
}

export default Search