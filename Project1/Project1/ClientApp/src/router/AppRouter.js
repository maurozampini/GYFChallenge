import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import SellProductsView from '../views/sellProducts.view';
import UpdateProductsView from '../views/updatedProducts.view';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/sellproducts" element={<SellProductsView />} />
                <Route path="/updateproducts" element={<UpdateProductsView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
