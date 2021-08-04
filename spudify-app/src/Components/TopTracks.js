import Track from "./Track"

function TopTracks({ topTracks, makePlaylist }) {
    return (
        <div className= "song-container">
            {topTracks.map(song => <Track song={song} key={song.id} makePlaylist={makePlaylist} />)}
        </div>
    )
}

export default TopTracks 