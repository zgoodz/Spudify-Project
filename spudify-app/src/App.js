import './App.css'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Search from './Components/Search'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import LogIn from './Components/LogIn'
import { key } from './secrets/api'
import TopTracks from './Components/TopTracks'

function App() {
  const [logInToken, setLogInToken] = useState()
  const [playlistSongs, setPlaylist] = useState([])
  const [topTracks, setTopTracks] = useState([])

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
    fetch(`http://localhost:8000/Playlist/${song.id}`, {
      method : "DELETE"
    })
    const filter = playlistSongs.filter((tune)=>{
      return tune.id !== song.id
    })
    setPlaylist(filter)
  }

  if (!logInToken) {
    return <LogIn setLogInToken={setLogInToken}/>
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
               makePlaylist={makePlaylist}
               setTopTracks ={setTopTracks}
          />
        </Route>
        <Route path = '/topTracks'>
          <TopTracks topTracks={topTracks} makePlaylist={makePlaylist}/>
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
