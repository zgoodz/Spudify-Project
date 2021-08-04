
function Playlist({ playlistSongs, removeSong }) {
   
    const list = playlistSongs.map((song)=>{

        console.log(playlistSongs)
        
        return(
            <div key={song.id} className= 'song-card' style={{borderStyle: 'solid'}}> 
                <ul className="song-ul">
                    <li style={{ color: 'black', fontStyle: 'italic'}}>{song.title}</li>
                    <li style={{ color: 'black', fontWeight: 'bold' }}>{song.artist}</li>
                    <img src={song.image} className='card-img'/>
                </ul>
                <button  className="btn" onClick={()=>removeSong(song)}>remove ❌</button>
            </div>
        )
    })
    
    return (
        <div className='song-container'>
            <h1>Your Playlist</h1>
            {list}
        </div>
    )
}


export default Playlist