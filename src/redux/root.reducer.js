import { combineReducers } from 'redux';
import pelangganReducer from './pelanggan/pelanggan.reducer';

export default combineReducers({
    pelanggan: pelangganReducer,
});