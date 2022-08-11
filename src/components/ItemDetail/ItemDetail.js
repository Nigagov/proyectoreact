import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from '../../Button/Button'








const ItemDetail = ({id, name, category, img, price, stock, description}) =>{
    const [inputType, setInputType] = useState ('input')
    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)
        setQuantity(quantity)
    }

    return(
        <article className="CardItem">
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {/* { inputType === 'button' ? <ButtonCount stock={stock} onConfirm={handleOnAdd} />: null }
                { inputType === 'input' ? <InputCount stock={stock} onConfirm={handleOnAdd} />: null } */}
                { quantity > 0 ? <link to='/cart'>Ir al carrito</link> : <ItemCount stock={stock} onConfirm={handleOnAdd} />}
            </footer>
        </article>
    )
}

export default ItemDetail