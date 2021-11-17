import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import {Cart} from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
            <CartContextProvider>
                <BrowserRouter>
                    <div className="App">
                        <NavBar />
                        <Routes>
                            <Route exact path="/" element={<ItemListContainer />}/>
                            <Route exact path="/catalogo/:id" element={<ItemListContainer />}/>
                            <Route exact path="/detail/:id" element={<ItemDetailContainer />}/>
                            <Route exact path="/about" />
                            <Route exact path="/cart" element={<Cart />}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </CartContextProvider>
    );
}

export default App;

