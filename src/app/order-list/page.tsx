'use client'
import './page.css';
import React, { useState } from 'react';

function OrderList() {

    const orders = [
        { id: 1, date: '05/07/2023', name: 'Allan', quantity: 2, total: '20,00', status: "Pedido Realizado" },
        { id: 2, date: '05/07/2023', name: 'Cintia', quantity: 1, total: '10,00', status: "Pedido Realizado" },
        { id: 3, date: '04/07/2023', name: 'Aureliano', quantity: 3, total: '30,00', status: "Pedido Entregue" },
        { id: 4, date: '03/07/2023', name: 'Fernand Almeida', quantity: 5, total: '35,50', status: "Pedido Entregue" },
        { id: 5, date: '01/07/2023', name: 'Roberto Lopes', quantity: 4, total: '20,00', status: "Pedido Entregue" },
        { id: 6, date: '01/07/2023', name: 'Herlon Joao', quantity: 4, total: '20,00', status: "Pedido Entregue" },
        { id: 7, date: '01/07/2023', name: 'Pedro Menezes', quantity: 4, total: '30,00', status: "Pedido Entregue" },
        { id: 8, date: '01/07/2023', name: 'Ana Júlia Almeida', quantity: 4, total: '20,00', status: "Pedido Entregue" },
    ];

    return (
        <div className="orders-container">
            <h1>Lista de pedidos</h1>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cliente</th>
                        <th>Quantidade</th>
                        <th>Valor total(R$)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.date}</td>
                            <td>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
