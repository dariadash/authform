import React from "react";
import { useStore } from 'effector-react'
import { Link, useHistory } from 'react-router-dom';
import { $email, $password, $username, register, registerFx, setEmail, setPassword, setUsername } from '../../model/register';
import { $walidationMessage } from "../../model/auth";


export const RegisterForm = () => {
    const email = useStore($email)
    const password = useStore($password)
    const username = useStore($username)
    const walid = useStore($walidationMessage)
    const history = useHistory()

    React.useEffect(() => {
        const unwatch = registerFx.done.watch(() => {
            history.push('/mainpage');
        })
        return () => unwatch()
    }, [])
    return (
        <div className="wrapper">
            <div className="authForm">
                <h1>Registration</h1>
                <p>{walid}</p>
                <label>Username</label>
                <input
                    className="input"
                    autoFocus={true}
                    placeholder={'username'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    className="input"
                    placeholder={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className="input"
                    type='password'
                    placeholder={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="button_auth"
                    onClick={() => register()}
                >Регистрация</button>
                <div className="authForm__links">
                    <p>Already have an account?</p>
                    <Link className="authForm__link--bottom" to="/">
                        Sign in instead
                    </Link>
                </div>
            </div>
        </div>
    )
}