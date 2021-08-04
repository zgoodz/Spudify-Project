import { useState } from 'react'

function Track({ song, makePlaylist }) {
    const [addButton, setAddButton] = useState(true)

    function handleButton() {
        setAddButton(!addButton);
        makePlaylist(song)
    }
    
    return (
        <div >
            <h3>{song.name}</h3>
            <p>{song.artists[0].name}</p>
            <button onClick = {()=> handleButton()}>{addButton ? "Add to Playlist" : "Added"}</button>
        </div>
    )
}

export default Track
