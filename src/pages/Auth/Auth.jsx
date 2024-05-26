import React, { useEffect, useState } from "react";
import "./Auth.css";
import useTelegram from "../../hooks/useTelegram";
const Auth = () => {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({ text: "Войти" });
    }, []);

    useEffect(() => {
        if (userPassword.length >= 8) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [userPassword]);

    const [userPassword, setUserPassword] = useState("");
    const onChangePassword = (e) => {
        setUserPassword(e.target.value);
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
