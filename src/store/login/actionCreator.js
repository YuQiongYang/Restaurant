import {LOGIN} from './const'

const actionCreator = {
    login(name) {
        return (dispatch) => {
            let action = {
                type: LOGIN,
                name: name
            }
            dispatch(action)
        }
    }
}

export default actionCreator