import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/Error/ErrorPage";

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
