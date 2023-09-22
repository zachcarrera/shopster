import { Routes, Route } from "react-router-dom";
import {
    DashboardView,
    OneProductView,
    Cart,
    Checkout,
    Success,
    Fail,
    Create,
} from "./views";
import { useState } from "react";
import { CartContext } from "./context";
import { CartProduct } from "./views/OneProductView/OneProductView";

function App() {
    const [cart, setCart] = useState<CartProduct[]>([]);
    return (
        <div>
            <CartContext.Provider value={[cart, setCart]}>
                <Routes>
                    <Route path="/" element={<DashboardView />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products/new" element={<Create />} />
                    <Route path="/products/:_id" element={<OneProductView />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/success/:_id" element={<Success />} />
                    <Route path="/fail" element={<Fail />} />
                </Routes>
            </CartContext.Provider>
        </div>
    );
}

export default App;
