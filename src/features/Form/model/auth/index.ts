import { createDomain } from "effector";

const d = createDomain()

export const $email = d.store('')
export const $password = d.store('')
export const $walidationMessage = d.store<string | null>(null)

export const setEmail = d.event<string>()
export const setPassword = d.event<string>()

export const login = d.event()

type LoginPayload = {
    email: string
    password: string
}
export const loginFx = d.effect<LoginPayload, any, any>()
