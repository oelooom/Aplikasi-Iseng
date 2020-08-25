import produkActionTypes from './produk.types';

export const tambahProduk = produk => ({
    type: produkActionTypes.TAMBAH_PRODUK,
    payload: produk
})

export const hapusProduk = produk => ({
    type: produkActionTypes.HAPUS_PRODUK,
    payload: produk
})
