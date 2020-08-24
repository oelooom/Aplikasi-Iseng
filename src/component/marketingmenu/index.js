import React from 'react';
import './styles.css';
import { withRouter } from 'react-router-dom';

const MarketingMenu = ({ menuOpen, handleClick, history }) => {

    return (
        <section className={`left-menu ${menuOpen ? 'show' : 'hide'}`}>
            <ul className="list-menu">
                <li className="list-item" id='close' onClick={handleClick}>X</li>
                <li className="list-item" onClick={() => history.push('/tambahtransaksi')}>Tambah Transaksi</li>
                <li className="list-item" onClick={() => history.push('/pelanggan')}>Tambah Pelanggan</li>
                <li className="list-item" onClick={() => history.push('/transaksiaktifsales')}>Transaksi Aktif</li>
                <li className="list-item" onClick={() => history.push('/transaksisales')}>Daftar Transaksi</li>
                <li className="list-item" onClick={() => history.push('/')}>Logout</li>
            </ul>
        </section>
    )
}

export default withRouter(MarketingMenu);