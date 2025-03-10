import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CarrinhoCompras from '../components/CarrinhoCompras'
import MyProfile from '../components/MyProfile'
import RotasTeste from '../components/RotasTeste'
import TesteUsestate from '../components/TesteUsestate'
import Cadastro from '../components/CadastroUsuario'
import Home from '../components/Home'
import Login from '../components/Login'
import Notebooks from '../components/Notebooks'
import Pcgamer from '../components/Pcgamer'
import Produtos from '../components/Produtos'
import Promocoes from '../components/Promocoes'
import CadastroUsuario from '../components/CadastroUsuario'
import CadastroEnderecoEntrega from '../components/CadastroEnderecoEntrega'
import EscolhaEnderecoEntrega from '../components/EscolhaEnderecoEntrega'
import EscolhaPagamento from '../components/EscolhaPagamento'
import PagamentoEscolhido from '../components/PagamentoEscolhido'


const PrivateRoutes = () => {
    return (
        <>
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
            <Route path="/escolha-pagamento" element={<EscolhaPagamento />} />
            <Route path="/pagamento-escolhido" element={<PagamentoEscolhido />} />
        </>
    )
}

export default PrivateRoutes