import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
