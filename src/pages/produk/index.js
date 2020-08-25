import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from '../../component/header/header';
import Modal from '../../component/modal';
import MarketingMenu from '../../component/marketingmenu';
import { tambahProduk, hapusProduk } from '../../redux/produk/produk.action';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase';

const Produk = ({ tambahProduk, hapusProduk, produk }) => {


    useEffect(() => {
        async function getData() {
            const userRef = firestore.collection('produk');

            userRef.onSnapshot(async snap => {
                const changes = snap.docChanges();
                console.log(changes);
                changes.forEach(change => {
                    console.log(change.doc.id)
                    if (change.type === 'added') {
                        tambahProduk({ id: change.doc.id, ...change.doc.data() })
                    }
                    else if (change.type === 'modified') {
                        tambahProduk({ id: change.doc.id, ...change.doc.data() })
                    }
                    else if (change.type === 'removed') {
                        hapusProduk({ id: change.doc.id, ...change.doc.data() });

                    }
                })
            })
        }

        getData();
    }, [tambahProduk, hapusProduk])

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
        stock: '',
        harga: ''
    })

    const [terpilih, setTerpilih] = useState({
        id: '',
        nama: '',
        stock: '',
        harga: ''
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
            const produknRef = firestore.collection('produk');
            await produknRef.add({
                nama: form.nama,
                stock: form.stock,
                harga: form.harga
            })

            setModal(false);

            setForm({
                nama: '',
                stock: '',
                harga: ''
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
            const produkRef = firestore.collection('produk').doc(terpilih.id);
            await produkRef.update({
                nama: terpilih.nama,
                stock: terpilih.stock,
                harga: terpilih.harga
            })

            setTerpilih({
                nama: '',
                stock: '',
                harga: ''
            })
        } catch (e) {
            alert(e.message)
        }
    }

    const handleHapus = async (e) => {
        e.preventDefault();
        try {
            const produkRef = firestore.collection('produk').doc(terpilih.id);
            await produkRef.delete();

            setTerpilih({
                nama: '',
                stock: '',
                harga: ''
            })
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <div id="wrapper-produk">
            <Header handleClick={handleMenu} title='Data Produk' />
            <main className="main">
                <h3 className="main-title">List Produk</h3>
                <table className="table-data">
                    <tr className="table-head">
                        <th>ID Produk</th>
                        <th>Nama Produk</th>
                        <th>Stock</th>
                        <th>Harga</th>
                    </tr>
                    {produk.map((data, index) =>
                        <tr className="table-body" onClick={() => handleEdit(data)} key={index}>
                            <td>PDK-0{index + 1}</td>
                            <td>{data.nama}</td>
                            <td>{data.stock}</td>
                            <td>{data.harga}</td>
                        </tr>
                    )}

                </table>
                <button className="btn" id='tambah' onClick={handleModal}>Tambah <i className="fas fa-plus"></i></button>
            </main>

            <main className="edit">
                <h3 className="edit-title">Edit Data Produk</h3>
                <table className="table-data">
                    <tr className="table-body">
                        <td><input type='text' className='input-edit' name='nama' value={terpilih.nama} onChange={handleChangeEdit} /></td>
                        <td><input type='text' className='input-edit' name='stock' value={terpilih.stock} onChange={handleChangeEdit} /></td>
                        <td><input type='text' className='input-edit' name='harga' value={terpilih.harga} onChange={handleChangeEdit} /></td>
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
                    <h2 className='modal-title'>Tambah Produk</h2>
                    <input
                        placeholder='Nama Produk'
                        name='nama'
                        className='input-item'
                        value={form.nama}
                        onChange={handleChange}
                    />

                    <input
                        placeholder='Stock Produk'
                        name='stock'
                        className='input-item'
                        value={form.stock}
                        onChange={handleChange}
                    />

                    <input
                        placeholder='Harga Produk'
                        name='harga'
                        className='input-item'
                        value={form.harga}
                        onChange={handleChange}
                    />
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
    produk: state.produk.produk,
})

const mapDispatchToProps = dispatch => ({
    tambahProduk: produk => dispatch(tambahProduk(produk)),
    hapusProduk: produk => dispatch(hapusProduk(produk))
})

export default connect(mapStateToProps, mapDispatchToProps)(Produk);