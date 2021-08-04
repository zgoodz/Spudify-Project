import './App.css'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Search from './Components/Search'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import TopTracks from './Components/TopTracks'


function App() {
  const [searchSongs, setSearchSongs]= useState([])
  const [playlistSongs, setPlaylist] = useState([])
  const [topTracks, setTopTracks] = useState([])
  const [submittedData, setSubmittedData]=useState({})
 
 
  
  function dataToRender(data) {
    
    if(submittedData.dropDown === "Title") {
      return setSearchSongs(data.tracks.items)
    } else if (submittedData.dropDown === "Artist") {
      return setSearchSongs(data.artists.items)
    } else {
      return setSearchSongs(data.albums.items)
    }
  }
  let url = ""
  function potato(){
    if(submittedData.dropDown === "Title") {
      return url=`https://api.spotify.com/v1/search?q=${submittedData.search}&type=track&market=US&limit=10`
    } else if (submittedData.dropDown === "Artist") {
      return url=`https://api.spotify.com/v1/search?q=${submittedData.search}&type=artist&market=US&limit=10`
    } else { 
      return url =`https://api.spotify.com/v1/browse/new-releases?country=US`
    }
  }
  useEffect(()=> {
    fetch(potato(), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer BQAhQ7srlwH2epieOUNxaRgZE2UWPyB7jajmTEZUIk2bhMLbmsOqdvuq-CjcE7y2Q0j6u0Oes7Cd4c-6-xuHjtRt2ugaoPKYmLj2X4ONk2F1SUy73uW0imdmDimpAYN5wHc0QXLKUaL5CifrD2o`
        // Your token here
        }
    })
    .then(r => r.json())
    .then(data => dataToRender(data))
    console.log(submittedData)
  }, [submittedData])

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
            setSubmittedData={setSubmittedData}
            makePlaylist={makePlaylist}
            songs={searchSongs}
            submittedData={submittedData}
            setSearchSongs ={setSearchSongs}
            setTopTracks={setTopTracks}
          />
        </Route>
        <Route path = '/topTracks'>
          <TopTracks topTracks ={topTracks}
          makePlaylist={makePlaylist}/>
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;