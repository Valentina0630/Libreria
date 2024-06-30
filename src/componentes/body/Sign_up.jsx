import React, { useState, useRef } from 'react';

import './login.css';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import Colombia from './colombia';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
    let URL = import.meta.env.VITE_APP_ENVIRONMENT;
    console.log("URL====>", URL);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const [depIndex, setdepIndex] = useState(-1)
    const [munIndex, setmunIndex] = useState(-1)
    const [identificacionError, setIdentificacionError] = useState(false)
    const [nomError, setNomError] = useState(false)
    const [apellidoError, setApellidoError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailVacio, setEmailVacio] = useState(false)
    const [direccionError, setDireccionError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [fechaNacimientoError, setFechaNacimientoError] = useState(false)
    const [departamentoError, setDepartamentoError] = useState(false)
    const [municipioError, setMunicipioError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
    const [passComparacion, setPassComparacion] = useState(false)
    const [validationErrors, setValidationErrors] = useState([]);
    const form = useRef()
    function idError() {
        setIdentificacionError(false)
    }
    function nombreError() {
        setNomError(false)
    }
    function apelliError() {
        setApellidoError(false)
    }
    function errorEmail() {
        setEmailError(false)
        setEmailVacio(false)
    }
    function dirError() {
        setDireccionError(false)
    }
    function telError() {
        setTelefonoError(false)
    }
    function errorFechaNacimiento() {
        setFechaNacimientoError(false)
    }
    function depError() {
        setDepartamentoError(false)
    }
    function munError() {
        setMunicipioError(false)
    }
    function passError() {
        setPasswordError(false)
    }
    function passRepeat() {
        setPassComparacion(false)
        setPasswordErrorRepeat(false)
    }
    function handleChangeDepartamento(e) {
        const index = e.target.value;
        setdepIndex(index)
        const departamentoSeleccionado = Colombia[index].departamento;
        setValues(prevState => ({
            ...prevState,
            departamento: departamentoSeleccionado
        }));
    }
    function handleChangeMunicipio(e) {
        const index = e.target.value;
        setmunIndex(index)
        const municipioSeleccionado = Colombia[depIndex].ciudades[index];
        setValues(prevState => ({
            ...prevState,
            municipio: municipioSeleccionado
        }));
    }
    const [values, setValues] = useState({
        identificacion: "",
        nombres: "",
        apellidos: "",
        email: "",
        direccion: "",
        telefono: "",
        fechaNacimiento: "",
        departamento: "",
        municipio: "",
        password: "",
        passRepeat: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/
        let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


        if (values.identificacion.length < 5 || values.identificacion.length > 10 || values.identificacion.length === 0) {
            setIdentificacionError(true)
            return

        }else if (values.nombres.length < 3 || values.nombres.length === 0) {
            setNomError(true)
            return
        }else if (values.apellidos.length < 3 || values.apellidos.length === 0) {
            setApellidoError(true)
            return
        }else if (values.email.length === 0) {
            setEmailVacio(true)
            return
        }else if (!validEmail.test(values.email)) {
            setEmailError(true)
            return
        }else if (values.direccion.length < 15) {
            setDireccionError(true)
            return
        }else if (values.telefono.length < 10 || values.telefono.length > 10) {
            setTelefonoError(true)
            return
        }else if (values.fechaNacimiento === "") {
            setFechaNacimientoError(true)
            return
        }else if (departamento.values === "-1") {
            setDepartamentoError(true)
            return
        }else if (municipioError.values === "-1") {
            setMunicipioError(true)
            return
        }else if (!validPassword.test(values.password)) {
            setPasswordError(true)
            return
        }else if (values.passRepeat.length === 0) {
            setPasswordErrorRepeat(true)
            return
        }else if (values.password !== values.passRepeat) {
            setPassComparacion(true)
            return
        }

        // await fetch('http://localhost:3001/Sign-Up', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json", "Accept": 'application/json' },
        //     body: JSON.stringify(values)
        // })
        console.log("URL====> ", URL)
        fetch(`${URL}/Sign-Up`,{
            method: 'POST',
            headers: { "Content-Type": "application/json", "Accept": 'application/json' },
            body: JSON.stringify(values)
        })
            .then(response => {
                // console.log(response.status)
                if (response.status === 200) {
                    Swal.fire({
                        title: "Usuario creado con éxito",
                        icon: "success"
                    })
                    form.current.reset()
                    window.location.hash = '/login'
                }
                if (response.status === 400) {
                    Swal.fire({
                        title: "No fue posible crear el usuario porque ya existe el correo ingresado " + values.email,
                        icon: "error"
                    })
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "No fue posible finalizar el proceso de registro por un error interno del servidor",
                    icon: "error"
                })
            })
    }

    return (
        <div>

            <div className="bloque">
                <div className="registro">
                    <h1>SIGN UP</h1>
                    <form onSubmit={handleSubmit} ref={form}>
                        <div className="mb-3 caja">
                            <label htmlFor="identificacion" className="form-label">Identificación</label>
                            <input type="number" className="form-control" name="identificacion" id="identificacion" aria-describedby="emailHelp" placeholder='Debe estar entre 5 y 10 dígitos' onChange={handleChange} onClick={idError} />
                            {identificacionError ? <p className='text-danger'>La identificación debe estar entre 5 y 10 números</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="nombres" className="form-label">Nombres</label>
                            <input type="text" className="form-control" name="nombres" id="nombres" aria-describedby="nameHelp" placeholder='Debe ser mínimo 3 caracteres' onChange={handleChange} onClick={nombreError} />
                            {nomError ? <p className='text-danger'>El nombre debe contener mínimo 3 caracteres</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="apellidos" className="form-label">Apellidos</label>
                            <input type="text" className="form-control" name="apellidos" id="apellidos" aria-describedby="apellidosHelp" placeholder='Debe ser de mínimo tres caracteres' onChange={handleChange} onClick={apelliError} />
                            {apellidoError ? <p className='text-danger'>El apellido debe contener mínimo 3 caracteres</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder='alguien@gmail.com' onChange={handleChange} onClick={errorEmail} />
                            {emailError ? <p className='text-danger'>El email debe tener la estructura de una dirección de correo electrónico. Verbigracia: alguien@gmail.com</p> : ""}
                            {emailVacio ? <p className='text-danger'>Debe introducir una dirección de correo electrónico.</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="direccion" id="direccion" aria-describedby="emailHelp" placeholder='Debe ser de mínimo quince caracteres' onChange={handleChange} onClick={dirError} />
                            {direccionError ? <p className='text-danger'>La dirección debe contener mínimo 15 caracteres</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" name="telefono" id="telefono" aria-describedby="emailHelp" placeholder='Debe ser de diez números' onChange={handleChange} onClick={telError} />
                            {telefonoError ? <p className='text-danger'>El teléfono debe ser de 10 números</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="fechaNacimiento" className="form-label">Fecha Nacimiento</label>
                            <input type="date" className="form-control" name="fechaNacimiento" id="fechaNacimiento" aria-describedby="emailHelp" placeholder='Debe ser de diez números' onChange={handleChange} onClick={errorFechaNacimiento} />
                            {fechaNacimientoError ? <p className='text-danger'>Debe introducir una fecha de nacimiento</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="departamento" className="form-label">Departamento</label>
                            <select defaultValue="0" className="form-select" aria-label="Default select example" name='departamento' id='departamento' onChange={handleChangeDepartamento} onClick={depError}>
                                <option value="0">Abrir el menú</option>
                                {Colombia.map((item, e) => (
                                    <option key={e} value={e}>{item.departamento}</option>
                                ))}
                            </select>
                            {departamentoError ? <p className='text-danger'>Debe introducir una opción</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="municipio" className="form-label">Municipio</label>
                            <select defaultValue="" className="form-select" aria-label="Default select example" name='municipio' id='municipio' onChange={handleChangeMunicipio} onClick={munError}>
                                <option value="0" >Abrir el menú</option>
                                {depIndex > -1 && Colombia[depIndex].ciudades.map((item, e) => (
                                    <option key={e} value={e}>{item}</option>
                                ))}
                            </select>
                            {municipioError ? <p className='text-danger'>Debe introducir una opción</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <div className="input-group ">
                                <input type={showPassword ? 'text' : 'password'} className='form-control ' name="password" id="password" onChange={handleChange} onClick={passError} />
                                <span class="input-group-text" onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </span>
                            </div>
                            {passwordError ? <p className='text-danger'>La contraseña no cumple con los requisitos mínimos solicitados(Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial).</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="passRepeat" className="form-label">Confirmar contraseña</label>
                            <div className="input-group ">
                                <input type={showPassword ? 'text' : 'password'} className="form-control" name="passRepeat" id="passRepeat" onChange={handleChange} onClick={passRepeat} />
                                <span class="input-group-text" onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </span>
                            </div>
                            {passComparacion ? <p className='text-danger'>Las contraseñas ingresadas no coinciden</p> : ""}
                            {passwordErrorRepeat ? <p className='text-danger'>Este campo no puede quedar vacío.</p> : ""}
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" >
                                Acepta todos nuestros <a href="#!" className="fw-bold text-danger"><u>Terminos y condiciones</u></a>
                            </label>
                        </div>
                        <div className="cajabtn">
                            <button type="submit" className="btn btn-danger">Registrar</button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">Tienes una cuenta? <Link to='/login'><a href="#!" className="fw-bold text-danger"><u>Login here</u></a></Link></p>
                    </form>
                </div>
            </div >

        </div >
    );
}

export default SignUp;
