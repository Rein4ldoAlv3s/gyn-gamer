import { Route } from 'react-router-dom'
import CadastroEnderecoEntrega from '../components/CadastroEnderecoEntrega'
import CadastroUsuario from '../components/CadastroUsuario'
import CarrinhoCompras from '../components/CarrinhoCompras'
import DetalhePedido from '../components/DetalhePedido'
import EscolhaEnderecoEntrega from '../components/EscolhaEnderecoEntrega'
import EscolhaPagamento from '../components/EscolhaPagamento'
import Home from '../components/Home'
import Login from '../components/Login'
import MeusPedidos from '../components/MeusPedidos'
import MyProfile from '../components/MyProfile'
import Notebooks from '../components/Notebooks'
import PagamentoEscolhido from '../components/PagamentoEscolhido'
import Pcgamer from '../components/Pcgamer'
import Produtos from '../components/Produtos'
import Promocoes from '../components/Promocoes'
import RotasTeste from '../components/RotasTeste'
import TesteUsestate from '../components/TesteUsestate'

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
            <Route path="/escolha-pagamento" element={<EscolhaPagamento />} />
            <Route path="/pagamento-escolhido/:id" element={<PagamentoEscolhido />} />
            <Route path="/detalhe-pedido/:id" element={<DetalhePedido />} />
            <Route path="/meus-pedidos" element={<MeusPedidos />} />
        </>
    )
}

export default PublicRoutes