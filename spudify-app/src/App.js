import './App.css'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Search from './Components/Search'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import TopTracks from './Components/TopTracks'


function App() {
  const [onSearch, setOnSearch] = useState('')
  const [onDropDown, setOnDropDown] = useState('')
  const [searchSongs, setSearchSongs]= useState([])
  const [playlistSongs, setPlaylist] = useState([])
  const [topTracksData, setTopTracksData ] = useState([])

  let url = ""

  useEffect(()=> {

    function dataToRender(data) {
      if(onDropDown === "Title") {
        return data.tracks.items
      } else if (onDropDown === "Artist") {
        return data.artists.items
      } else {
        return data.albums.items
      }
    }

    if(onDropDown === "Title") {
      url=`https://api.spotify.com/v1/search?q=${onSearch}&type=track&market=US&limit=10`
    } else if (onDropDown === "Artist") {
      url=`https://api.spotify.com/v1/search?q=${onSearch}&type=artist&market=US&limit=10`
    } else {
      url =`https://api.spotify.com/v1/browse/new-releases?country=US`
    }

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${key}`
        }
    })
    .then(r => r.json())
    .then(data => setSearchSongs(dataToRender(data)))
  }, [onSearch])

  function makePlaylist(song){
    const playlistSong = {
      title: song.name, 
      artist: song.artists[0].name, 
      spotifyId: song.id,
      id: Math.random() }

    fetch('http://localhost:8000/Playlist', {
      method : "POST", 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(playlistSong)
    })
    const newPlaylist = [...playlistSongs, playlistSong]
    setPlaylist(newPlaylist)
  }

  function removeSong(song){
    console.log(song)
    fetch(`http://localhost:8000/Playlist/${song.id}`, {
      method : "DELETE"
    })
    const filter = playlistSongs.filter((tune)=>{
      return tune.id !== song.id
    })
    setPlaylist(filter)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/playlist'>
          <Playlist 
            playlistSongs={playlistSongs} 
            removeSong={removeSong}
          />
        </Route>
        <Route path='/search'>
          <Search 
            setOnSearch={setOnSearch} 
            setOnDropDown={setOnDropDown}
            makePlaylist={makePlaylist}
            songs={searchSongs}
            onDropDown={onDropDown}
            setSearchSongs ={setSearchSongs}
            url ={url}
            onSearch= {onSearch}
            setTopTracksData={setTopTracksData}
          />
        </Route>
        <Route path='/toptracks'>
          <TopTracks topTracksData={topTracksData} makePlaylist={makePlaylist}/>
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;