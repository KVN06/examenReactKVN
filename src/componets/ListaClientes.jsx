import React from 'react';
import './ListaClientes.css';
import { UserCard } from './CardClientes';

import vacaImg from '../assets/cow.png';
import perroImg from '../assets/dog.png';
import koalaImg from '../assets/koala.png';

const clientes = [
    {
        id: 1,
        name: 'Vaca',
        image: vacaImg
    },
    {
        id: 2,
        name: 'Perro',
        image: perroImg
    },
    {
        id: 3,
        name: 'Koala',
        image: koalaImg
    }
];

export const ListaClientes = () => {
    return (
        <section className="clientes-section">
            <h2>Lista de Clientes-Animales :)</h2>
            <div className="clientes-grid">
                {clientes.map((cliente) => (
                    <UserCard key={cliente.id} user={cliente} />
                    
                ))}
            </div>
        </section>
    );
};