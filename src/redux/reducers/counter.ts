import { count } from "console";
import { Action } from "redux";
import { DECREASE_COUNT, INCREASE_COUNT } from "../actionTypes";


const initialState = {
    count: 0
}

export default function (state: any = initialState, action: Action) {
    switch (action.type) {
        case INCREASE_COUNT:
            return {
                count: state.count + 1
            }
        case DECREASE_COUNT:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

