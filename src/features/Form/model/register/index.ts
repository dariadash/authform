import { createDomain } from 'effector'

const d = createDomain()

export const $email = d.store('')
export const setEmail = d.event<string>()
export const $password = d.store('')
export const setPassword = d.event<string>()
export const $username = d.store('')
export const setUsername = d.event<string>()

export const register = d.event()

type RegisterFxPayload = {
    username: string,
    email: string
    password: string
}
export const registerFx = d.createEffect<RegisterFxPayload, void, void>()
