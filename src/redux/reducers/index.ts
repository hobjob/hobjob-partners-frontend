import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import categories from './categories';
import login from './login';
import partner from './partner';
import courses from './courses';

export const rootReducer = combineReducers({
	categories,
	login,
	partner,
	courses,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>