import Track from './Track'
function TopTracks({topTracks, makePlaylist}){
    
    return (
        <>
        {topTracks.map((song)=>{
            return <Track key={song.id} song ={song} makePlaylist={makePlaylist}/> 
        })}
        </>
    )
}
export default TopTracks