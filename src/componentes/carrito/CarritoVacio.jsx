import React from 'react'
import {Link} from 'react-router-dom'

export default function CarritoVacio() {
  return (
    <div className="container-fluid  mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">              
            </div>
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img className="imgCarrito" src="carrito.jpg" alt='carrito-vacio'/>
                <h3><strong>Tu carrito esta vacio</strong></h3>
                <h4>Agrega algo que te haga feliz 😃</h4>
                <Link to="/Sesion" className="btn btn-danger cart-btn-transform m-3" data-abc="true">Continuar comprando</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}