import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import React from 'react'


const Navbar = () => {

    return (
        <nav className='Navbar'>
            <div>
                Meidor
            </div>
            <div>
                <Button label="Remera" handleClick= {() => console.log ('remera')}/>
                <Button label="Camisa" handleClick= {() => console.log ('camisa')}/>
                <Button label="Pantalón" handleClick= {() => console.log ('pantalón')}/>
            </div>
        </nav>
        
    )
}

export default Navbar