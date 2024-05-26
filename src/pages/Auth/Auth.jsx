import React, { useCallback, useEffect, useState } from "react";
import "./Auth.css";
import useTelegram from "../../hooks/useTelegram";

const Auth = () => {
    const { tg } = useTelegram();
    const [userPassword, setUserPassword] = useState("");
    const [userRole, setUserRole] = useState("OPERATOR");
    tg.MainButton.setParams({ text: "Войти" });

    const onSendData = useCallback(() => {
        const data = { userPassword, userRole };
        tg.sendData(JSON.stringify(data));
    }, [tg, userPassword, userRole]);

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
            tg.offEvent("mainButtonClicked", onSendData);
        };
    }, [tg, onSendData]);
    const onChangePassword = (e) => {
        setUserPassword(e.target.value);
        if (userPassword.length >= 8) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    };
    const onChangeRole = (e) => {
        setUserRole(e.target.value);
    };
    return (
        <div className="form-auth">
            <div className="form-title">Авторизация пользователя в системе</div>
            <div className="form-input">
                <div>
                    <span>Ключ: </span>
                    <input
                        onChange={onChangePassword}
                        value={userPassword}
                        type="password"
                        placeholder="Введите секретный ключ..."
                    />
                </div>
                <div>
                    <span>Роль :</span>
                    <select value={userRole} onChange={onChangeRole}>
                        <option value="OPERATOR">Оператор</option>
                        <option value="OPERATOR-ADMIN">Главный Оператор</option>
                        <option value="PROGRAMMER">Программист</option>
                        <option value="PROGRAMMER-ADMIN">
                            Главный программист
                        </option>
                        <option value="ADMIN">Админ</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Auth;
