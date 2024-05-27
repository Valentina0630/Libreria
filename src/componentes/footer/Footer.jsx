import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='Wrapper'>
                <div className="footer-box">
                    <div className="tipus">CATEGORIA</div>
                    <ul className='footer-list'>
                        <li><a href='#'>Clásico</a></li>
                        <li><a href='#'>Romance</a></li>
                        <li><a href='#'>Thriller</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <div className="tipus">LIBROS</div>
                    <ul className='footer-list'>
                        <li><a href='#'>COSMOS</a></li>
                        <li><a href='#'>Los miserables</a></li>
                        <li><a href='#'>Todo lo que seremos</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <div className="tipus">AUTORES</div>
                    <ul className='footer-list'>
                        <li><a href='#'>Alice Kellen</a></li>
                        <li><a href='#'>Stephen King</a></li>
                        <li><a href='#'>Mario Mendoza</a></li>
                        <li><a href='#'>Gabriel García Márquez</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <div className="tipus">SÍGUENOS EN</div>
                    <ul className='icons-list'>
                        <li><a href='https://twitter.com/?lang=es'><XIcon className='icon'/></a></li>
                        <li><a href='https://www.instagram.com/'><InstagramIcon className='icon'/></a></li>
                        <li><a href='https://web.facebook.com/'><FacebookIcon className='icon'/></a></li>
                        <li><a href='https://www.youtube.com'><YouTubeIcon className='icon'/></a></li>
                    </ul>
                </div>
            </div>
            <div className="credits">
                    <a href='#'>Preguntas frecuentes</a>
                    <a href='#'>Conócenos</a>
                    <a href='#'>Contactar</a>
                    <a href='#'>Condiciones de uso</a>
                    <a href='#'>Política de cookies</a>
                    <a href='#'>Política de privacidad</a>
                    <a href='#'>Oficina de Buenas Prácticas</a>
                    <p className='creditos'>Copyright © 2024 Flamel. Todos los derechos reservados.</p>
                </div>
        </div>
    );
}

export default Footer;
