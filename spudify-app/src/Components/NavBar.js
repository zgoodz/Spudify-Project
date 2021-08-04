import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <nav>
            <NavLink style={{ textDecoration:'none', color: 'rgb(203, 253, 255)', fontWeight: 'bold'}} activeStyle={{color: "red"}} className='navLink' to='home'>Home</NavLink>
            <NavLink style={{ textDecoration:'none', color: 'rgb(203, 253, 255)', fontWeight: 'bold'}} activeStyle={{color: "red"}} className='navLink' to='search'>Search</NavLink>
            <NavLink style={{ textDecoration:'none', color: 'rgb(203, 253, 255)', fontWeight: 'bold'}} activeStyle={{color: "red"}} className='navLink' to='playlist'>YourPlaylist</NavLink>
        </nav>
    )
}

export default NavBar