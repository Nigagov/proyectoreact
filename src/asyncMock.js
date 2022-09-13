const products = [
{
    id: '1',
    name: 'Café',
    category: 'solo',
    price: '200',
    img: 'images/cafe.png'
},
{
    id: '2',
    name: 'Café con leche',
    category: 'leche',
    price: '250',
    img: 'images/cafeconleche.png'
},
{
    id: '3',
    name: 'Capuchino',
    category: 'expreso',
    price: '300',
    img:  'images/capuchino.png'
},
{
    id: '4',
    name: 'Macchiato',
    category: 'italiano',
    price: '350',
    img: 'images/macchiato.png'
}

]

export const getProducts = ()=> {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = ()=> {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products [0])
        }, 2000)
    })
}
