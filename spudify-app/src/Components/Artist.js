function Artist({ song, topTracks, setOnDropDown, setOnSearch}){
    function handleClick(){
        topTracks(song.id)
        
    }
    return(
        <>
        <h3>{song.name}</h3>
        <p>{song.genres}</p>
        <button onClick = {handleClick}>See top tracks</button>
        </>
    )
}
export default Artist