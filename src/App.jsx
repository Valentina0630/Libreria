import React from 'react';
import {Routes, Route, HashRouter } from 'react-router-dom';
import Inicio from './componentes/inicio';

import InicioSecion from './componentes/inicioSecion';
import Registro from './componentes/registro';

import Sesion from './componentes/sesion';

import Categorias from './componentes/categorias';
import CategoriasUsuario from './componentes/categoriasUsuario';

import Autores from './componentes/autores';
import AutoresUsuario from './componentes/autoresUsuario';

const App = () => {
    return (
       <HashRouter>
        <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route exact path='/Sign-Up' element={<Registro/>}/>
            <Route exact path='/Login' element={<InicioSecion/>}/>
            <Route exact path='/Sesion' element={<Sesion/>}/>
            <Route exact path='/Categorias' element={<Categorias/>}/>
            <Route exact path='/CategoriasUsuario' element={<CategoriasUsuario/>}/>
            <Route exact path='/Autores' element={<Autores/>}/>
            <Route exact path='/AutoresUsuario' element={<AutoresUsuario/>}/>
        </Routes>
       </HashRouter>
    );
}

export default App;
