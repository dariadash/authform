import { combine, sample } from 'effector'
import { $email, $password, $walidationMessage, login, loginFx, setEmail, setPassword } from './index'

$email
    .on(setEmail, (_, email) => email)

$password
    .on(setPassword, (_, password) => password)

loginFx.use(({ email, password }) => {
    const loginCredentials = { email, password }
    const stringify = JSON.stringify(loginCredentials)
    return localStorage.setItem('credentials', stringify)
})

$walidationMessage
    .on(loginFx.fail, () => console.log("ошибка логина"))
    .reset([setEmail, setPassword])


loginFx.doneData.watch(({ data }) => {
    console.log(data)
    localStorage.setItem('authToken', data.token)
})

sample({
    clock: login,
    target: loginFx,
    source: combine($email, $password, (e, p) => {
        return {
            email: e,
            password: p,
        }
    })
})
