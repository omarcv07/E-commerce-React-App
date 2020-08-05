import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './shop'

export const ConfigureStore = () => {
    const store = createStore(reducer, applyMiddleware(thunk));
    return store
}