import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route exact path="/" />
                        <Route exact path="/catalogo" element={<ItemListContainer />}/>
                        <Route exact path="/categoria/:id" element={<ItemListContainer />}/>
                        <Route exact path="/detail/:id" element={<ItemDetailContainer />}/>
                        <Route exact path="/cart" element={<CartWidget />}/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

