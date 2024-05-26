import React from "react";
import "./Auth.css";
const Auth = () => {
    return (
        <div className="form-auth">
            <div className="form-title">Авторизация пользователя в системе</div>
            <div className="form-input">
                <input type="password" placeholder="Введите секретный ключ:" />
            </div>
        </div>
    );
};

export default Auth;
