import { SHOW_ALERT_TRANSFORMERS, HIDE_ALERT_TRANSFORMERS } from "../types"

export const AlertTransformReducer = (stateTransformers, action) => {
    switch (action.type) {
        case SHOW_ALERT_TRANSFORMERS:
            return action.payload
        case HIDE_ALERT_TRANSFORMERS:
            return null
        default: return stateTransformers
    }
}

