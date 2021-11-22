import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addCart = (item, cantidad) => {
        let inCartList = cartList.find((cartItem) => cartItem.id === item.id);

        if (inCartList) {
            inCartList.count += cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...item, cantidad }])
        }

    }

    const borrarItem = (id) => {
        setCartList(cartList.filter((i) => i.id !== id))
    }

    const cantItem = () => {
        return cartList.reduce((acum, item) => acum = acum + item.count, 0)
    }
    
    const sumaPrecioItems = () => {
        return cartList.reduce((acum, item) => acum = acum + item.precio, 0)
    }   

    const totalPrice = () => {
        return cartList.reduce((acum, item) => (acum += item.precio * item.count), 0)
    }

    const vaciarCart = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider value={
            {
                cartList,
                addCart,
                vaciarCart,
                borrarItem,
                cantItem,
                sumaPrecioItems,
                totalPrice
            }}>
            
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider