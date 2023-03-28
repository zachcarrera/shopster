import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DashboardView } from "./views";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<DashboardView />} />
            </Routes>
        </div>
    );
}

export default App;
