import React, { useState, useEffect } from 'react';
import './styles.css';
import SideMenu from '../../component/sidemenu';
import Header from '../../component/header/header';
import Modal from '../../component/modal';
import MarketingMenu from '../../component/marketingmenu';

const Pelanggan = () => {

    const [pelanggan, setPelanggan] = useState([]);

    useEffect(() => {
        let pelanggan;
        if (localStorage.getItem('pelanggan') === null) {
            pelanggan = [];
        } else {
            pelanggan = JSON.parse(localStorage.getItem('pelanggan'));
        }

        setPelanggan(pelanggan);

    }, [])

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    const [form, setForm] = useState({
        nama: '',
        noHp: '',
        alamat: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const items = [...pelanggan];
        setPelanggan([...items, form])
        setForm({
            nama: '',
            noHp: '',
            alamat: ''
        });

        let pelangganData;
        if (localStorage.getItem('pelanggan') === null) {
            pelangganData = [];
        } else {
            pelangganData = JSON.parse(localStorage.getItem('pelanggan'));
        }

        pelangganData.push(form);
        localStorage.setItem('pelanggan', JSON.stringify(pelangganData));

        setModal(false);
    }

    return (
        <div id="wrapper-sales">
            <Header handleClick={handleMenu} title='Data Pelanggan' />
            <main className="main">
                <h3 className="main-title">List Sales</h3>
                <table className="table-data">
                    <tr className="table-head">
                        <th>ID Pelangan</th>
                        <th>Nama Pelanggan</th>
                        <th>Handphone</th>
                        <th>Alamat</th>
                    </tr>
                    {pelanggan.map((data, index) =>
                        <tr className="table-body">
                            <td>CUS-0{index + 1}</td>
                            <td>{data.nama}</td>
                            <td>{data.noHp}</td>
                            <td>{data.alamat}</td>
                        </tr>
                    )}

                </table>
                <button className="btn" id='tambah' onClick={handleModal}>Tambah <i className="fas fa-plus"></i></button>
            </main>

            <main className="edit">
                <h3 className="edit-title">Edit Data Sales</h3>
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

            <MarketingMenu menuOpen={menuOpen} handleClick={handleMenu} />

            <Modal show={modal}>
                <form className='modal' onSubmit={handleSubmit}>
                    <h2 className='modal-title'>Tambah Pelanggan</h2>
                    <input
                        placeholder='Nama Pelanggan'
                        name='nama'
                        className='input-item'
                        value={form.nama}
                        onChange={handleChange}
                    />

                    <input
                        placeholder='No Np'
                        name='noHp'
                        className='input-item'
                        value={form.noHp}
                        onChange={handleChange}
                    />

                    <textarea
                        placeholder='Alamat'
                        name='alamat'
                        rows='3'
                        className='input-item'
                        onChange={handleChange}
                    >
                        {form.alamat}
                    </textarea>
                    <div className='button-group'>
                        <button type='button' className='btn' onClick={handleModal}><i className='fas fa-ban' /> Batal</button>
                        <button type='submit' className='btn'><i className='fas fa-save' /> Simpan</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Pelanggan;