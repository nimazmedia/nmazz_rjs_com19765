import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addCart = (item, qnt) => {
        if (isInCart(item)) {
            let newCart = cartList;

            newCart.forEach((cartItem) => {
                if (cartItem.id === item.id) {
                cartItem.qnt += qnt;
                    }
                });
            setCartList(newCart);
            } else {
                setCartList([...cartList, { ...item, qnt }]);
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
    
    const sumaPrecioItems = () => {
        return cartList.reduce((acum, item) => acum = acum + item.precio, 0)
    }   

    const precioTotal = () => {
        return cartList.reduce((acum, item) => (acum += item.precio * item.count), 0)
    }

    const vaciarCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={
            { cartList, addCart, vaciarCart, borrarItem, cantItem, sumaPrecioItems, precioTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider