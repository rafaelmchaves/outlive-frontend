'use client'

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
    return (
        <div className="menu-bar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="product-form">Criar Produto</a></li>
                <li><a href="products-list">Lista de Produtos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Header;