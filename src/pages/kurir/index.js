import React, { useState } from 'react';
import './styles.css';
import SideMenu from '../../component/sidemenu';
import Header from '../../component/header/header';

const Kurir = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div id="wrapper-kurir">
            <Header handleClick={handleMenu} title='Data Kurir' />
            <main className="main">
                <h3 className="main-title">List Kurir</h3>
                <table className="table-data">
                    <tr className="table-head">
                        <th>ID Kurir</th>
                        <th>Nama Kurir</th>
                        <th>Username</th>
                        <th>Daerah Operasi</th>
                    </tr>
                    <tr className="table-body">
                        <td>DKI2-1</td>
                        <td>Mustofa</td>
                        <td>Ahmad</td>
                        <td>Jatinegara</td>
                    </tr>
                    <tr className="table-body">
                        <td>DKI2-1</td>
                        <td>Sobirin</td>
                        <td>John</td>
                        <td>Senen</td>
                    </tr>
                </table>
                <button className="btn" id='tambah'>Tambah <i className="fas fa-plus"></i></button>
            </main>

            <main className="edit">
                <h3 className="edit-title">Edit Data Kurir</h3>
                <table className="table-data">
                    <tr className="table-body">
                        <td>DK2-01</td>
                        <td>Latifah</td>
                        <td>Latifkun</td>
                        <td>Matraman</td>
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

export default Kurir;