'use client'

import "./page.css";

import React, { useState } from 'react';

import { findProducts } from '../../api/productService';
import { error } from "console";

interface Product {
    id: string;
    name: string;
    type: string;
    description: string;
    price: string;
    fraction: string;
    sellerId: string;
    status: string
    image: string
}

async function ProductList() {
    const [searchTerm, setSearchTerm] = useState('');

    let products: any[] = [];
    try {
        products = await findProducts('de497f7e-8e6c-4b61-bf25-c547f4b652f1', 0, 100);
    } catch (e: any) {
        console.log(e);
    }

    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="App">
            <header className="App-header">
                <h1>Lista de produtos</h1>
                <input
                    type="text"
                    placeholder="Digite o que você busca..."
                    value={searchTerm}
                    className="search-box"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="product-list">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default ProductList;
