import { MovieReducer } from './Movie';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    video: MovieReducer
});

export type RootState = ReturnType<typeof allReducers>
