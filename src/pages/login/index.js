import React from 'react';
import './styles.css';
import bgLogin from '../../vendor/image/Group83.png';

const Login = ({ history }) => {

    const [form, setForm] = React.useState({
        username: '',
        password: ''
    })

    const [error, setError] = React.useState('');

    const hanldeChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.username === '' && form.password === '') {
            setError('Username dan Password Tidak Boleh Kosong');
        } else if (form.username === 'admin' && form.password === 'admin') {
            history.push('/admin');
        } else if (form.username === 'sales' && form.password === 'sales') {
            history.push('/marketing');
        } else {
            setError('Username atau Password salah');
        }
    }

    return (
        <div id="wrapper" style={{ backgroundImage: `url(${bgLogin})` }}>
            <p>{error}</p>
            <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={hanldeChange} />
                <input type="password" name="password" placeholder="Password" onChange={hanldeChange} />
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login;