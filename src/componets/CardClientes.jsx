import { useState } from 'react';
import './CardClientes.css';

export const UserCard = ({ user }) => {
    const [isComprar, setIsComprar] = useState(false); 
    const { id, name, image } = user;

    const handleClick = () => {
        setIsComprar(!isComprar);
    };

    return (
        <div className='card'>
            <img className='image' src={image} alt={name} />
            <h3 className='name'>{name}</h3>
            <button id={id} onClick={handleClick}>
                {isComprar ? 'Comprado' : 'Comprar'}
            </button>
        </div>
    );
};