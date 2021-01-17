import { DECREASE_COUNT, INCREASE_COUNT } from "./actionTypes"

export const increase = () => ({
    type: INCREASE_COUNT,
    payload: {}
})

export const decrease = () => ({
    type: DECREASE_COUNT,
    payload: {}
})
