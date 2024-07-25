'use client'

import React, { useState } from 'react';

import './page.css';

const initialProducts = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 10, quantity: 1 },
    { id: 3, name: 'Product 3', price: 30, quantity: 3 },
];

const initialAddresses = [
    { id: 1, address: 'Rua Juca Cândido, 700, Sete Lagoas' },
    { id: 2, address: 'Rua Antônio Chaves, 1001, Sete Lagoas' },
];

const Cart = () => {
    const [products, setProducts] = useState(initialProducts);
    const [addresses, setAddresses] = useState(initialAddresses);
    const [newAddress, setNewAddress] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleQuantityChange = (id: any, delta: any) => {
        setProducts(products.map(product =>
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
        } else {
            setErrorMessage('Pedido realizado. Número: 12148103');
            // Handle the confirmation logic here
            console.log('Order confirmed');
        }
    };

    return (
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
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.quantity}</td>
                            <td>${(product.price * product.quantity).toFixed(2)}</td>
                            <td>
                                <button className='quantity-button' onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                                <button className='quantity-button' onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
                <button onClick={handleAddAddress}>Add Address</button>
            </div>
            <div className="payment-method-section">
                <h2>Payment Method</h2>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="">Selecionar um método de pagamento</option>
                    <option value="credit-card">Cartão de crédito</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Pix</option>
                </select>
            </div>
            <div className="confirm-section">
                <button type="submit" onClick={handleConfirm}>Confirmar pedido</button>
            </div>
        </div>
    );
};

export default Cart;
