import React, { useState } from 'react';
import './styles.css';
import Icon from '../../vendor/image/Icon.png';
import Menu from '../../vendor/image/Menu.png';
import Showcase from '../../vendor/image/showcase.png';
import MarketingMenu from '../../component/marketingmenu';

const Home = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div id="wrapper-home">
            <header className="header">
                <nav className="navbar">
                    <img src={Menu} alt="Menu" className="menu" onClick={handleClick} />
                    <img src={Icon} alt="Icon" className="icon" />
                </nav>
                <section className="welcome">
                    <h1>Selamat Datang, Kiki!</h1>
                </section>
            </header>
            <section className="showcase" style={{ backgroundImage: `url(${Showcase})` }}></section>
            <main className="edit">
                <h4 className="edit-title">25 Agustus 2020</h4>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Username</td>
                        <td>Sales-1236</td>
                    </tr>
                </table>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Nama</td>
                        <td>Kiki Santika Putri Mustofa</td>
                    </tr>
                </table>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Jabatan</td>
                        <td>Sales Executive</td>
                    </tr>
                </table>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Status Karyawan</td>
                        <td>Tetap</td>
                    </tr>
                </table>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Daerah Operasi</td>
                        <td>Jakarta Timur</td>
                    </tr>
                </table>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Transaksi Aktif</td>
                        <td>15</td>
                    </tr>
                </table>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Total Transaksi</td>
                        <td>345</td>
                    </tr>
                </table>
                <table className="table-data">
                    <tr className="table-body">
                        <td>Pencapaian Target</td>
                        <td>80%</td>
                    </tr>
                </table>
                <button className="btn" id='tambah'>IDR. 200.000.000 / 250.000.000</button>
            </main>
            <MarketingMenu menuOpen={menuOpen} handleClick={handleClick} />
        </div>
    )
}

export default Home;