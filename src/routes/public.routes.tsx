import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Promocoes from '../components/Promocoes'
import Cadastro from '../components/Cadastro'
import Home from '../components/Home'
import Login from '../components/Login'
import Notebooks from '../components/Notebooks'
import Pcgamer from '../components/Pcgamer'
import Produtos from '../components/Produtos'

const PublicRoutes = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/pcgamer" element={<Pcgamer />} />
            <Route path="/produtos/:id" element={<Produtos />} />
            <Route path="/notebooks" element={<Notebooks />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
        </>
    )
}

export default PublicRoutes