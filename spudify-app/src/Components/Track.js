function Track({ song, makePlaylist}){
  
    return (
        <div onClick = {()=> makePlaylist(song)}>
        <h3>{song.name}</h3>
        <p>{song.artists[0].name}</p>

    </div>
)
    
}
export default Track