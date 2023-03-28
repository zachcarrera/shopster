import { Routes, Route } from "react-router-dom";
import { DashboardView } from "./views";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DashboardView />} />
            </Routes>
        </div>
    );
}

export default App;
