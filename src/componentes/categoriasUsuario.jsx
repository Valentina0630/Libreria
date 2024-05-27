import React, { useState, useEffect } from 'react';
import Header from './header/Headerinicio';
import CardList from './body/CardList';
import Footer from './footer/Footer';
import SesionExpired from './sesionExpired/sesionExpired';

const categoriasUsuario=()=> {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    useEffect(() => {
        const categoriaGuardada = localStorage.getItem('categoriaSeleccionada');
        if (categoriaGuardada) {
            setCategoriaSeleccionada(categoriaGuardada);
        }
    }, []);
    return (
        <div>
            <Header/>
            <CardList categoriaSeleccionada={categoriaSeleccionada} />
            <Footer/>
            <SesionExpired/>
        </div>
    );
}

export default categoriasUsuario;