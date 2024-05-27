import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import CardList2 from './body/CardList2';
import Footer from './footer/Footer';


const Autores = () => {
    const [autorSeleccionada, setautorSeleccionada] = useState(null);

    useEffect(() => {
        const autorGuardada = localStorage.getItem('autorSeleccionada');
        if (autorGuardada) {
            setautorSeleccionada(autorGuardada);
        }
    }, []);
    return (
        <div>
            <Header/>
            <CardList2 autorSeleccionada={autorSeleccionada} />
            <Footer/> 
        </div>
    );
}

export default Autores;
