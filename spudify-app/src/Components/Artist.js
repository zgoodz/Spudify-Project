import TopTracks from "./TopTracks"
import React from "react"
import { Link } from 'react-router-dom'

function Artist({ song, topTracks}){
    function handleClick(){
        topTracks(song.id)
    }
    return(
        <>
            <h3>{song.name}</h3>
            <p>{song.genres}</p>
            <Link to='toptracks' onClick = {handleClick}>See Top Tracks</Link>
            {/* <button onClick = {handleClick}>See top tracks</button> */}
        </>
    )
}
export default Artist