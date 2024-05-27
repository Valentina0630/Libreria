import React from 'react';
import Header from '../componentes/header/Header';
import Footer from '../componentes/footer/Footer';
import Login from './body/Login';

const InicioSecion = () => {
    return (
        <div>
            <Header/>
            <Login/>
            <Footer/>
        </div>
    );
}

export default InicioSecion;
