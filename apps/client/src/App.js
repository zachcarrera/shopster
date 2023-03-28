import { Routes, Route } from "react-router-dom";
import { DashboardView, ShoppingCart, Checkout, Success, Fail } from "./views";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DashboardView />} />
                <Route path="/shoppingcart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                <Route path="/fail" element={<Fail />} />
            </Routes>
        </div>
    );
}

export default App;
