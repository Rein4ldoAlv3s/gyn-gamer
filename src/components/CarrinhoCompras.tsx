import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { PedidoContext } from '../contexts/PedidoContext';
import { PedidosContext } from '../contexts/PedidosContext';

const CarrinhoCompras = () => {
    // const [products, setProducts] = useState(initialProducts);

    const cart = useContext(CartContext);

    //qtd somada de varios produtos (ex: 2 mouses + 1 teclado)
    const [qtdTotal, setQtdTotal] = useState(0);

    //soma dos valores dos produtos do carrinho
    const [valorTotal, setValorTotal] = useState(0);

    const handleQuantityChange = (id: number, increment: number) => {
        cart?.setProdutos((prevProducts: any) =>
            prevProducts.map((product: any) => {

                // Verifica se o produto corresponde ao ID
                if (product.id === id) {
                    const updatedProduct = {
                        ...product,
                        quantity: Math.max(
                            0,
                            Math.min(product.stock, product.quantity + increment)
                        )
                    };

                    return updatedProduct;
                }

                // Produto inalterado
                return product;
            })
        );
    };

    const deleteProduct = (id: number) => {
        let produtosAtualizados = cart?.produtos.filter((p: { id: number; }) => p.id !== id)
        cart?.setProdutos(produtosAtualizados)

    }

    useEffect(() => {
        //Soma da quantidade total de produtos
        let qtdProdutosSomados = cart?.produtos.reduce((acumulador: any, produto: any) => acumulador + produto.quantity, 0)
        setQtdTotal(qtdProdutosSomados)

        //set valor global
        cart?.setQtdProduto(qtdProdutosSomados)

        //soma dos valores dos produtos
        let valorTotal = cart?.produtos.reduce((acumulador: any, produto: any) => acumulador + (produto.desc * produto.quantity), 0)
        setValorTotal(valorTotal)


    }, [cart]);

    return (

        <div className=''>
            <div>
                <h1 className="flex justify-center text-3xl font-bold text-customWhite pb-5">
                    CARRINHO DE COMPRAS
                </h1>
            </div>
            <div className='flex'>
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
                            {cart?.produtos.map((product: any) => (
                                <TableRow key={product.id}>
                                    <TableCell >
                                        <div className="truncate w-96">
                                            <Link to={`/produtos/${product.id}`}>
                                                {product.name}
                                            </Link>
                                            {product.name}
                                            {product.img &&
                                                <img className='mt-3 h-28' src={product.img} alt="" />
                                            }
                                        </div>
                                    </TableCell>
                                    <TableCell >{`R$ ${product.desc.toFixed(2)}`}</TableCell>
                                    <TableCell >{`R$ ${(product.desc * product.quantity).toFixed(2)}`}</TableCell>
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
                                            aria-label="delete"
                                            onClick={() => deleteProduct(product.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <ResumoCompra qtdTotal={qtdTotal} setQtdTotal={setQtdTotal} valorTotal={valorTotal} setValorTotal={setValorTotal} />
            </div>
            <div className='mt-6'>
                <Link to="/" className='bg-customGrayHover text-white text-center py-2 px-4 rounded-full hover:bg-gray-500 w-56'>Voltar Para a Página Inicial</Link>
            </div>
        </div>
    );
}


export default CarrinhoCompras

interface ResumoCompraProps {
    qtdTotal: number; // Tipo do estado
    setQtdTotal: React.Dispatch<React.SetStateAction<number>>; // Tipo do setter do estado
    valorTotal: number; // Tipo do estado
    setValorTotal: React.Dispatch<React.SetStateAction<number>>; // Tipo do setter do estado
}

const ResumoCompra = ({ qtdTotal, valorTotal }: ResumoCompraProps) => {

    const cart = useContext(CartContext);
    const pedido = useContext(PedidoContext);
    const pedidos = useContext(PedidosContext);
    const navigate = useNavigate();

    const inserirPedido = (e: any) => {
        e.preventDefault();
        console.log("continuar pedido");
        pedido?.setCarrinhoCompras((prev) => {
            let carrinhoCompras = {
                ...prev,
                produtos: cart?.produtos,
                qtdTotalProdutos: qtdTotal,
                precoTotalCompras: valorTotal
            }
            return carrinhoCompras
        })

        navigate("/escolha-endereco-entrega")

    }

    useEffect(() => {
        console.log(cart);
        console.log(pedido);

        //converte timestamp em formatado legivel para debug
        // console.log(new Date(pedido?.dataPedido));

        console.log("continuar cart");
    }, [cart])


    return (
        <div className='ml-5 w-1/3 max-h-72 bg-customGrayTable flex flex-col justify-between '>
            <h2 className='text-2xl text-center mt-3'>Resumo da compra</h2>
            <div className='flex flex-col p-3'>
                <span className='text-lg '>Produtos ({qtdTotal})</span>
                <div className='flex justify-between mt-1'>
                    <span className='text-xl'>Total: </span>
                    <span className='text-xl'>R$ {(valorTotal).toFixed(2)}</span>
                </div>
                <div className='flex justify-center'>
                    <button
                        className='mt-3 bg-[#2E2E2E] text-white text-center py-2 px-4 rounded-full hover:bg-gray-500 w-56'
                        onClick={(e) => (inserirPedido(e))}
                    >
                        Continuar Pedido
                    </button>
                </div>
            </div>
        </div>
    )

}