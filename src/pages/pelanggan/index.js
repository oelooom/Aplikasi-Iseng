import React, { useState, useEffect } from 'react';
import './styles.css';
import MarketingHeader from '../../component/marketingheader/header';
import Modal from '../../component/modal';
import MarketingMenu from '../../component/marketingmenu';
import { tambahPelanggan, hapusPelanggan } from '../../redux/pelanggan/pelanggan.action';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase';

const Pelanggan = ({ tambahPelanggan, hapusPelanggan, pelanggan }) => {


    useEffect(() => {
        async function getData() {
            const userRef = firestore.collection('pelanggan');

            userRef.onSnapshot(async snap => {
                const changes = snap.docChanges();
                console.log(changes);
                changes.forEach(change => {
                    console.log(change.doc.id)
                    if (change.type === 'added') {
                        tambahPelanggan({ id: change.doc.id, ...change.doc.data() })
                    }
                    else if (change.type === 'modified') {
                        tambahPelanggan({ id: change.doc.id, ...change.doc.data() })
                    }
                    else if (change.type === 'removed') {
                        hapusPelanggan({ id: change.doc.id, ...change.doc.data() });

                    }
                })
            })
        }

        getData();
    }, [tambahPelanggan, hapusPelanggan])

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

    const [terpilih, setTerpilih] = useState({
        id: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const pelangganRef = firestore.collection('pelanggan');
            await pelangganRef.add({
                nama: form.nama,
                noHp: form.noHp,
                alamat: form.alamat
            })

            setModal(false);

            setForm({
                nama: '',
                noHp: '',
                alamat: ''
            })
        } catch (e) {
            alert(e.message)
        }
    }

    const handleEdit = (data) => {
        setTerpilih(data)
    }

    const handleChangeEdit = (e) => {
        setTerpilih({
            ...terpilih,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const pelangganRef = firestore.collection('pelanggan').doc(terpilih.id);
            await pelangganRef.update({
                nama: terpilih.nama,
                noHp: terpilih.noHp,
                alamat: terpilih.alamat
            })

            setTerpilih({
                nama: '',
                noHp: '',
                alamat: ''
            })
        } catch (e) {
            alert(e.message)
        }
    }

    const handleHapus = async (e) => {
        e.preventDefault();
        try {
            const pelangganRef = firestore.collection('pelanggan').doc(terpilih.id);
            await pelangganRef.delete();

            setTerpilih({
                nama: '',
                noHp: '',
                alamat: ''
            })
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <div id="wrapper-sales">
            <MarketingHeader handleClick={handleMenu} title='Data Pelanggan' />
            <main className="main">
                <h3 className="main-title">List Pelanggan</h3>
                <table className="table-data">
                    <tr className="table-head">
                        <th>ID Pelanggan</th>
                        <th>Nama Pelanggan</th>
                        <th>Handphone</th>
                        <th>Alamat</th>
                    </tr>
                    {pelanggan.map((data, index) =>
                        <tr className="table-body" onClick={() => handleEdit(data)} key={index}>
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
                <h3 className="edit-title">Edit Data Pelanggan</h3>
                <table className="table-data">
                    <tr className="table-body">
                        <td><input type='text' className='input-edit' name='nama' value={terpilih.nama} onChange={handleChangeEdit} /></td>
                        <td><input type='text' className='input-edit' name='noHp' value={terpilih.noHp} onChange={handleChangeEdit} /></td>
                        <td><input type='text' className='input-edit' name='alamat' value={terpilih.alamat} onChange={handleChangeEdit} /></td>
                    </tr>
                </table>
                <button className="btn" id='tambah' onClick={handleUpdate}>Update</button>
                <button className="btn" id='tambah' onClick={handleHapus}>Hapus</button>
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

const mapStateToProps = state => ({
    pelanggan: state.pelanggan.pelanggan,
})

const mapDispatchToProps = dispatch => ({
    tambahPelanggan: pelanggan => dispatch(tambahPelanggan(pelanggan)),
    hapusPelanggan: pelanggan => dispatch(hapusPelanggan(pelanggan))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pelanggan);