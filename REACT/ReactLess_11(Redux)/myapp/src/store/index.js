import {applyMiddleware, combineReducers, createStore} from 'redux'
import { countReducer } from './countReducer'
import { stringReducer } from './stringReducer'
import { userReducer } from './usersReducer'
import { thunk } from 'redux-thunk'
import {persistedReducer, persistStore} from 'redux-persist'
import storage from 'redux-persil/lib/storage'

const persingConfig = {
  key: "localStore",
  storage,
  whitelist: ['users']
};

const rootReducer = combineReducers({
  count: countReducer,
  string: stringReducer,
  users: userReducer,
});

const persistedReducer = persistedReducer(persingConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);