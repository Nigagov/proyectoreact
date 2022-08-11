import './Navbar.css'
import Button from '../../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav classname='Navbar'>
            <div>
                Señor Café
            </div>
            <div>
                <Button color= "brown" handleClick={()=>console.log('Café con leche')}>Café con leche</Button>
                <Button color="orange" handleClick={()=>console.log('Capuchino')}>Capuchino</Button>
                <Button color="white" handleClick={()=>console.log('Macchiato')}>Macchiato</Button>
                <Button color="black" handleClick={()=>console.log('Café')}>Café</Button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar