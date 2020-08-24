import React, { useState } from 'react';
import './styles.css';
import SideMenu from '../../component/sidemenu';
import Header from '../../component/header/header';

const Produk = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div id="wrapper-produk">
            <Header handleClick={handleMenu} title='Data Produk' />
            <main className="main">
                <h3 className="main-title">Produk</h3>
                <table className="table-data">
                    <tr className="table-head">
                        <th>ID Produk</th>
                        <th>Nama Produk</th>
                        <th>Stock</th>
                        <th>Harga</th>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>Minyak</td>
                        <td>40</td>
                        <td>38.000</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>Minyak</td>
                        <td>40</td>
                        <td>38.000</td>
                    </tr>
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>Minyak</td>
                        <td>40</td>
                        <td>38.000</td>
                    </tr>
                </table>
                <button className="btn" id='tambah'>Tambah <i className="fas fa-plus"></i></button>
            </main>

            <main className="edit">
                <h3 className="edit-title">Edit Produk</h3>
                <table className="table-data">
                    <tr className="table-body">
                        <td>20200827-001</td>
                        <td>Minyak</td>
                        <td>30</td>
                        <td>56.000</td>
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

export default Produk;