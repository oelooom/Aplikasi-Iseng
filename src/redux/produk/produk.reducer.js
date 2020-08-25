import produkActionTypes from './produk.types';
import { checkData, removeData } from './produk.utils';

const INITIAL_STATE = {
    produk: [],
}

const produkReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case produkActionTypes.TAMBAH_PRODUK:
            return {
                ...state,
                produk: checkData(state.produk, action.payload)
            }

        case produkActionTypes.HAPUS_PRODUK:
            return {
                ...state,
                produk: removeData(state.produk, action.payload)
            }

        default:
            return state;
    }
}

export default produkReducer;