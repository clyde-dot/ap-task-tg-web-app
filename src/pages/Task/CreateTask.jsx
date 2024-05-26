import React, { useCallback, useEffect, useState } from "react";
import "./CreateTask.css";
import useTelegram from "../../hooks/useTelegram";

const CreateTask = () => {
    const { tg } = useTelegram();
    const [companyName, setCompanyName] = useState("АПРО");
    const [operatorName, setOperatorName] = useState("Оператор - 1 / Айсултан");
    const [taskDescription, setTaskDescription] = useState("");

    tg.MainButton.setParams({ text: "Создать задачу" });

    const onSendData = useCallback(() => {
        const data = { companyName, operatorName };
        tg.sendData(JSON.stringify(data));
    }, [tg, companyName, operatorName]);

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
            tg.offEvent("mainButtonClicked", onSendData);
        };
    }, [tg, onSendData]);

    const onChangeCompany = (e) => {
        setCompanyName(e.target.value);
    };
    const onChangeOperator = (e) => {
        setOperatorName(e.target.value);
    };
    const onChangeTaskDescription = (e) => {
        setTaskDescription(e.target.value);
        if (!taskDescription) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    };
    return (
        <div className="form">
            <div className="form-title">Задача</div>
            <div className="form-input">
                <div>
                    <span>Оператор :</span>
                    <select value={companyName} onChange={onChangeCompany}>
                        <option value="Оператор - 1 / Айсултан">
                            Оператор - 1 / Айсултан
                        </option>
                        <option value="Оператор - 2 / Ануар">
                            Оператор - 2 / Ануар
                        </option>
                        <option value="Оператор - 3 / Аскар">
                            Оператор - 3 / Аскар
                        </option>
                    </select>
                </div>
                <div>
                    <span>Название компании :</span>
                    <select value={operatorName} onChange={onChangeOperator}>
                        <option value="АПРО">АПРО</option>
                        <option value="АТЭК">АТЭК</option>
                        <option value="АТК Кызмет">АТК Кызмет</option>
                        <option value="СПК-Актобе">СПК-Актобе</option>
                    </select>
                </div>
                <div>
                    <textarea
                        placeholder="Введите описание задачи..."
                        value={taskDescription}
                        onChange={onChangeTaskDescription}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
