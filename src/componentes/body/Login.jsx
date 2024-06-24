import React, { useState} from 'react';
import './login.css';
import Swal from 'sweetalert2'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Cookies from 'universal-cookie';
import OAuthGoogle from '../oAuthGoogle/oAuthGoogle';
import FacebookLogin from '../metaFacebook/FacebookLogin';

const Login = () => {
    const cookie = new Cookies();
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    const handleClickEmail = () => {
        setErrorEmail(false);
    }

    const handleClickPassword = (e) => {
        setErrorPassword(false);
    }

    const iniciarSesion = (e) => {
        e.preventDefault()
        if (values.password.length === 0 && values.email.length === 0) {
            setErrorEmail(true)
            setErrorPassword(true)
            return
        }
        if (values.password.length === 0) {
            setErrorPassword(true)
            return
        }
        if (values.email.length === 0) {
            setErrorEmail(true)
            return
        }

        fetch("http://localhost:3001/Login", {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Accept": 'application/json' },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(res => {
                if (res.title == "error") {
                    Swal.fire({
                        title: "Las credenciales ingresadas no son correctas",
                        icon: "error"
                    })
                    window.location.hash = '/Login'
                    return
                }
                else {
                    cookie.set('name', res.nombres, {
                        secure: true, sameSite: 'None', path: '/'
                    })
                    cookie.set('lastname', res.apellidos, {
                        secure: true, sameSite: 'None', path: '/'
                    })
                    cookie.set('email', res.email, {
                        secure: true, sameSite: 'None', path: '/'
                    })
                    window.location.hash = '/Sesion'
                }
            })
            .catch(() => Swal.fire({
                title: "No se puede iniciar sesión por un problema en el servidor",
                icon: "error"
            }),
                window.location.hash = '/Login')
    }
    return (
        <div>
            <div className="bloque">
                <div className="contenido">
                    <h1>LOGIN</h1>
                    <form onSubmit={iniciarSesion}>
                        <div className="mb-3 caja">
                            <label for="email" className="form-label">Correo Electrónico o Usuario</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={handleChange} onClick={handleClickEmail} />
                            {errorEmail ? <p className='text-danger'>el correo no esta de forma correcta</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <div className="input-group ">
                                <input type={showPassword ? 'text' : 'password'} name='password' id='password' className='form-control' onChange={handleChange} onClick={handleClickPassword} />
                                <span class="input-group-text" onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </span>
                                {errorPassword ? <p className='text-danger'>Contraseña no valida</p> : ""}
                            </div>
                        </div>
                        <div className="boxInt">
                            <div className="d-flex align-items-center gap-1">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" >
                                    Remember me.
                                </label>
                            </div>
                            <div className="forget">
                                <p className="text-center text-muted mt-3"><a href='#' className="fw-bold text-danger">Forgot your password?</a></p>
                            </div>
                        </div>
                        <div className="cajabtn">
                            <button type="submit" className="btn btn-danger btnL">Login</button>
                        </div>
                        <p className="text-center text-muted mt-3 mb-0">No tienes una cuenta? <Link to='/Sign-Up'><a href="#!" className="fw-bold text-danger"><u>Registrate</u></a></Link></p>
                        <div className='p-3'>
                            <div className='border-bottom text-center' id='linea'>
                                <span className='bg-white px-3'>or</span>
                            </div>
                        </div>
                        <div className='caja-botones'>
                            <OAuthGoogle className=" btn-google"/>
                            <FacebookLogin className=" btn-facebook"/>
                            {/*npm i reactjs-social-login react-login-buttons
                            npm install --save reactjs-social-login*/}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
