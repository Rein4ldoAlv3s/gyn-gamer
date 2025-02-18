import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Promocoes from '../components/Promocoes'
import Home from '../components/Home'
import Login from '../components/Login'
import Notebooks from '../components/Notebooks'
import Pcgamer from '../components/Pcgamer'
import Produtos from '../components/Produtos'
import CarrinhoCompras from '../components/CarrinhoCompras'
import MyProfile from '../components/MyProfile'
import RotasTeste from '../components/RotasTeste'
import TesteUsestate from '../components/TesteUsestate'
import CadastroUsuario from '../components/CadastroUsuario'
import EscolhaEnderecoEntrega from '../components/EscolhaEnderecoEntrega'
import CadastroEnderecoEntrega from '../components/CadastroEnderecoEntrega'

const PublicRoutes = () => {
    return (
        <>
            {/* <Route path="/" element={<Home />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/pcgamer" element={<Pcgamer />} />
            <Route path="/produtos/:id" element={<Produtos />} />
            <Route path="/notebooks" element={<Notebooks />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/pcgamer" element={<Pcgamer />} />
            <Route path="/produtos/:id" element={<Produtos />} />
            <Route path="/notebooks" element={<Notebooks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teste-usestate" element={<TesteUsestate />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/rotasteste" element={<RotasTeste />} />
            <Route path="/cart" element={<CarrinhoCompras />} />
            <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
            <Route path="/cadastro-endereco/:idEnd?" element={<CadastroEnderecoEntrega />} />
            <Route path="/escolha-endereco-entrega" element={<EscolhaEnderecoEntrega />} />
        </>
    )
}

export default PublicRoutes