import pelangganActionTypes from './pelanggan.types';
import { checkData, removeData } from './pelanggan.utils';

const INITIAL_STATE = {
    pelanggan: [],
    pelangganTerpilih: null
}

const pelangganReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case pelangganActionTypes.TAMBAH_PELANGGAN:
            return {
                ...state,
                pelanggan: checkData(state.pelanggan, action.payload)
            }


        case pelangganActionTypes.HAPUS_PELANGGAN:
            return {
                ...state,
                pelanggan: removeData(state.pelanggan, action.payload)
            }

        case pelangganActionTypes.PELANGGAN_TERPILIH:
            return {
                ...state,
                pelangganTerpilih: action.payload
            }

        default:
            return state;
    }
}

export default pelangganReducer;