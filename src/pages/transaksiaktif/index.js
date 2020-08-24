import React, { useState } from 'react';
import './styles.css';
import SideMenu from '../../component/sidemenu';
import Header from '../../component/header/header';

const TransaksiAktif = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div id="wrapper-produk">
            <Header handleClick={handleMenu} title='Data Transaksi Aktif' />
            <main className="main">
                <h3 className="main-title">List Transaksi Aktif</h3>
                <table className="table-data">
                    <tr className="table-head">
                        <th>ID Transaksi</th>
                        <th>ID Pelanggan</th>
                        <th>ID Kurir</th>
                        <th>Status</th>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>Packing</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>Delivery</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>Packing</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>Packing</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>Delivery</td>
                    </tr>
                </table>
                <button className="btn" id='tambah'>Tambah <i className="fas fa-plus"></i></button>
            </main>

            <main className="edit">
                <h3 className="edit-title">Edit Produk</h3>
                <table className="table-data">
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>
                            <select name="status" id="status">
                                <option value="test">Packing</option>
                                <option value="test">Delivery</option>
                                <option value="test">Completed</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <button className="btn" id='tambah'>Update</button>
            </main>

            <main className="action">
                <button className="btn" id='tambah'>Kembali <i className="fas fa-arrow-left"></i></button>
                <button className="btn" id='tambah'>Cetak <i className="fas fa-print"></i></button>
            </main>

            <SideMenu menuOpen={menuOpen} handleClick={handleMenu} />
        </div>
    )
}

export default TransaksiAktif;