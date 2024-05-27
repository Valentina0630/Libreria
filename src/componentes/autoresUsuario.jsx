import React, { useState, useEffect } from 'react';
import Header from './header/Headerinicio';
import CardList2 from './body/CardList2';
import Footer from './footer/Footer';
import SesionExpired from './sesionExpired/sesionExpired';

const AutoresUsuario = () => {
    const [autorSeleccionado, setautorSeleccionado] = useState(null);

    useEffect(() => {
        const autorGuardado = localStorage.getItem('autorSeleccionado');
        if (autorGuardado) {
            setautorSeleccionado(autorGuardado);
        }
    }, []);
    return (
        <div>
            <Header/>
            <CardList2 autorSeleccionada={autorSeleccionado} />
            <Footer/>
            <SesionExpired/>
        </div>
    );
}

export default AutoresUsuario;
