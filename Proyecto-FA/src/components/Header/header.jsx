import { NavLink } from 'react-router-dom'
import './header.css'

const header = () => {
  return (
    <header>
        <nav className='header'>
            <NavLink to="#" className='header-logo'>Habanna</NavLink>
            <input type="text" placeholder='Buscar' className='search-input'/>
            <ul className='header-options'>
            <li>
                <NavLink to="/" className='header-link'>Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/Products" className='header-link'>Articulos</NavLink>
            </li>
            <li>
                <NavLink to="/Cart" className='header-link'>Carrito</NavLink>
            </li>
            <li>
                <NavLink to="/AccountLogin" className='header-link' >Login</NavLink>
            </li>
            <li>
                <NavLink to="/AccountSignup" className='header-link' >Signup</NavLink>
            </li>
            </ul>
        </nav>
    </header>
  )
}

export default header