import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CarrinhoCompras from '../components/CarrinhoCompras'
import MyProfile from '../components/MyProfile'
import RotasTeste from '../components/RotasTeste'
import TesteUsestate from '../components/TesteUsestate'


const PrivateRoutes = () => {
    return (
        <>
            <Route path="/teste-usestate" element={<TesteUsestate />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/rotasteste" element={<RotasTeste />} />
            <Route path="/cart" element={<CarrinhoCompras />} />
        </>
    )
}

export default PrivateRoutes