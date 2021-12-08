import React from "react";
import { useStore } from "effector-react";
import { logout } from "../features/Form/model/app";
import { $email } from "../features/Form/model/auth";

export const Main = () => {
    const email = useStore($email)
    return (
        <>
            <p>Вы вошли как {email}</p>
            <button className="button_auth" onClick={() => logout()}>Выйти</button>
        </>
    )
}