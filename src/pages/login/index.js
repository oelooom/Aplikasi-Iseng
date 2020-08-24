import React from 'react';
import './styles.css';
import bgLogin from '../../vendor/image/Group83.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div id="wrapper" style={{ backgroundImage: `url(${bgLogin})` }}>
            <form className="form-container">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <Link to='/admin' type="submit" className="btn">Login</Link>
            </form>
        </div>
    )
}

export default Login;