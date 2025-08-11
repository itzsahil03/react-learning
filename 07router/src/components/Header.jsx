import react from 'react';
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <>
        <div >
        <NavLink to= "/"> HOME</NavLink>
        <NavLink to= "/about"> ABOUT </NavLink>
        <NavLink to= "/contact"> CONTACT </NavLink>
        <NavLink to= "/github"> GITHUB</NavLink>
        </div>
        </>
    )
}

export default Header