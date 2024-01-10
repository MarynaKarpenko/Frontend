
const defaultState = {}

const userReducer = (store = defaultState, action) => {
    switch(action.type){
        case USER_ACTION_TYPES.ADD_USER:
            const newStore = {
                login: action.payload.login,
                password: action.payload.password
            }
        return newStore
        case USER_ACTION_TYPES.SET_LOGIN:
            const newNewStore = {
                ...store,
                login: action.payload.login
            }
        return newNewStore
        default:
            return store
    }
}