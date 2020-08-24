import React from 'react';
import './styles.css';
import { withRouter } from 'react-router-dom';

const SideMenu = ({ menuOpen, handleClick, history }) => {

    return (
        <section className={`left-menu ${menuOpen ? 'show' : 'hide'}`}>
            <ul className="list-menu">
                <li className="list-item" id='close' onClick={handleClick}>X</li>
                <li className="list-item" onClick={() => history.push('/produk')}>Data Produk</li>
                <li className="list-item" onClick={() => history.push('/sales')}>Data Sales</li>
                <li className="list-item" onClick={() => history.push('/Kurir')}>Data Kurir</li>
                <li className="list-item" onClick={() => history.push('/transaksiaktif')}>Transaksi Aktif</li>
                <li className="list-item" onClick={() => history.push('/transaksi')}>Daftar Transaksi</li>
                <li className="list-item" onClick={() => history.push('/')}>Logout</li>
            </ul>
        </section>
    )
}

export default withRouter(SideMenu);