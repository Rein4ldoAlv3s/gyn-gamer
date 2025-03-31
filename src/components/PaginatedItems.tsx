import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Produto, PRODUTOS } from '../constants';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


// function Items({ currentItems }: { currentItems: number[] }) {
//     return (
//         <>
//             {currentItems &&
//                 currentItems.map((item: any) => (
//                     <div key={item}>
//                         <h3>Item #{item}</h3>
//                     </div>
//                 ))}
//         </>
//     );
// }

const itemsProdutos: Produto[] = PRODUTOS

function Produtos({ currentProdutos }: { currentProdutos: Produto[] }) {
    return (
        <>
            {currentProdutos &&
                currentProdutos.map((item: Produto) => (
                    <div key={item.id}>
                        <h3 className=''>{item.name}</h3>
                    </div>
                ))}
        </>
    );
}

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
        <div className="p-6 bg-gray-50 rounded-md shadow-lg">
            <h1 className="text-xl font-bold mb-4 text-gray-800">Paginated Items</h1>

            {/* Renderização de itens */}
            <div className="grid grid-cols-1 gap-4 ">
                <Produtos currentProdutos={currentItems} />
            </div>

            {/* Paginação */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="Próximo >"
                previousLabel="< Anterior"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                containerClassName="flex justify-center items-center mt-4 space-x-2"
                pageClassName="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-200"
                pageLinkClassName="text-sm medium"
                activeClassName="bg-blue-500 text-white font-bold"
                breakClassName="text-gray-400"
                nextClassName="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                previousClassName="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
    );
}

export default PaginatedItems;