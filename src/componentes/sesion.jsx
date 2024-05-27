import React from 'react'
import CardList from './body/CardList'
import Footer from '../componentes/footer/Footer';
import Header from '../componentes/header/Headerinicio';
import SesionExpired from './sesionExpired/sesionExpired';

const Registro = () => {
    return (
        <div>
            <Header />
            <CardList/>
            <Footer />
            <SesionExpired/>
        </div>
    );
}

export default Registro;