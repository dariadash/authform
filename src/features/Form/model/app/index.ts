import { createDomain } from "effector";

const d = createDomain()

export const $appLoaded = d.store<boolean>(false)
export const $userAuthorized = d.store(false)
export const appload = d.event<void>()
export const getProfileFx = d.effect<any, any, any>()
export const logout = d.event()
