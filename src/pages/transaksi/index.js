import React, { useState } from 'react';
import './styles.css';
import SideMenu from '../../component/sidemenu';
import Header from '../../component/header/header';

const Transaksi = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div id="wrapper-produk">
            <Header handleClick={handleMenu} title='Data Transaksi' />
            <main className="main">
                <h3 className="main-title">List Transaksi</h3>
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
                        <td>Pakcing</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>Completed</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>PDKI3-01</td>
                        <td>K3-01</td>
                        <td>Completed</td>
                    </tr>
                </table>
                <button className="btn" id='tambah'>Tambah <i className="fas fa-plus"></i></button>
            </main>

            <main className="action">
                <button className="btn" id='tambah'>Kembali <i className="fas fa-arrow-left"></i></button>
                <button className="btn" id='tambah'>Cetak <i className="fas fa-print"></i></button>
            </main>

            <SideMenu menuOpen={menuOpen} handleClick={handleMenu} />
        </div>
    )
}

export default Transaksi;