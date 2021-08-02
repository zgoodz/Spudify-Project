import './App.css'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Search from './Components/Search'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import { key } from './secrets/api'

function App() {

  useEffect(()=> {
    fetch('https://api.spotify.com/v1/search?q=roadtrip&type=track', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer'
        // Your token here
        }
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])
console.log(key)
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/playlist'>
          <Playlist />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
