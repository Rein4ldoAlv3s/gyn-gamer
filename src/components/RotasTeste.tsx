import React from 'react'
import { Link } from 'react-router-dom'

const RotasTeste = () => {
    return (
        <div className='text-white flex flex-col'>
            <Link to="/my-profile" className='hover:text-red-600'>Meu Perfil</Link>
            <Link to="/cart" className='hover:text-red-600 mb-5'>Carrinho de Compras</Link>
            <Link to="/teste-usestate" className='hover:text-red-600'>Teste UseState</Link>
        </div>
    )
}

export default RotasTeste