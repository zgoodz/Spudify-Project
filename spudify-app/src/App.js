import './App.css';
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Playlist from './Components/Playlist'
import Results from './Components/Results'
import Header from './Components/Header'
import Welcome from './Components/Welcome'

function App() {

  useEffect(()=> {
    fetch('https://api.spotify.com/v1/search?q=roadtrip&type=track', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer BQAH8M5nvngpAN3f4ZReVXMGi1UVcsE631_w_6N3m6eQx182Ympqi1U-GVyucjgf0f6CfXWMv2rwql99euh0oZwgCbSj-ZP7uGIzQb00Wd9p1vHiEo1R5tEtBTiiBkg0FCI6Mm3HP8A'}
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/playlist'>
          <Playlist />
        </Route>
        <Route path='/search'>
          <Results />
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
