import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const initialProducts = [
    { id: 1, name: 'NOTEBOOK LENOVO IDEAPAD 15IAU7 I3-1215U 4GB SSD sahdjsajhdhkasjdsadjasdkasdkasdas', price: 199.99, stock: 15, quantity: 0, urlImg: "https://images.tcdn.com.br/img/img_prod/1214924/notebook_lenovo_ideapad_15iau7_i3_1215u_4gb_ssd_256gb_15_6_win_11_23768_1_513611001e1d2d3005d73f02b4101fa8.jpeg" },
    { id: 2, name: 'CADEIRA GAMER THUNDERX3 BC3 ADMIRAL CAMUFLADO/AZUL', price: 49.99, stock: 50, quantity: 0, urlImg: "https://images.tcdn.com.br/img/img_prod/1214924/cadeira_gamer_thunderx3_bc3_admiral_camuflado_azul_23331_1_7b10fecf772f747d27e756519cce038f.png" },
];

const CarrinhoCompras = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleQuantityChange = (id: number, increment: number) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? {
                        ...product,
                        quantity: Math.max(
                            0,
                            Math.min(product.stock, product.quantity + increment)
                        ),
                    }
                    : product
            )
        );
    };

    return (
        <div className='flex pb-10'>
            <TableContainer className='bg-customGrayTable'>
                <Table>
                    {/* Cabeçalho da Tabela */}
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'><strong>Produto</strong></TableCell>
                            <TableCell align='center'><strong>Preço Unidade</strong></TableCell>
                            <TableCell align='center'><strong>Preço Total</strong></TableCell>
                            <TableCell align='center'><strong>Quantidade</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Corpo da Tabela */}
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell >
                                    <div className="truncate w-96">
                                        {product.name}
                                        {product.urlImg &&
                                            <img className='mt-3' src={product.urlImg} width="100" height="100" alt="" />
                                        }
                                    </div>
                                </TableCell>
                                <TableCell >{`R$ ${product.price.toFixed(2)}`}</TableCell>
                                <TableCell >{`R$ ${(product.price * product.quantity).toFixed(2)}`}</TableCell>
                                <TableCell >
                                    <IconButton
                                        size="small"
                                        onClick={() => handleQuantityChange(product.id, -1)}
                                        disabled={product.quantity === 0}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <span style={{ margin: '0 8px' }}>{product.quantity}</span>
                                    <IconButton
                                        size="small"
                                        onClick={() => handleQuantityChange(product.id, 1)}
                                        disabled={product.quantity >= product.stock}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        onClick={() => handleQuantityChange(product.id, 1)}
                                        disabled={product.quantity >= product.stock}
                                    >

                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ResumoCompra />
        </div>
    );
}


export default CarrinhoCompras

const ResumoCompra = () => {
    return (
        <div className='ml-5 w-1/3 max-h-72 bg-customGrayTable flex flex-col justify-between '>
            <h2 className='text-2xl text-center mt-3'>Resumo da compra</h2>
            <div className='flex flex-col p-3'>
                <span className='text-lg '>Produtos (3)</span>
                <div className='flex justify-between mt-1'>
                    <span className='text-xl'>Total: </span>
                    <span className='text-xl'>R$ 2040,00</span>
                </div>
                <div className='flex justify-center'>
                    <button className='mt-3 bg-[#2E2E2E] text-white py-2 px-4 rounded-full hover:bg-gray-500 w-56'>Continuar a Compra</button>
                </div>
            </div>
        </div>
    )

}