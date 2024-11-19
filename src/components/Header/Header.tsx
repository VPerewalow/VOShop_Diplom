import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useCartContext from "../../hook/useCartContext";
import shopIcon from '../../assets/shop.svg'
import voShopIcon from '../../assets/VOShop.svg';
import './Header.css';

interface HeaderProps {
    setSearch: (search: string) => void;
    toggleTheme: () => void;
    isDarkMode: boolean;
}
const Header: React.FC<HeaderProps> = ({ setSearch, toggleTheme, isDarkMode }) => { 
    const { state } = useCartContext(); 
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => { 
        setSearch(event.target.value); 
    };

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__theme-toggle">
                    <button onClick={toggleTheme} className="theme-toggle-button" aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                    </button>
                </div>
                <Link to="/products" className="header__link">
                    <img src={voShopIcon} alt="VOShop" className="header__logo" />
                </Link> <div className="header__search">
                    <input type="text"
                        onChange={handleSearchChange}
                        
                        className="header__search-input"
                        placeholder="Search products..." />
                </div>
                <div className="header__icon-container">
                    <Link to="/cart">
                        <img src={shopIcon} alt="shop icon" className="header__icon" />
                    </Link>
                    <span className="header__icon-counter">{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;