import { useState } from 'react'
import { NavLink} from 'react-router-dom'

function NavBar() {
    const [logInButton, setLogInButton] = useState(true)

    function handleButton() {
        setLogInButton(!logInButton)
    }

    return (
        <nav>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='search'>Search</NavLink>
            <NavLink to='playlist'>YourPlaylist</NavLink>
            {logInButton ? (
                <button onClick={handleButton}>Log In</button>
                ) : (
                <button onClick={handleButton}>Log Out</button>
            )}

            
        </nav>
    )
}

export default NavBar