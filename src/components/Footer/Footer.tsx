import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">&copy; 2024 VOShop. All rights reserved.</p>
                <div className="footer__links">
                    <a href="https://www.facebook.com/perewalow" className="footer__link" aria-label="Facebook"> <FontAwesomeIcon icon={faFacebook} /> </a>
                    <a href="https://github.com/VPerewalow" className="footer__link" aria-label="GitHub"> <FontAwesomeIcon icon={faGithub} /> </a>
                    <a href="https://www.instagram.com/perevova" className="footer__link" aria-label="Instagram"> <FontAwesomeIcon icon={faInstagram} /> </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;