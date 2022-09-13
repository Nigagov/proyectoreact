import { useState, useEffect } from 'react'
import { getProducts } from "../../../asyncMock"
import ItemList from '../../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = usesState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])


    useEffect(() => {
        const onResize = () => console.log('I change the window size')

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)

    }, [])


    if (loading) {
        return <h1>Loading...</h1>
    }

    if(products.length === 0) {
        return categoryId ? <h1>There are no products{categoryId} </h1> : <h1>There are no products available</h1>
    }

    return (
        <>
            <h1>{greeting} ${categoryId || ''}`</h1>
            
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer