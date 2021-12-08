import { forward } from "effector";
import { $appLoaded, $userAuthorized, appload, getProfileFx, logout } from ".";
import { loginFx } from "../auth";

$appLoaded
    .on(getProfileFx.done, () => true)
    .on(getProfileFx.fail, () => true)

forward({
    from: appload,
    to: getProfileFx
})

$userAuthorized
    .on(getProfileFx.done, () => true)
    .on(logout, () => false)
    .on(loginFx.doneData, () => true)

logout.watch(() => {
    localStorage.clear()
})
