function Playlist({ playlistSongs, removeSong }) {
    
    const list = playlistSongs.map((song)=>{
        return(
            <div key = {song.id}> 
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
                <button onClick={()=>removeSong(song)}>remove ❌</button>
            </div>
        )
    })
    return (
        <div>
            <h1>Your Playlist</h1>
            {list}
        </div>
    )
}

export default Playlist