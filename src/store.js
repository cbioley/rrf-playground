import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {
  modelReducer,
  formReducer
} from 'react-redux-form';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const initialUserState = {
  todos : [
    { id: 1, title: 'Initial Todo 1' },
    { id: 2, title: '' },
    { id: 3, title: 'Initial Todo 3' },
  ]
}

const logger = createLogger();
const store = applyMiddleware(thunk, logger)(createStore)(combineReducers({
  todos: modelReducer('todos', initialUserState),
  todosForm: formReducer('todos', initialUserState)
}));

export default store;
