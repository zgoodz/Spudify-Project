import Track from "./Track"

function TopTracks({ topTracks, makePlaylist }) {
    return (
        <>
            {topTracks.map(song => <Track song={song} key={song.id} makePlaylist={makePlaylist} />)}
        </>
    )
}

export default TopTracks 