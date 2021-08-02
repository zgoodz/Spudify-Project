import './App.css'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Search from './Components/Search'
import Header from './Components/Header'
import Welcome from './Components/Welcome'

function App() {
  const [onSearch, setOnSearch ] = useState('')
  const [onDropDown, setOnDropDown ] = useState('')

  let url=""
  console.log(onDropDown)

  useEffect(()=> {
      if(onDropDown === "Title") {
        url=`https://api.spotify.com/v1/search?q=${onSearch}&type=track&market=US&limit=10&offset=5`
      } else if (onDropDown === "Artist") {
        url=`https://api.spotify.com/v1/search?q=${onSearch}&type=artist&market=US&limit=10&offset=5`
      } else {
        url =`https://api.spotify.com/v1/browse/new-releases?country=US`
      }

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer BQBGPLj4JV4DLuzPoOVNg2mVPhIMUvxQ5_IIXneLbE_nVuYD8tED6BWVMfeH3zglJ7llk_FpsLcauD8j1FkghilR2UXsP5TZOF2o_6k4zg3K4uf9_hVTRF8B5ZDZtPPVC2rHD3zIF7ORbQ'}
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }, [onSearch, onDropDown])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/playlist'>
          <Playlist />
        </Route>
        <Route path='/search'>
          <Search setOnSearch={setOnSearch} setOnDropDown={setOnDropDown}/>
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
