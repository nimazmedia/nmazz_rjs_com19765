import { createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addCart = (item) => {
        setCartList([...cartList, item])
    }
    const vaciarCart = () => {
        setCartList([])
    }
    


    return (
        <CartContext.Provider value={
            {
                cartList,
                addCart,
                vaciarCart
            }}>
            
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider