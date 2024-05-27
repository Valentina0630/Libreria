import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import CardList from './body/CardList';
import Footer from './footer/Footer';

const categorias=()=> {
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
        </div>
    );
}

export default categorias;