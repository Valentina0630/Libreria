// import {dataContext} trae el información del datacontext .....

import { useContext } from "react";
import { DataContext } from "./context/DataContext";

export default function Cards (props){
    const {setlibrosdelcarrito} = useContext(DataContext) //esto sve para acceder a los datos desde donde sea, esto es posible por el dataContext
    console.log("dentro de la funcion");
    

    function addToCart() {
        setlibrosdelcarrito((currentLibros) =>{
            const isItemFound = currentLibros.find((item) => item.id === props.products.id);
            console.log(currentLibros);
            

            if (isItemFound) {
                return currentLibros.map((item) => {
                    if (item.id === props.products.id) {
                        return{...item, cantidad: Number(item.cantidad) + 1, precioCarrito: item.precioCarrito + item.precio}
                        // si el elemento ya existe, a la cantidad le suma 1 y le suma el precio del elemento
                    }
                    else{
                        return item
                    }
                })
            }
            else{
                return[...currentLibros, props.products]

                // si el elemento no esta dentro del carrito, simplemente lo agrega (esto es lo que hace este else).
            }
        })
    }

}