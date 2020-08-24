import React from 'react';
import './styles.css';
import Icon from '../../vendor/image/Icon.png';
import Menu from '../../vendor/image/Menu.png';
import { withRouter } from 'react-router-dom';


const Header = ({ title, handleClick, history }) => {

    return (
        <header className="header">
            <nav className="navbar">
                <img src={Menu} alt="Menu" className="menu" onClick={handleClick} />
                <img src={Icon} alt="Icon" className="icon" onClick={() => history.push('/admin')} />
            </nav>
            <section className="welcome">
                <h1>{title}</h1>
            </section>
        </header>
    )
}

export default withRouter(Header);