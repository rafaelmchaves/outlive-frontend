'use client';

import React, { useState, useEffect } from 'react';
import { findProducts } from '../../api/productService'; // Adjust the path to your API service
import './page.css';
import { Product } from '../../types/Product';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch products on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await findProducts('de497f7e-8e6c-4b61-bf25-c547f4b652f1', 0, 100);
                setProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Update filtered products based on search term
    useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Lista de produtos</h1>
                <input
                    type="text"
                    placeholder="Digite o que você busca..."
                    value={searchTerm}
                    className="search-box"
                    onChange={handleSearch}
                />
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </header>
        </div>
    );
};

export default ProductList;
