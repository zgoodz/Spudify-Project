import { Link } from 'react-router-dom'

function Artist({ song, topTracks }){
    
    function handleClick(){
        topTracks(song.id)
    }
    console.log(song)
    return(
        <div className='song-card artist-ul'style={{borderStyle: 'solid'}}>
            <ul className='song-ul'>
                <li style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', marginBottom: '70px'}} >{song.name}</li>
                <li>
                    <button style={{marginTop: '30px', marginBottom: '-10px'}} className='btn'>
                        <Link className='link' to='/toptracks' onClick = {handleClick} style={{ textDecoration:'none', color:'black'}}>See Top Tracks</Link>
                    </button>
                </li>
            </ul>
        </div>
    )
}
export default Artist