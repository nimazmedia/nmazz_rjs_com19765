import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addCart = (item, count) => {
        let inCartList = cartList.find((cartItem) => cartItem.id === item.id)

        if (inCartList) {
            inCartList.cantidad += count
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...item, count }])

        }
    };

    const borrarItem = (id) => {
        setCartList(cartList.filter((i) => i.id !== id))
    }

    const cantItem = () => {
        return cartList.reduce((acum, item) => acum = acum + item.count, 0)
    }

    const precioTotal = () => {
        return cartList.reduce((acum, item) => (acum += item.precio * item.count), 0)
    }

    const vaciarCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={
            { cartList, addCart, vaciarCart, borrarItem, cantItem, precioTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider