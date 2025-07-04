// Componente para mostrar la tarjeta de cada cliente
import { useState } from 'react';
import './CardClientes.css';

export const UserCard = ({ user }) => {
    // Estado para controlar si el producto está comprado
    const [isComprar, setIsComprar] = useState(false); 
    const { id, name, image } = user;

    // Función para cambiar el estado de compra
    const handleClick = () => {
        setIsComprar(!isComprar);
    };

    return (
        <div className='card'>
            <img className='image' src={image} alt={name} />
            <h3 className='name'>{name}</h3>
            {/* Botón que cambia entre "Comprar" y "Comprado" */}
            <button id={id} onClick={handleClick}>
                {isComprar ? 'Comprado' : 'Comprar'}
            </button>
        </div>
    );
};