import { Link } from 'react-router-dom'

const RotasTeste = () => {
    return (
        <div className='text-white flex flex-col'>
            <Link to="/my-profile" className='hover:text-red-600'>Meu Perfil</Link>
            <Link to="/cart" className='hover:text-red-600 mb-5'>Carrinho de Compras</Link>
            <Link to="/teste-usestate" className='hover:text-red-600'>Teste UseState</Link>
            <Link to="/cadastro-usuario" className='hover:text-red-600'>Cadastro Usuario</Link>
            <Link to="/cadastro-endereco" className='hover:text-red-600'>Cadastro Endereco</Link>
            <Link to="/meus-pedidos" className='hover:text-red-600'>Meus Pedidos</Link>
            <Link to="/detalhe-pedido" className='hover:text-red-600'>Detalhe Pedido</Link>
        </div>
    )
}

export default RotasTeste