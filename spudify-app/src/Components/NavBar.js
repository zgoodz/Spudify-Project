import { useState } from 'react'

function NavBar() {
    const [logInButton, setLogInButton] = useState(true)

    function handleButton() {
        setLogInButton(!logInButton)
    }

    return (
        <nav>
            <a className="button" href="/">Home</a>
            <a className="button" href="/search">Search</a>
            <a className="button" href="/playlist">Your Playlist</a>
            {logInButton ? (
                <button onClick={handleButton}>Log In</button>
                ) : (
                <button onClick={handleButton}>Log Out</button>
            )}

            
        </nav>
    )
}

export default NavBar