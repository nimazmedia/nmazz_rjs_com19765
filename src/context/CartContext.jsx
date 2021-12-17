import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addCart = (item, count) => {
        if (isInCart(item)) {
            let newCart = cartList;

            newCart.forEach((cartItem) => {
                if (cartItem.id === item.id) { cartItem.count += count; }})
            setCartList(newCart)
        } else {
            setCartList([...cartList, { ...item, count }])
        }
    };

    const isInCart = (item) => {
        return cartList.some((cartItem) => cartItem.id === item.id);
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