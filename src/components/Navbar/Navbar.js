import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { link, NavLink } from 'react-router-dom'



const Navbar = () => {

    return (
        <nav className='Navbar'>
            <link to= '/'>
                <h3>Sir Café</h3>
            </link>
            <div className="Types">
                <NavLink to='/types/cafe' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>cafe</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar