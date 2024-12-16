import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Produto, PRODUTOS } from '../constants'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold text-customWhite">
                PRODUTOS NOVOS E LANÇAMENTOS
            </h1>
            <div>
                <div className='pb-5'>
                    <PaginatedItems itemsPerPage={8} />
                </div>
            </div>
        </div>
    )
}

function Produtos({ currentProdutos }: { currentProdutos: Produto[] }) {

    function formatarMoeda(valor: any) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-4 py-5 ">
                {currentProdutos.map((prod, index) => (
                    <Link key={index} to={`/produtos/${prod.id}`}>
                        <div className="flex justify-center flex-col items-center border-2 rounded-md border-gray-400 hover:scale-105 transition-transform duration-300" key={index}>
                            <div className="w-full h-60">
                                <img src={prod.img} alt="Imagem 1" className="w-full h-full object-cover" />

                            </div>
                            <div className="p-2 text-center">
                                <p className="pt-3 pb-1 text-center line-clamp-2 text-customWhite">{prod.name}</p>
                                <p className="text-customWhite">{formatarMoeda(prod.price)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
}

const itemsProdutos: Produto[] = PRODUTOS

function PaginatedItems({ itemsPerPage }: { itemsPerPage: any }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = itemsProdutos.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(itemsProdutos.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % itemsProdutos.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className=''>
                <Produtos currentProdutos={currentItems} />
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="Próximo >"
                previousLabel="< Anterior"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                containerClassName="flex justify-center items-center mt-4 space-x-2"
                pageClassName="bg-customGray border border-gray-300 rounded-md px-4 py-2 text-white hover:bg-customGrayHover"
                pageLinkClassName="text-sm medium"
                activeClassName="bg-blue-500 text-white font-extrabold"
                breakClassName="text-gray-400"
                nextClassName="bg-customWhite text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                previousClassName="bg-customWhite text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
    );
}

export default Home