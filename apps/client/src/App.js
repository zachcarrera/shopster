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

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DashboardView />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/new" element={<Create />} />
                <Route path="/products/:_id" element={<OneProductView />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success/:_id" element={<Success />} />
                <Route path="/fail" element={<Fail />} />
            </Routes>
        </div>
    );
}

export default App;
