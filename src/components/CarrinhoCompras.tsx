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
    { id: 1, name: 'Produto 1', price: 199.99, stock: 15, quantity: 0 },
    { id: 2, name: 'Produto 2', price: 49.99, stock: 50, quantity: 0 },
    { id: 3, name: 'Produto 3', price: 349.99, stock: 5, quantity: 0 },
    { id: 4, name: 'Produto 4', price: 29.99, stock: 100, quantity: 0 },
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
        <div className='flex'>
            <TableContainer component={Paper}>
                <Table>
                    {/* Cabeçalho da Tabela */}
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'><strong>Produto</strong></TableCell>
                            <TableCell align='center'><strong>Preço</strong></TableCell>
                            <TableCell align='center'><strong>Quantidade</strong></TableCell>
                            <TableCell align='center'><strong>Quantidade</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Corpo da Tabela */}
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell align='center'>{product.name}</TableCell>
                                <TableCell align='center'>{`R$ ${product.price.toFixed(2)}`}</TableCell>
                                <TableCell align='center'>{`R$ ${(product.price * product.quantity).toFixed(2)}`}</TableCell>
                                <TableCell align='center'>
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
        <div className='ml-5 w-1/3 bg-[#1E1E1E]'>
            Ola, mundo!
        </div>
    )

}