'use client'

import { saveExpense } from '../../api/expenseService';
import React, { useState } from 'react';

import "./page.css";

// Define a type for the expense
interface Expense {
    name: string;
    type: string;
    value: string;
}

const RegisterExpense: React.FC = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const handleSave = () => {
        if (name && type && value) {
            const newExpense: Expense = { name, type, value };

            saveExpense(newExpense);
            setExpenses([...expenses, newExpense]);
            setName('');
            setType('');
            setValue('');
        }
    };

    return (
        <div className="register-expense">
            <h1>Registrar gastos</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Descrição:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter expense name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Tipo:</label>
                    <input
                        id="type"
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Enter expense type"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="value">Valor(R$):</label>
                    <input
                        id="value"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleSave}>Salvar</button>
            </form>
            <div className="expense-table">
                <h2>Gastos adicionados</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.name}</td>
                                <td>{expense.type}</td>
                                <td>{expense.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisterExpense;
