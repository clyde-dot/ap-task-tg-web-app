import React, { useState } from "react";
import "./Auth.css";
import useTelegram from "../../hooks/useTelegram";
const Auth = () => {
    const { tg } = useTelegram();
    const [userPassword, setUserPassword] = useState("");
    tg.MainButton.setParams({ text: "Войти" });

    const onChangePassword = (e) => {
        setUserPassword(e.target.value);
        if (userPassword.length >= 8) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    };
    return (
        <div className="form-auth">
            <div className="form-title">Авторизация пользователя в системе</div>
            <div className="form-input">
                <input
                    onChange={onChangePassword}
                    value={userPassword}
                    type="password"
                    placeholder="Введите секретный ключ:"
                />
            </div>
        </div>
    );
};

export default Auth;
