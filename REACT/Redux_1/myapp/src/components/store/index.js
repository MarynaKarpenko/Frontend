import {createStore} from 'redux'

const defaultState = 0

const reducer = (store = defaultState, action) => {
    switch(action.type){
        case 'INCR':
            return store + 1
        case 'DECR':
            return store - 1
        case 'INCR100':
            return store + 100
        case 'DECR100':
            return store - 100
        case 'NULL':
            return 0 
        case 'INCR_BY_N':
            return store + action.payload
        default:
            return store 
    }
}

export const store = createStore(reducer)