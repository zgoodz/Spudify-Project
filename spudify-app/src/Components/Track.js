import { useState } from 'react'

function Track({ song, makePlaylist }) {
    const [addButton, setAddButton] = useState(true)
    // console.log(song.external_urls.spotify)

    function handleButton() {
        setAddButton(!addButton);
        makePlaylist(song, image, song.external_urls.spotify)
    }
    const image= song.album ? song.album.images[0].url : song.images[0].url
    return (
       
        <div className='song-card' style={{borderStyle: 'solid'}}>      
            <ul className="song-ul">
                <li style={{ color: 'black', fontStyle: 'italic'}}>{song.name}</li>
                <li style={{ color: 'black', fontWeight: 'bold' }}>{song.artists[0].name}</li>
                <img className='card-img' src={image}/>
            </ul>
            <button className="track-btn btn"  onClick = {()=> handleButton()}>{addButton ? "Add to Playlist" : "Added"}</button>
        </div>
    )
}

export default Track
