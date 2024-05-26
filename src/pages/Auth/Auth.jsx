import React from "react";
import "./Auth.css";
const Auth = () => {
    return (
        <div className="form-auth">
            <div className="auth-title">
                Авторизация пользователя в системе:{" "}
            </div>
            <input type="password" placeholder="Введите секретный ключ:" />
        </div>
    );
};

export default Auth;
