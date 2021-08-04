import Track from "./Track"
import SearchBar from "./SearchBar"
import { useEffect, useState } from 'react'
import Artist from './Artist'
import { key } from '../secrets/api'



function Search({ makePlaylist, setTopTracks}) {
    const [searchSongs, setSearchSongs]= useState([])
    const [searchInput, setSearchInput] = useState({
        onSearch: '',
        onDropDown: ''
      })
    
    let url;
    if(searchInput.onDropDown === "Title") {
        url=`https://api.spotify.com/v1/search?q=${searchInput.onSearch}&type=track&market=US&limit=10`
    } else if (searchInput.onDropDown === "Artist") {
        url=`https://api.spotify.com/v1/search?q=${searchInput.onSearch}&type=artist&market=US&limit=10`
    } else {
        url =`https://api.spotify.com/v1/browse/new-releases?country=US`
    }

    useEffect(()=> {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${key}`
            }
        })
        .then(r => r.json())
        .then(data => { 
            if(searchInput.onDropDown === "Title") {
                setSearchSongs(data.tracks.items)
            } else if (searchInput.onDropDown === "Artist") {
                setSearchSongs(data.artists.items)
            } else {
                setSearchSongs(data.albums.items)
        }})
        }, [url, searchInput])

    function topTracks(id){
        fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
            {method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${key}`}})
        .then(r => r.json())
        .then(data => setTopTracks(data.tracks))
    }
 
    function lmao() {
        if (searchSongs.length > 1 ){
            return searchSongs[1].type  === "artist" ? 
                searchSongs.map((song)=>{{ return( <Artist key={song.id} song={song} topTracks={topTracks}/>)
            }}) : searchSongs.map((song)=> {
                return (<Track song = {song} key ={song.id} makePlaylist={makePlaylist}/>)
            })
        } else {
            return searchSongs.map((song)=> {
                return (<Track song = {song} key ={song.id} makePlaylist={makePlaylist}/>)
            })
        }
    }

    return(
        <div>
            <SearchBar setSearchInput={setSearchInput} />
            <div className='song-container' >
                {lmao()}
            </div> 
        </div>
    )
}

export default Search