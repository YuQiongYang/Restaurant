import state from './state'

import {LOGIN} from './const'

const reducer = (previousState = state,action) => {
    let new_state = {...previousState}

    switch(action.type){
        case LOGIN:
            new_state.user_info = previousState.user_info
            break

        default:
            break;
    }
    return new_state
}

export default reducer