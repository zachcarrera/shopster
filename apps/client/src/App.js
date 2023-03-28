import { Routes, Route } from "react-router-dom";
import { DashboardView, Cart, Checkout, Success, Fail, Create } from "./views";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DashboardView />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                <Route path="/fail" element={<Fail />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
}

export default App;
