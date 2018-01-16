import { combineReducers } from 'redux';
import reducer from './contributorReducer';

export default combineReducers({ contributor: reducer });
