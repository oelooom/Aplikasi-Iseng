import React, { useState } from 'react';
import './styles.css';
import Icon from '../../vendor/image/Icon.png';
import Menu from '../../vendor/image/Menu.png';
import Showcase from '../../vendor/image/showcase.png';
import SideMenu from '../../component/sidemenu';

const Admin = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div id="wrapper-admin">
            <header className="header">
                <nav className="navbar">
                    <img src={Menu} alt="Menu" className="menu" onClick={handleClick} />
                    <img src={Icon} alt="Icon" className="icon" />
                </nav>
                <section className="welcome">
                    <h1>Selamat Datang, Admin!</h1>
                </section>
            </header>
            <section className="showcase" style={{ backgroundImage: `url(${Showcase})` }}></section>
            <SideMenu menuOpen={menuOpen} handleClick={handleClick} />
        </div>
    )
}

export default Admin;