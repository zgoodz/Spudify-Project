import './App.css'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Search from './Components/Search'
import Header from './Components/Header'
import Welcome from './Components/Welcome'

function App() {
  const [searchSongs, setSearchSongs]=useState([])
  const [playlistSongs, setPlaylist]=useState([])
  useEffect(()=> {
    fetch('https://api.spotify.com/v1/search?q=roadtrip&type=track', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer BQD_g7bgo7Wf9XAnWDaEBn8mDYfohfSAKaIc8tAFDr28NEJhvg0ijkelc8B6tex6D4nKDHqPMwbuj0KnfFb8JhR7_3PBKOfL-oYOr9Dr56GbeR7_L2ZV-GEMGbY4PotRb-2JDGAkNmJKQ79oqAM'}
    })
    .then(r => r.json())
    .then(data => setSearchSongs(data.tracks.items))
  }, [])
  
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
          <Playlist playlistSongs={playlistSongs} removeSong={removeSong}/>
        </Route>
        <Route path='/search'>
          <Search songs={searchSongs} makePlaylist={makePlaylist}/>
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
