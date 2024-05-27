import React,{ useState } from 'react'
import Cards from './Cards'
import data from './data'
import banner1 from'./banner1.png'


function CardList({ autorSeleccionada }) {
   const [paginaActual, setPaginaActual] = useState(1);
   const librosPorPagina = 16;
   const indicePrimerLibro = (paginaActual - 1) * librosPorPagina;

   let librosFiltrados = data;
   if (autorSeleccionada) {
       librosFiltrados = data.filter(libro => libro.autor === autorSeleccionada);
   }

   const librosPaginaActual = librosFiltrados.slice(indicePrimerLibro, indicePrimerLibro + librosPorPagina);

   const cambiarPagina = (nuevaPagina) => {
       setPaginaActual(nuevaPagina);
   };

    return (
        <div className='body'>
            <div id="carouselExampleIndicators" className="carousel slide"  data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner1} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='divCards'>
                {librosPaginaActual.map(libro => (
                    <Cards key={libro.id} libro={libro} />
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => cambiarPagina(paginaActual - 1)}>Prev</button>
                    </li>
                    {Array.from({ length: Math.ceil(data.length / librosPorPagina) }, (_, index) => (
                        <li key={index} className={`page-item ${paginaActual === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => cambiarPagina(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${paginaActual === Math.ceil(data.length / librosPorPagina) ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => cambiarPagina(paginaActual + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CardList