function Results({ songs, makePlaylist }) {

    const list = songs.map((song)=>{
        return (
            <div onClick = {()=> makePlaylist(song)}>
            <h3>{song.name}</h3>
            <p>{song.artists[0].name}</p>
        </div>
        )
    })
    return (
        <div>
            <h1>Search Results</h1>
            {list}
        </div>
    )
}

export default Results