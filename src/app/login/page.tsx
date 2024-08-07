'use client'

import React, { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Simulate login logic (replace with your backend integration)
        if (username === 'admin' && password === 'password') {
            setErrorMessage('');
            // Login successful (redirect or handle accordingly)
            console.log('Logado com sucesso');
        } else {
            setErrorMessage('Email ou Senha incorreta');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">email:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;