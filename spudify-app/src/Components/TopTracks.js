import React from "react"
import Track from "./Track"


function TopTracks({ topTracksData, makePlaylist }) {

    return (
        <>
        {topTracksData.map(song => <Track song={song} key={song.id} makePlaylist={makePlaylist} />)}
        </>
    )
}

export default TopTracks 