import { useState } from 'react'

import { useEffect } from "react"

const Counter = ({show,stock, initial, onAdd}) => {
    //const state = useState(10)
    const [count, setCount] = useState(0)

    

    useEffect(() => {
        console.log('function callback useEffect')
        
        return() => console.log('el componente va a desmontarse')

    }, [show])
    
    // useEffect(() => {
    //     console.log('Se actualizo el estado counter')
    // }, [count])
    
    const decrement = ()=> {
        if(count > initial){
        setCount(count - 1)
        }
    }

    const increment = ()=> {
        if(count< stock){
        setCount(count + 1)
        }
    }

    console.log('renderizar')
    return  (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter