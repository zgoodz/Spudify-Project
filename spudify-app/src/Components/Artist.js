
import {Link} from 'react-router-dom'
function Artist({ song, topTracks}){

    return(
        <>
        <h3>{song.name}</h3>
        <p>{song.genres}</p>
        <Link to='/toptracks' onClick = {()=>topTracks(song.id)}>See Top Tracks</Link>
        </>
    )
}
export default Artist