import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <Link to="/">Основное меню</Link>
            <Link to="/auth">Форма Авторизаций</Link>
        </div>
    );
};

export default Home;
