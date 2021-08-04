import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function Artist({ song, topTracks}){
    const[click, setClick]=useState(false)
    // function handleClick(){
    //     setClick(!click)
        
    // }
    // useEffect(()=>{
    //     fetch(`https://api.spotify.com/v1/artists/${song.id}/top-tracks?market=US`,
    //            {method: 'GET',
    //            headers: {
    //             'Content-type': 'application/json',
    //              'Authorization': `Bearer BQAdnd4xD9csgVigG4ihHtrK5i9G5AhMJGpKOgcyEgELRTqpZaUWjHVK_b8cUY3To3oqQx-qKplWVIjExvMLQZ9Es18XC9ZuFMpCms04TztT-9PuDV9Bh5bEg3jpqc4k2V5GGTZzcNCVumOb-g0`}})
    //        .then(r => r.json())
    //        .then(data => setTopTracks(data.tracks))
    //     },[])
   
    return(
        <>
        <h3>{song.name}</h3>
        <p>{song.genres}</p>
        <Link to='/toptracks' onClick = {()=>topTracks(song.id)}>See Top Tracks</Link>
        </>
    )
}
export default Artist