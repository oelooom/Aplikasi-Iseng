import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';
import Produk from './pages/produk';
import Transaksi from './pages/transaksi';
import TransaksiAktif from './pages/transaksiaktif';
import Sales from './pages/sales';
import Kurir from './pages/kurir';

function App() {
  return (
    <Switch>
      <Route exact path='/kurir' component={Kurir} />
      <Route exact path='/sales' component={Sales} />
      <Route exact path='/transaksiaktif' component={TransaksiAktif} />
      <Route exact path='/transaksi' component={Transaksi} />
      <Route exact path='/produk' component={Produk} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/' component={Login} />
    </Switch>
  );
}

export default App;
