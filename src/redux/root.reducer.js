import { combineReducers } from 'redux';
import pelangganReducer from './pelanggan/pelanggan.reducer';
import produkReducer from './produk/produk.reducer';

export default combineReducers({
    produk: produkReducer,
    pelanggan: pelangganReducer,
});