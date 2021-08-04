import { Link } from 'react-router-dom'

function Artist({ song, topTracks }){
    
    function handleClick(){
        topTracks(song.id)
    }
    console.log(song)
    return(
        <>
            <h3>{song.name}</h3>
            <p>{song.genres}</p>
            <Link to='/toptracks' onClick = {handleClick}>See Top Tracks</Link>
        </>
    )
}
export default Artist