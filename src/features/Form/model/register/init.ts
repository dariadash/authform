import { combine, sample } from 'effector'
import { $email, $password, $username, register, registerFx, setEmail, setPassword, setUsername } from "./index";

$email
    .on(setEmail, (_, email) => email)

$password
    .on(setPassword, (_, password) => password)

$username
    .on(setUsername, (_, username) => username)

registerFx.use(({ username, email, password }) => {
    const registerCredentials = { username, email, password }
    const stringify = JSON.stringify(registerCredentials)
    return localStorage.setItem('credentialsReg', stringify)
})

const $loginAndPassword = combine(
    $username,
    $email,
    $password,
    (username, email, password) => ({ username, email, password })
)

sample({
    source: $loginAndPassword,
    target: registerFx,
    clock: register,
})
