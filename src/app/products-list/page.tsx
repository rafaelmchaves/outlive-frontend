'use client';

import React, { useState, useEffect } from 'react';
import { findProducts } from '../../api/productService';
import './page.css';
import { Product } from '../../types/Product';
import { Order } from '@/types/Order';
import { OrderProductRequest } from '@/types/OrderProductRequest';
import { saveOrders } from '@/api/orderService';
import Autocomplete from '@/components/Autocomplete';
import { Client } from '@/types/Client';

const initialAddresses = [
    { id: 1, address: 'Rua Juca Cândido, 700, Sete Lagoas' },
    { id: 2, address: 'Rua Antônio Chaves, 1001, Sete Lagoas' },
];

const clients = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Michael Johnson' },
    { id: '4', name: 'Emily Davis' }
    // Add more clients as needed
];

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState<Product[]>([]);
    const [addresses, setAddresses] = useState(initialAddresses);
    const [newAddress, setNewAddress] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [selectedClient, setSelectedClient] = useState<Client | null>(null);

    const clients: Client[] = [
        { id: '73c95d4a-8ef7-43db-bb3d-c8b001d9c3f4', name: 'John Doe' },
        { id: '73c95d4a-8ef7-43db-bb3d-c8b001d9c3f3', name: 'Jane Smith' },
        { id: '73c95d4a-8ef7-43db-bb3d-c8b001d9c3f2', name: 'Michael Johnson' },
        { id: '73c95d4a-8ef7-43db-bb3d-c8b001d9c3f1', name: 'Emily Davis' }
        // Add more clients as needed
    ];

    const handleSelectClient = (client: Client) => {
        setSelectedClient(client);
    };
    const [query, setQuery] = useState('');

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

    const handleAddToCart = (productToAdd: Product) => {
        let foundProduct = cart.filter(prod => prod.id == productToAdd.id);
        console.log(foundProduct);
        if (foundProduct.length != 0) {
            setCart(cart.map(product =>
                product.id === productToAdd.id ? { ...product, quantity: product.quantity ? product.quantity + 1 : 1 } : product
            ));
        } else {
            productToAdd.quantity = 1;
            setCart(prevCart => [...prevCart, productToAdd]);
        }

    };

    const handleQuantityChange = (id: any, delta: any) => {
        setCart(cart.map(product =>
            product.id === id ? { ...product, quantity: Math.max(product.quantity + delta, 0) } : product
        ));

    };

    const handleAddAddress = () => {
        if (newAddress.trim()) {
            setAddresses([...addresses, { id: addresses.length + 1, address: newAddress }]);
            setNewAddress('');
        }
    };

    const handleConfirm = () => {
        if (!selectedAddress) {
            setErrorMessage('Por favor, selecione um endereço.');
        } else if (!paymentMethod) {
            setErrorMessage('Por favor, selecione um método de pagamento.');
        } else if (!selectedClient) {
            setErrorMessage('Por favor, selecione o cliente.');
        }
        else {

            const mapToOrderProductRequest = (products: Product[]): OrderProductRequest[] => {
                return products.map(product => {
                    if (product.id && product.quantity != null) {
                        return {
                            productId: product.id,
                            amount: product.quantity,
                            price: product.price
                        };
                    } else {
                        throw new Error('Product id or quantity is missing');
                    }
                });
            };
            const order: Order = {
                customerId: selectedClient.id,
                addressText: selectedAddress,
                orders: mapToOrderProductRequest(cart),
                paymentMethod: paymentMethod,
            };
            saveOrders(order);
            setErrorMessage('Pedido realizado');
            // Handle the confirmation logic here
            console.log('Order confirmed');
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => {
            // Remove any non-numeric characters and parse the price as a float
            return total + (isNaN(product.price) || !product.quantity ? 0 : product.price * product.quantity);
        }, 0);
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
                                <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Não foi encontrado produtos com essa busca</p>
                    )}
                </div>
            </header>
            <div className="cart-container">
                <h1>Seu carrinho</h1>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>{product.quantity}</td>
                                <td>${(product.price * (product.quantity != undefined ? product.quantity : 0)).toFixed(2)}</td>
                                <td>
                                    <button className='quantity-button' onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                                    <button className='quantity-button' onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>Total Price: <b>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</b></p>
                <div className="address-section">
                    <h2>Address</h2>
                    <select value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)}>
                        <option value="">Selecione um endereço</option>
                        {addresses.map(addr => (
                            <option key={addr.id} value={addr.address}>{addr.address}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        placeholder="Adicionar um novo endereço"
                    />
                    <button className='quantity-button' onClick={handleAddAddress}>Add Address</button>
                </div>
                <div className="payment-method-section">
                    <h2>Método de pagamento</h2>
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="">Selecionar um método de pagamento</option>
                        <option value="credit-card">Cartão de crédito</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">Pix</option>
                    </select>
                </div>
                <div>
                    <h1>Client Autocomplete</h1>
                    <Autocomplete clients={clients} onSelectClient={handleSelectClient} />
                    {selectedClient && (
                        <div className="selected-client">
                            Selected Client: {selectedClient.name}
                        </div>
                    )}
                </div>
                <div className="confirm-section">
                    <button type="submit" onClick={handleConfirm}>Confirmar pedido</button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
