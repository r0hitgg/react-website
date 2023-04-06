import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Header from "./common/header";
import Shop from './pages/shop';
import Cart from './pages/cart';
import Wishlist from './pages/wishlist';
import LogIn from './pages/login';
import ProductDetail from './pages/product_detail';
import { productStore as store } from "./store/store";
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { fetchProducts } from "./store/reducer";

// todo: Wait for fetch product then render
store.dispatch(fetchProducts())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/wishlist" element={<Wishlist/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/shop/product/:id" element={<ProductDetail/>} />
              </Routes>
            </BrowserRouter>
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
