import pelangganActionTypes from './pelanggan.types';

export const tambahPelanggan = pelanggan => ({
    type: pelangganActionTypes.TAMBAH_PELANGGAN,
    payload: pelanggan
})

export const hapusPelanggan = pelanggan => ({
    type: pelangganActionTypes.HAPUS_PELANGGAN,
    payload: pelanggan
})

export const pelangganTerpilih = pelanggan => ({
    type: pelangganActionTypes.PELANGGAN_TERPILIH,
    payload: pelanggan
})
