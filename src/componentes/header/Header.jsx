import React from 'react';
import './header.css';
import Logo from '/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HelpIcon from '@mui/icons-material/Help';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Header = () => {
    const handleClickCategoria = (categoria) => {
        window.location.reload(); 
        localStorage.setItem('categoriaSeleccionada', categoria); 
    };
    const handleClickAutores = (autor) => {
        window.location.reload(); 
        localStorage.setItem('autorSeleccionada', autor); 
    };
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={Logo} className='logo' alt='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to='/'>
                                <li className="nav-item">
                                    <a className="nav-link"><HomeIcon className='icono' />Home</a>
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <LibraryBooksIcon className='icono' />Categoria
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Ficción")}>Ficción</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Ciencia Ficción")}>Ciencia Ficción</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Drama")}>Drama</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Romance")}>Romance</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("No Ficción")}>No Ficción</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Clásicos")}>Clásicos</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Misterio")}>Misterio</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Fantasía")}>Fantasía</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Terror")}>Terror</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Fábula")}>Fábula</button></li></Link>
                                    <Link to='/Categorias'><li><button className="dropdown-item" onClick={() => handleClickCategoria("Histórica")}>Histórica</button></li></Link>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false"><PersonIcon className='icono' />Autores</a>
                                <ul className="dropdown-menu">
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Alice Kellen")}>Alice Kellen</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Carl Sagan")}>Carl Sagan</a></li></Link> 
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Gabriel García Márquez")}>Gabriel García M.</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Mark Oliver Everett")}>Mark Oliver Everett</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Won-pyung Sohn")}>Won-pyung Sohn</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Natanael Méndez Matos")}>Natanael Méndez M.</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Victor Hugo")}>Victor Hugo</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Don Miguel Ruiz")}>Don Miguel Ruiz</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Antonio Gude")}>Antonio Gude</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Sigman Mariano")}>Sigman Mariano</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Mario Mendoza")}>Mario Mendoza</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Rick Riordan")}>Rick Riordan</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Stephen King")}>Stephen King</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("J.K. Rowling")}>J.K. Rowling</a></li></Link>
                                    <Link to='/Autores'><li><a className="dropdown-item" onClick={()=>handleClickAutores("Isabel Allende")}>Isabel Allende</a></li></Link>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><HelpIcon className='icono' />Q&A</a>
                            </li>

                        </ul>
                        <span>  </span>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav2 me-auto mb-2 mb-lg-0 ">
                                <Link to='/Sign-Up'>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-danger"><AssignmentIndIcon className='icono' />Sign Up</a>
                                    </li>
                                </Link>
                                <Link to='/Login'>
                                    <li className="nav-item">
                                        <a className="btn btn-danger boton"><LoginIcon className='icono' />Login</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
