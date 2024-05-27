import React from 'react'
import './card.css'
import TodayIcon from '@mui/icons-material/Today';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Cards({ libro }) {
    return (
        <div className='card2'>
            <img src={libro.image} alt='logo' className='image'/>
            <div className='informacion'>
                <div className='titulo'><h5>{libro.title}</h5></div>
                <div className='cuerpo'>
                    <p className='autor'>{libro.autor}</p>
                    <span className='fecha'>Fecha de Lanzamiento: <br/><TodayIcon/>{libro.fechaLanzamiento}</span>
                </div>
                <div className='botones'>
                    <button type="button" className="btn btn-info"><AddCircleOutlineIcon/></button>
                    <button type="button" className="btn btn-info">COMPRAR AHORA</button>
                </div>
            </div>
        </div>
    );
}

