
const USER_ACTION_TYPES = {
    ADD_USER: 'USER_ACTIONS/ADD_USER',
    SET_LOGIN: 'USER_USER_ACTIONS/SET_LOGIN'
}

const addUserData = (login, password) => {
    return{
        type: USER_ACTION_TYPES.ADD_USER,
        payload: {
            login,
            password
        }
    }
}

const setLogin = (login) => {
    return{
        type: USER_ACTION_TYPES.SET_LOGIN,
        payload: {
            login
        }
    }
}
