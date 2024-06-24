import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Inicio from './componentes/inicio';
import CarritoVacio from './componentes/carrito/CarritoVacio';
import Carrito from './componentes/carrito/CarritoContents';
import DataProvider from './componentes/context/DataContext';

import InicioSecion from './componentes/inicioSecion';
import Registro from './componentes/registro';

import Sesion from './componentes/sesion';

import Categorias from './componentes/categorias';
import CategoriasUsuario from './componentes/categoriasUsuario';

import Autores from './componentes/autores';
import AutoresUsuario from './componentes/autoresUsuario';

const App = () => {
    return (
        <DataProvider>
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Inicio />} />
                    <Route exact path='/Sign-Up' element={<Registro />} />
                    <Route exact path='/Login' element={<InicioSecion />} />
                    <Route exact path='/Sesion' element={<Sesion />} />
                    <Route exact path='/Categorias' element={<Categorias />} />
                    <Route exact path='/CategoriasUsuario' element={<CategoriasUsuario />} />
                    <Route exact path='/Autores' element={<Autores />} />
                    <Route exact path='/AutoresUsuario' element={<AutoresUsuario />} />
                    <Route exact path='/carrito-Vacio' element={<CarritoVacio />} />
                    <Route exact path='/carrito' element={<Carrito />} />
                </Routes>
            </HashRouter>
        </DataProvider>
    );
}

export default App;
