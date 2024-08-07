import React, { useState, useEffect } from 'react';
import './Autocomplete.css';
import { Client } from '@/types/Client';

interface AutocompleteProps {
    clients: Client[];
    onSelectClient: (client: Client) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ clients, onSelectClient }) => {
    const [query, setQuery] = useState('');
    const [filteredClients, setFilteredClients] = useState<Client[]>([]);

    useEffect(() => {
        if (query) {
            setFilteredClients(
                clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()))
            );
        } else {
            setFilteredClients([]);
        }
    }, [query, clients]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSelectClient = (client: Client) => {
        setQuery(client.name);
        setFilteredClients([]);
        onSelectClient(client); // Notify parent about the selected client
    };

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for a client..."
            />
            {filteredClients.length > 0 && (
                <ul className="suggestions-list">
                    {filteredClients.map(client => (
                        <li
                            key={client.id}
                            onClick={() => handleSelectClient(client)}
                            className="suggestion-item"
                        >
                            {client.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;
