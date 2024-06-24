import React, {useContext} from 'react';
import './card.css';
import TodayIcon from '@mui/icons-material/Today';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DataContext } from "../context/DataContext";

export default function Cards({ libro }) {
    const { setLibrosDelCarrito } = useContext(DataContext);

    function addToCart() {
        setLibrosDelCarrito((currentLibros) => {
            const isItemFound = currentLibros.find((item) => item.id === libro.id);

            if (isItemFound) {
                return currentLibros.map((item) => {
                    if (item.id === libro.id) {
                        return { ...item, cantidad: Number(item.cantidad) + 1, precioCarrito: item.precioCarrito + item.precio };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currentLibros, { ...libro, cantidad: 1, precioCarrito: libro.precio }];
            }
        });
    }

    return (
        <div className='card2'>
            <img src={libro.image} alt='logo' className='image' />
            <div className='informacion'>
                <div className='titulo'><h5>{libro.title}</h5></div>
                <div className='cuerpo'>
                    <p className='autor'>{libro.autor}</p>
                    <span className='fecha'>Fecha de Lanzamiento: <br /><TodayIcon />{libro.fechaLanzamiento}</span>
                </div>
                <div className='botones'>
                    <button type="button" className="btn btn-outline-danger anexar" onClick={addToCart}><AddCircleOutlineIcon /></button>
                    <button type="button" className="btn btn-danger C">COMPRAR AHORA</button>
                </div>
            </div>
        </div>
    );
}


