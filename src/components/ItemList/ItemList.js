import './ItemList.css'
import { memo } from 'react'
import Item from "../Item/Item"

const ItemList = ({products}) => {

    const handleClick = () => {
        console.log('click en ItemList')
    }

    return(
        <div className='ListGroup'onClick={handleClick}>
            {products.map(prod => <Item key={prod.id}{...prod} />)}
        </div>
    )
}

export default memo(ItemList)