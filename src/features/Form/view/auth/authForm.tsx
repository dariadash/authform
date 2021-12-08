import React from "react";
import { useStore } from 'effector-react'
import { Link, useHistory } from 'react-router-dom';
import { $email, $password, setEmail, setPassword, login as auth, $walidationMessage, loginFx } from '../../model/auth'

export const AuthForm = () => {
    const email = useStore($email)
    const password = useStore($password)
    const walid = useStore($walidationMessage)
    const history = useHistory()

    React.useEffect(() => {
        const unwatch = loginFx.done.watch(() => {
            history.push('/mainpage');
        })
        return () => unwatch()
    }, [])

    return (
        <div className="wrapper">
            <div className="authForm">
                <h1>Login</h1>
                <p>{walid}</p>
                <p>Please sing-in to your account</p>
                <div>
                    <label>Email</label>
                    <input className="input" placeholder={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="authForm__password">
                        <label>Password</label>{' '}
                        <Link className="authForm__link--pass" to="/registration">
                            Forgot Password?
                        </Link>
                    </div>
                    <input className="input" type='password' placeholder={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="button_auth" onClick={() => auth()}>Войти</button>
                    <div className="authForm__links">
                        <p>New on our platform?</p>{' '}
                        <Link className="authForm__link--bottom" to="/registration">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}