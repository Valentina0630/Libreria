import React from 'react'
import Header from './header/Header';
import CardList from './body/CardList'
import Footer from './footer/Footer';

const Inicio = () => {
    return (
        <div>
            <Header/>
            <CardList/>
            <Footer/>
        </div>
    );
}

export default Inicio;
