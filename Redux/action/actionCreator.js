import { incresTypeAction, decresTypeAction, restTypeAction } from "./actionType.js";

export const incresAction = () => {
    return { type: incresTypeAction}
}

export const decresAction = () => {
    return { type : decresTypeAction}
}

export const resetAction = () => {
    return  { type : restTypeAction}
}